GENCCODE_ASSEMBLY_TYPE=-a gcc
SO=so
SOBJ=so
A=a
LIBPREFIX=lib
LIB_EXT_ORDER=.58.1
COMPILE=x86_64-linux-android-clang -D__ANDROID__ -ffunction-sections -fdata-sections -D_REENTRANT  -DU_HAVE_ELF_H=1 -DU_ENABLE_DYLOAD=0 -DU_HAVE_ATOMIC=1 -DU_HAVE_STRTOD_L=0  -DU_ATTRIBUTE_DEPRECATED= --sysroot=/Users/travis/build/mapbox/mason/mason_packages/osx-x86_64/android-ndk/x86_64-21-r13b/sysroot -target x86_64-none-linux-android -g -DANDROID -ffunction-sections -funwind-tables -fstack-protector-strong -no-canonical-prefixes -Wa,--noexecstack -Wformat -Werror=format-security -DU_CHARSET_IS_UTF8=1 -DU_CHAR_TYPE=uint_least16_t -DU_CHARSET_IS_UTF8=1 -DU_CHAR_TYPE=uint_least16_t -DUCONFIG_NO_LEGACY_CONVERSION=1 -DUCONFIG_NO_BREAK_ITERATION=1 -fvisibility=hidden -g -Os -std=c99 -Wall -pedantic -Wshadow -Wpointer-arith -Wmissing-prototypes -Wwrite-strings   -c
LIBFLAGS=-I/Users/travis/build/mapbox/mason/mason_packages/android-x86-64-21/icu/58.1-min-size/include -DPIC -fPIC
GENLIB=x86_64-linux-android-clang --sysroot=/Users/travis/build/mapbox/mason/mason_packages/osx-x86_64/android-ndk/x86_64-21-r13b/sysroot -target x86_64-none-linux-android -g -DANDROID -ffunction-sections -funwind-tables -fstack-protector-strong -no-canonical-prefixes -Wa,--noexecstack -Wformat -Werror=format-security -DU_CHARSET_IS_UTF8=1 -DU_CHAR_TYPE=uint_least16_t -DU_CHARSET_IS_UTF8=1 -DU_CHAR_TYPE=uint_least16_t -DUCONFIG_NO_LEGACY_CONVERSION=1 -DUCONFIG_NO_BREAK_ITERATION=1 -fvisibility=hidden -g -Os -std=c99 -Wall -pedantic -Wshadow -Wpointer-arith -Wmissing-prototypes -Wwrite-strings   --sysroot=/Users/travis/build/mapbox/mason/mason_packages/osx-x86_64/android-ndk/x86_64-21-r13b/sysroot -Wl,--build-id -Wl,--warn-shared-textrel -Wl,--fatal-warnings -Wl,--no-undefined -Wl,-z,noexecstack -Qunused-arguments -Wl,-z,relro -Wl,-z,now -Wl,--gc-sections  -shared -Wl,-Bsymbolic
LDICUDTFLAGS=-nodefaultlibs -nostdlib
LD_SONAME=-Wl,-soname -Wl,
RPATH_FLAGS=
BIR_LDFLAGS=-Wl,-Bsymbolic
AR=x86_64-linux-android-ar
ARFLAGS=r
RANLIB=x86_64-linux-android-ranlib
INSTALL_CMD=/usr/local/bin/ginstall -c
