#----------------------------------------------------------------
# Generated CMake target import file for configuration "Release".
#----------------------------------------------------------------

# Commands may need to know the format version.
set(CMAKE_IMPORT_FILE_VERSION 1)

# Import target "nunicode::nu" for configuration "Release"
set_property(TARGET nunicode::nu APPEND PROPERTY IMPORTED_CONFIGURATIONS RELEASE)
set_target_properties(nunicode::nu PROPERTIES
  IMPORTED_LINK_INTERFACE_LANGUAGES_RELEASE "C"
  IMPORTED_LOCATION_RELEASE "${_IMPORT_PREFIX}/lib/libnu.a"
  )

list(APPEND _IMPORT_CHECK_TARGETS nunicode::nu )
list(APPEND _IMPORT_CHECK_FILES_FOR_nunicode::nu "${_IMPORT_PREFIX}/lib/libnu.a" )

# Commands beyond this point should not need to know the version.
set(CMAKE_IMPORT_FILE_VERSION)
