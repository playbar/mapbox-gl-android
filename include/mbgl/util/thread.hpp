#pragma once

#include <mbgl/actor/actor.hpp>
#include <mbgl/actor/mailbox.hpp>
#include <mbgl/actor/scheduler.hpp>
#include <mbgl/util/platform.hpp>
#include <mbgl/util/run_loop.hpp>
#include <mbgl/util/util.hpp>
#include "mylog.h"

#include <cassert>
#include <future>
#include <memory>
#include <mutex>
#include <queue>
#include <string>
#include <thread>
#include <utility>

namespace mbgl {
namespace util {

// Manages a thread with `Object`.

// Upon creation of this object, it launches a thread and creates an object of type `Object`
// in that thread. When the `Thread<>` object is destructed, the destructor waits
// for thread termination. The `Thread<>` constructor blocks until the thread and
// the `Object` are fully created, so after the object creation, it's safe to obtain the
// `Object` stored in this thread. The thread created will always have low priority on
// the platforms that support setting thread priority.
//
// The following properties make this class different from `ThreadPool`:
//
// - Only one thread is created.
// - `Object` will live in a single thread, providing thread affinity.
// - It is safe to use `ThreadLocal` in an `Object` managed by `Thread<>`
// - A `RunLoop` is created for the `Object` thread.
// - `Object` can use `Timer` and do asynchronous I/O, like wait for sockets events.
//
template<class Object>
class Thread : public Scheduler {
public:
    template <class... Args>
    Thread(const std::string& name, Args&&... args) {
        std::promise<void> running;
        
        LOGE("Fun:%s, Line:%d, name=%s \n", __FUNCTION__, __LINE__, name.c_str());

        thread = std::thread([&] {
            platform::setCurrentThreadName(name);
            platform::makeThreadLowPriority();

            util::RunLoop loop_(util::RunLoop::Type::New);
            loop = &loop_;

            object = std::make_unique<Actor<Object>>(*this, std::forward<Args>(args)...);
            running.set_value();

            loop->run();
            loop = nullptr;
        });

        running.get_future().get();
    }

    ~Thread() override {
        if (paused) {
            resume();
        }

        std::promise<void> joinable;

        // Kill the actor, so we don't get more
        // messages posted on this scheduler after
        // we delete the RunLoop.
        loop->invoke([&] {
            object.reset();
            joinable.set_value();
        });

        joinable.get_future().get();

        loop->stop();
        thread.join();
    }

    // Returns a non-owning reference to `Object` that
    // can be used to send messages to `Object`. It is safe
    // to the non-owning reference to outlive this object
    // and be used after the `Thread<>` gets destroyed.
    ActorRef<std::decay_t<Object>> actor() const {
        return object->self();
    }

    // Pauses the `Object` thread. It will prevent the object to wake
    // up from events such as timers and file descriptor I/O. Messages
    // sent to a paused `Object` will be queued and only processed after
    // `resume()` is called.
    void pause() {
        MBGL_VERIFY_THREAD(tid);

        assert(!paused);

        paused = std::make_unique<std::promise<void>>();
        resumed = std::make_unique<std::promise<void>>();

        auto pausing = paused->get_future();

        loop->invoke(RunLoop::Priority::High, [this] {
            auto resuming = resumed->get_future();
            paused->set_value();
            resuming.get();
        });

        pausing.get();
    }

    // Resumes the `Object` thread previously paused by `pause()`.
    void resume() {
        MBGL_VERIFY_THREAD(tid);

        assert(paused);

        resumed->set_value();

        resumed.reset();
        paused.reset();
    }

private:
    MBGL_STORE_THREAD(tid);

    void schedule(std::weak_ptr<Mailbox> mailbox) override {
        loop->schedule(mailbox);
    }

    std::thread thread;
    std::unique_ptr<Actor<Object>> object;

    std::unique_ptr<std::promise<void>> paused;
    std::unique_ptr<std::promise<void>> resumed;

    util::RunLoop* loop = nullptr;
};

} // namespace util
} // namespace mbgl
