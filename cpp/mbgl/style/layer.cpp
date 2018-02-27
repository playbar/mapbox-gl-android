#include <mbgl/style/layer.hpp>
#include <mbgl/style/layer_impl.hpp>
#include <mbgl/style/layer_observer.hpp>
#include <mylog.h>
#include <unistd.h>

namespace mbgl {
namespace style {

static LayerObserver nullObserver;

Layer::Layer(Immutable<Impl> impl)
    : baseImpl(std::move(impl)),
      observer(&nullObserver) {
}

Layer::~Layer() = default;

LayerType Layer::getType() const {
    return baseImpl->type;
}

std::string Layer::getID() const {
    LOGE("Fun:%s, Line:%d, id=%s, tid=%d", __FUNCTION__, __LINE__, baseImpl->id.c_str(), gettid());
    return baseImpl->id;
}

VisibilityType Layer::getVisibility() const {
    return baseImpl->visibility;
}

float Layer::getMinZoom() const {
    return baseImpl->minZoom;
}

float Layer::getMaxZoom() const {
    return baseImpl->maxZoom;
}

void Layer::setObserver(LayerObserver* observer_) {
    observer = observer_ ? observer_ : &nullObserver;
}

} // namespace style
} // namespace mbgl
