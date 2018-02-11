GENCCODE_ASSEMBLY_TYPE=-a gcc
SO=so
SOBJ=so
A=a
LIBPREFIX=lib
LIB_EXT_ORDER=.58.1
COMPILE=arm-linux-androideabi-clang -D__ANDROID__ -ffunction-sections -fdata-sections -D_REENTRANT  -DU_HAVE_ELF_H=1 -DU_ENABLE_DYLOAD=0 -DU_HAVE_ATOMIC=1 -DU_HAVE_STRTOD_L=0  -DU_ATTRIBUTE_DEPRECATED= --sysroot=/Users/travis/build/mapbox/mason/mason_packages/osx-x86_64/android-ndk/arm-9-r13b/sysroot -target armv5te-none-linux-androideabi -g -DANDROID -ffunction-sections -funwind-tables -fstack-protector-strong -no-canonical-prefixes -Wa,--noexecstack -Wformat -Werror=format-security -march=armv5te -mtune=xscale -msoft-float -fno-integrated-as -mthumb -DU_CHARSET_IS_UTF8=1 -DU_CHAR_TYPE=uint_least16_t -DU_CHARSET_IS_UTF8=1 -DU_CHAR_TYPE=uint_least16_t -DUCONFIG_NO_LEGACY_CONVERSION=1 -DUCONFIG_NO_BREAK_ITERATION=1 -fvisibility=hidden -g -Os -std=c99 -Wall -pedantic -Wshadow -Wpointer-arith -Wmissing-prototypes -Wwrite-strings   -c
LIBFLAGS=-I/Users/travis/build/mapbox/mason/mason_packages/android-arm-v5-9/icu/58.1-min-size/include -DPIC -fPIC
GENLIB=arm-linux-androideabi-clang --sysroot=/Users/travis/build/mapbox/mason/mason_packages/osx-x86_64/android-ndk/arm-9-r13b/sysroot -target armv5te-none-linux-androideabi -g -DANDROID -ffunction-sections -funwind-tables -fstack-protector-strong -no-canonical-prefixes -Wa,--noexecstack -Wformat -Werror=format-security -march=armv5te -mtune=xscale -msoft-float -fno-integrated-as -mthumb -DU_CHARSET_IS_UTF8=1 -DU_CHAR_TYPE=uint_least16_t -DU_CHARSET_IS_UTF8=1 -DU_CHAR_TYPE=uint_least16_t -DUCONFIG_NO_LEGACY_CONVERSION=1 -DUCONFIG_NO_BREAK_ITERATION=1 -fvisibility=hidden -g -Os -std=c99 -Wall -pedantic -Wshadow -Wpointer-arith -Wmissing-prototypes -Wwrite-strings   --sysroot=/Users/travis/build/mapbox/mason/mason_packages/osx-x86_64/android-ndk/arm-9-r13b/sysroot -Wl,--build-id -Wl,--warn-shared-textrel -Wl,--fatal-warnings -Wl,--no-undefined -Wl,-z,noexecstack -Qunused-arguments -Wl,-z,relro -Wl,-z,now -Wl,--exclude-libs,libunwind.a -Wl,--gc-sections  -shared -Wl,-Bsymbolic
LDICUDTFLAGS=-nodefaultlibs -nostdlib
LD_SONAME=-Wl,-soname -Wl,
RPATH_FLAGS=
BIR_LDFLAGS=-Wl,-Bsymbolic
AR=arm-linux-androideabi-ar
ARFLAGS=r
RANLIB=arm-linux-androideabi-ranlib
INSTALL_CMD=/usr/local/bin/ginstall -c
