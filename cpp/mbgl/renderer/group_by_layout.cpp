#include <mbgl/renderer/group_by_layout.hpp>
#include <mbgl/renderer/render_layer.hpp>
#include <mbgl/style/layer_impl.hpp>
#include <mbgl/style/conversion/stringify.hpp>
#include <mbgl/util/rapidjson.hpp>

#include <rapidjson/writer.h>
#include <rapidjson/stringbuffer.h>

#include <unordered_map>
#include <mylog.h>
#include <unistd.h>

namespace mbgl {

std::string layoutKey(const RenderLayer& layer) {
    using namespace style::conversion;

    rapidjson::StringBuffer s;
    rapidjson::Writer<rapidjson::StringBuffer> writer(s);

    writer.StartArray();
    writer.Uint(static_cast<uint32_t>(layer.type));
    writer.String(layer.baseImpl->source);
    writer.String(layer.baseImpl->sourceLayer);
    writer.Double(layer.baseImpl->minZoom);
    writer.Double(layer.baseImpl->maxZoom);
    writer.Uint(static_cast<uint32_t>(layer.baseImpl->visibility));
    stringify(writer, layer.baseImpl->filter);
    layer.baseImpl->stringifyLayout(writer);
    writer.EndArray();

    return s.GetString();
}

std::vector<std::vector<const RenderLayer*>> groupByLayout(const std::vector<std::unique_ptr<RenderLayer>>& layers) {
    LOGE("begin-------------------");
    std::unordered_map<std::string, std::vector<const RenderLayer*>> map;
    for (auto& layer : layers) {
        std::string strFirst = layoutKey(*layer);
        LOGE("Fun:%s, Line:%d, key=%s, tid=%d", __FUNCTION__, __LINE__, strFirst.c_str(), gettid());
        map[layoutKey(*layer)].push_back(layer.get());
    }

    LOGE("-------------------");
    std::vector<std::vector<const RenderLayer*>> result;
    for (auto& pair : map) {
        LOGE("Fun:%s, Line:%d, key=%s, tid=%d", __FUNCTION__, __LINE__, pair.first.c_str(), gettid());
        result.push_back(pair.second);
    }
    LOGE("end-------------------");

    return result;
}

} // namespace mbgl
