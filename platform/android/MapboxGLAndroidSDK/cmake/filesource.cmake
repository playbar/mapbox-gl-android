add_library(mbgl-filesource STATIC
    # File source
    include/mbgl/storage/default_file_source.hpp
    default/default_file_source.cpp
    default/mbgl/storage/file_source_request.hpp
    default/file_source_request.cpp
    include/mbgl/storage/online_file_source.hpp
    default/online_file_source.cpp
    cpp/mbgl/storage/http_file_source.hpp
    cpp/mbgl/storage/asset_file_source.hpp
    default/asset_file_source.cpp
    cpp/mbgl/storage/local_file_source.hpp
    default/local_file_source.cpp

    # Offline
    include/mbgl/storage/offline.hpp
    default/mbgl/storage/offline.cpp
    default/mbgl/storage/offline_database.hpp
    default/mbgl/storage/offline_database.cpp
    default/mbgl/storage/offline_download.hpp
    default/mbgl/storage/offline_download.cpp

    # Database
    default/sqlite3.hpp
)

target_add_mason_package(mbgl-filesource PUBLIC geometry)
target_add_mason_package(mbgl-filesource PUBLIC variant)
target_add_mason_package(mbgl-filesource PRIVATE rapidjson)
target_add_mason_package(mbgl-filesource PRIVATE boost)
target_add_mason_package(mbgl-filesource PRIVATE geojson)

target_include_directories(mbgl-filesource
    PRIVATE include
    PRIVATE src
    PRIVATE platform/default
)

target_link_libraries(mbgl-filesource
    PUBLIC mbgl-core
)

mbgl_filesource()

create_source_groups(mbgl-filesource)

xcode_create_scheme(TARGET mbgl-filesource)

initialize_xcode_cxx_build_settings(mbgl-filesource)
