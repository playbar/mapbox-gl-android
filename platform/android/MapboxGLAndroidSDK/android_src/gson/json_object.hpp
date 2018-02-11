#pragma once

#include <mapbox/geometry.hpp>
#include <mbgl/util/noncopyable.hpp>

#include <jni/jni.hpp>

namespace mbgl {
namespace android {
namespace gson {

class JsonObject : private mbgl::util::noncopyable {
public:
    static constexpr auto Name() { return "com/google/gson/JsonObject"; };

    static mapbox::geometry::property_map convert(JNIEnv&, jni::Object<JsonObject>);

    static jni::Class<JsonObject> javaClass;

    static void registerNative(jni::JNIEnv&);
};

} // namespace gson
} // namespace android
} // namespace mbgl