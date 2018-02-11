add_definitions(-DMBGL_USE_GLES2=1)
include(cmake/test-files.cmake)

# Build thin archives.
set(CMAKE_CXX_ARCHIVE_CREATE "<CMAKE_AR> cruT <TARGET> <LINK_FLAGS> <OBJECTS>")
set(CMAKE_C_ARCHIVE_CREATE "<CMAKE_AR> cruT <TARGET> <LINK_FLAGS> <OBJECTS>")
set(CMAKE_CXX_ARCHIVE_APPEND "<CMAKE_AR> ruT <TARGET> <LINK_FLAGS> <OBJECTS>")
set(CMAKE_C_ARCHIVE_APPEND "<CMAKE_AR> ruT <TARGET> <LINK_FLAGS> <OBJECTS>")

set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -ffunction-sections -fdata-sections")
set(CMAKE_C_FLAGS "${CMAKE_C_FLAGS} -ffunction-sections -fdata-sections")

if ((ANDROID_ABI STREQUAL "armeabi") OR (ANDROID_ABI STREQUAL "armeabi-v7a") OR (ANDROID_ABI STREQUAL "arm64-v8a") OR
    (ANDROID_ABI STREQUAL "x86") OR (ANDROID_ABI STREQUAL "x86_64"))
    # Use Identical Code Folding on platforms that support the gold linker.
    set(CMAKE_EXE_LINKER_FLAGS "-fuse-ld=gold -Wl,--icf=safe ${CMAKE_EXE_LINKER_FLAGS}")
    set(CMAKE_SHARED_LINKER_FLAGS "-fuse-ld=gold -Wl,--icf=safe ${CMAKE_SHARED_LINKER_FLAGS}")
endif()

set(CMAKE_EXE_LINKER_FLAGS "${CMAKE_EXE_LINKER_FLAGS} -Wl,--gc-sections -Wl,--version-script=${CMAKE_SOURCE_DIR}/platform/android/version-script")
set(CMAKE_SHARED_LINKER_FLAGS "${CMAKE_SHARED_LINKER_FLAGS} -Wl,--gc-sections -Wl,--version-script=${CMAKE_SOURCE_DIR}/platform/android/version-script")

mason_use(jni.hpp VERSION 3.0.0 HEADER_ONLY)
mason_use(nunicode VERSION 1.7.1)
mason_use(sqlite VERSION 3.14.2)
mason_use(gtest VERSION 1.8.0)
mason_use(icu VERSION 58.1-min-size)

## mbgl core ##

macro(mbgl_platform_core)
    target_sources(mbgl-core
        # Loop
        PRIVATE android_src/async_task.cpp
        PRIVATE android_src/run_loop.cpp
        PRIVATE android_src/run_loop_impl.hpp
        PRIVATE android_src/timer.cpp

        # Misc
        PRIVATE android_src/text/local_glyph_rasterizer_jni.hpp
        PRIVATE android_src/text/local_glyph_rasterizer.cpp
        PRIVATE android_src/logging_android.cpp
        PRIVATE android_src/thread.cpp
        PRIVATE default/string_stdlib.cpp
        PRIVATE default/bidi.cpp
        PRIVATE default/thread_local.cpp
        PRIVATE default/utf.cpp

        # Image handling
        PRIVATE default/png_writer.cpp
        PRIVATE android_src/bitmap.cpp
        PRIVATE android_src/bitmap.hpp
        PRIVATE android_src/bitmap_factory.cpp
        PRIVATE android_src/bitmap_factory.hpp
        PRIVATE android_src/image.cpp

        # Thread pool
        PRIVATE default/mbgl/util/shared_thread_pool.cpp
        PRIVATE default/mbgl/util/shared_thread_pool.hpp
        PRIVATE default/mbgl/util/default_thread_pool.cpp
        PRIVATE default/mbgl/util/default_thread_pool.hpp

        # Rendering
        PRIVATE android_src/android_renderer_backend.cpp
        PRIVATE android_src/android_renderer_backend.hpp
        PRIVATE android_src/android_renderer_frontend.cpp
        PRIVATE android_src/android_renderer_frontend.hpp

        # Snapshots (core)
        PRIVATE default/mbgl/gl/headless_backend.cpp
        PRIVATE default/mbgl/gl/headless_backend.hpp
        PRIVATE default/mbgl/gl/headless_frontend.cpp
        PRIVATE default/mbgl/gl/headless_frontend.hpp
        PRIVATE default/mbgl/map/map_snapshotter.cpp
        PRIVATE default/mbgl/map/map_snapshotter.hpp
        PRIVATE linux/src/headless_backend_egl.cpp
    )

    target_include_directories(mbgl-core
        PUBLIC platform/default
        PRIVATE platform/android
    )

    target_add_mason_package(mbgl-core PUBLIC nunicode)
    target_add_mason_package(mbgl-core PUBLIC geojson)
    target_add_mason_package(mbgl-core PUBLIC jni.hpp)
    target_add_mason_package(mbgl-core PUBLIC rapidjson)
    target_add_mason_package(mbgl-core PRIVATE icu)

    target_link_libraries(mbgl-core
        PUBLIC -llog
        PUBLIC -landroid
        PUBLIC -ljnigraphics
        PUBLIC -lEGL
        PUBLIC -lGLESv2
        PUBLIC -lstdc++
        PUBLIC -latomic
        PUBLIC -lz
    )
endmacro()


macro(mbgl_filesource)
    target_sources(mbgl-filesource
        # File source
        PRIVATE android_src/http_file_source.cpp
        PRIVATE android_src/asset_manager.hpp
        PRIVATE android_src/asset_manager_file_source.cpp
        PRIVATE android_src/asset_manager_file_source.hpp

        # Database
        PRIVATE default/sqlite3.cpp
    )

    target_add_mason_package(mbgl-filesource PUBLIC sqlite)
    target_add_mason_package(mbgl-filesource PUBLIC jni.hpp)

    target_link_libraries(mbgl-filesource
        PUBLIC -llog
        PUBLIC -landroid
        PUBLIC -lstdc++
        PUBLIC -latomic
    )
endmacro()


## Main library ##

add_library(mbgl-android STATIC
    # Conversion C++ -> Java
    android_src/conversion/constant.hpp
    android_src/conversion/conversion.hpp
    android_src/style/conversion/function.hpp
    android_src/style/conversion/property_value.hpp
    android_src/style/conversion/types.hpp
    android_src/style/conversion/types_string_values.hpp
    android_src/map/camera_position.cpp
    android_src/map/camera_position.hpp
    android_src/map/image.cpp
    android_src/map/image.hpp

    # Style conversion Java -> C++
    android_src/style/android_conversion.hpp
    android_src/style/value.cpp
    android_src/style/value.hpp
    android_src/style/conversion/url_or_tileset.hpp

    # Style
    android_src/style/transition_options.cpp
    android_src/style/transition_options.hpp
    android_src/style/layers/background_layer.cpp
    android_src/style/layers/background_layer.hpp
    android_src/style/layers/circle_layer.cpp
    android_src/style/layers/circle_layer.hpp
    android_src/style/layers/custom_layer.cpp
    android_src/style/layers/custom_layer.hpp
    android_src/style/layers/fill_extrusion_layer.cpp
    android_src/style/layers/fill_extrusion_layer.hpp
    android_src/style/layers/fill_layer.cpp
    android_src/style/layers/fill_layer.hpp
    android_src/style/layers/layer.cpp
    android_src/style/layers/layer.hpp
    android_src/style/layers/layers.cpp
    android_src/style/layers/layers.hpp
    android_src/style/layers/line_layer.cpp
    android_src/style/layers/line_layer.hpp
    android_src/style/layers/raster_layer.cpp
    android_src/style/layers/raster_layer.hpp
    android_src/style/layers/symbol_layer.cpp
    android_src/style/layers/symbol_layer.hpp
    android_src/style/layers/unknown_layer.cpp
    android_src/style/layers/unknown_layer.hpp
    android_src/style/sources/geojson_source.cpp
    android_src/style/sources/geojson_source.hpp
    android_src/style/sources/custom_geometry_source.cpp
    android_src/style/sources/custom_geometry_source.hpp
    android_src/style/sources/source.cpp
    android_src/style/sources/source.hpp
    android_src/style/sources/raster_source.cpp
    android_src/style/sources/raster_source.hpp
    android_src/style/sources/unknown_source.cpp
    android_src/style/sources/unknown_source.hpp
    android_src/style/sources/vector_source.cpp
    android_src/style/sources/vector_source.hpp
    android_src/style/sources/image_source.hpp
    android_src/style/sources/image_source.cpp
    android_src/style/functions/stop.cpp
    android_src/style/functions/stop.hpp
    android_src/style/functions/categorical_stops.cpp
    android_src/style/functions/categorical_stops.hpp
    android_src/style/functions/exponential_stops.cpp
    android_src/style/functions/exponential_stops.hpp
    android_src/style/functions/identity_stops.cpp
    android_src/style/functions/identity_stops.hpp
    android_src/style/functions/interval_stops.cpp
    android_src/style/functions/interval_stops.hpp
    android_src/style/position.cpp
    android_src/style/position.hpp
    android_src/style/light.cpp
    android_src/style/light.hpp

    # FileSource holder
    android_src/file_source.cpp
    android_src/file_source.hpp

    # Connectivity
    android_src/connectivity_listener.cpp
    android_src/connectivity_listener.hpp

    # Native map
    android_src/native_map_view.cpp
    android_src/native_map_view.hpp
    android_src/map_renderer.cpp
    android_src/map_renderer.hpp
    android_src/map_renderer_runnable.cpp
    android_src/map_renderer_runnable.hpp

    # Java core classes
    android_src/java/util.cpp
    android_src/java/util.hpp

    # Graphics
    android_src/graphics/pointf.cpp
    android_src/graphics/pointf.hpp
    android_src/graphics/rectf.cpp
    android_src/graphics/rectf.hpp

    # GeoJSON
    android_src/geojson/feature.cpp
    android_src/geojson/feature.hpp
    android_src/geojson/feature_collection.cpp
    android_src/geojson/feature_collection.hpp
    android_src/geojson/geometry.cpp
    android_src/geojson/geometry.hpp
    android_src/geojson/line_string.cpp
    android_src/geojson/line_string.hpp
    android_src/geojson/multi_line_string.cpp
    android_src/geojson/multi_line_string.hpp
    android_src/geojson/multi_point.cpp
    android_src/geojson/multi_point.hpp
    android_src/geojson/multi_polygon.cpp
    android_src/geojson/multi_polygon.hpp
    android_src/geojson/point.cpp
    android_src/geojson/point.hpp
    android_src/geojson/polygon.cpp
    android_src/geojson/polygon.hpp
    android_src/geojson/position.cpp
    android_src/geojson/position.hpp

    # Geometry
    android_src/geometry/lat_lng.cpp
    android_src/geometry/lat_lng.hpp
    android_src/geometry/lat_lng_bounds.cpp
    android_src/geometry/lat_lng_bounds.hpp
    android_src/geometry/lat_lng_quad.cpp
    android_src/geometry/lat_lng_quad.hpp
    android_src/geometry/projected_meters.cpp
    android_src/geometry/projected_meters.hpp

    # GSon
    android_src/gson/json_array.cpp
    android_src/gson/json_array.hpp
    android_src/gson/json_element.cpp
    android_src/gson/json_element.hpp
    android_src/gson/json_object.cpp
    android_src/gson/json_object.hpp
    android_src/gson/json_primitive.cpp
    android_src/gson/json_primitive.hpp

    # Annotation
    android_src/annotation/marker.cpp
    android_src/annotation/marker.hpp
    android_src/annotation/polygon.cpp
    android_src/annotation/polygon.hpp
    android_src/annotation/polyline.cpp
    android_src/annotation/polyline.hpp

    # Offline
    android_src/offline/offline_manager.cpp
    android_src/offline/offline_manager.hpp
    android_src/offline/offline_region.cpp
    android_src/offline/offline_region.hpp
    android_src/offline/offline_region_definition.cpp
    android_src/offline/offline_region_definition.hpp
    android_src/offline/offline_region_error.cpp
    android_src/offline/offline_region_error.hpp
    android_src/offline/offline_region_status.cpp
    android_src/offline/offline_region_status.hpp

    # Snapshots (SDK)
    android_src/snapshotter/map_snapshotter.cpp
    android_src/snapshotter/map_snapshotter.hpp
    android_src/snapshotter/map_snapshot.cpp
    android_src/snapshotter/map_snapshot.hpp

    # Main jni bindings
    android_src/attach_env.cpp
    android_src/attach_env.hpp
    android_src/java_types.cpp
    android_src/java_types.hpp

    # Main entry point
    android_src/jni.hpp
    android_src/jni.cpp
)

target_link_libraries(mbgl-android
    PUBLIC mbgl-filesource
    PUBLIC mbgl-core
)

## Shared library

add_library(mapbox-gl SHARED
    android_src/main.cpp
)

target_link_libraries(mapbox-gl
    PRIVATE mbgl-android
)

## Test library ##

set(MBGL_TEST_TARGET_TYPE "library")
macro(mbgl_platform_test)
    target_sources(mbgl-test
        PRIVATE default/mbgl/test/main.cpp

        # Main test entry point
        android_src/test/main.jni.cpp
    )

    target_include_directories(mbgl-test
        PRIVATE platform/android
    )

    target_link_libraries(mbgl-test
        PRIVATE mbgl-android
    )
endmacro()

## Custom layer example ##

add_library(example-custom-layer SHARED
    android_src/example_custom_layer.cpp
)

target_link_libraries(example-custom-layer
    PRIVATE mbgl-core
)
