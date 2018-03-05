#include "jni.hpp"
#include "../cpp/mbgl/hook/hookzz.h"
#include <jni/jni.hpp>

int (*orig_printf)(const char *format, ...);
int fake_printf(const char *format, ...) {
    puts("call printf");

    char *stack[16];
    va_list args;
    va_start(args, format);
    // *(void **)&args for android
    memcpy(stack, *(void **)&args, sizeof(char *) * 16);
    va_end(args);

    int x = orig_printf(format, stack[0], stack[1], stack[2], stack[3], stack[4], stack[5], stack[6], stack[7],
                        stack[8], stack[9], stack[10], stack[11], stack[12], stack[13], stack[14], stack[15]);
    return x;
}

void printf_pre_call(RegState *rs, ThreadStack *ts, CallStack *cs, const HookEntryInfo *info) {
    puts((char *)rs->general.regs.r0);
    STACK_SET(cs, "format", rs->general.regs.r0, char *);
    puts("printf-pre-call");
}

void printf_post_call(RegState *rs, ThreadStack *ts, CallStack *cs, const HookEntryInfo *info) {
    if (STACK_CHECK_KEY(cs, "format")) {
        char *format = STACK_GET(cs, "format", char *);
        puts(format);
    }
    puts("printf-post-call");
}

void test_hook_printf() {
    void *printf_ptr = (void *)printf;

    ZzEnableDebugMode();
    ZzHook((void *)printf_ptr, (void *)fake_printf, (void **)&orig_printf, printf_pre_call, printf_post_call, false);
    printf("HookZzzzzzz, %d, %p, %d, %d, %d, %d, %d, %d, %d\n", 1, (void *)2, 3, (char)4, (char)5, (char)6, 7, 8, 9);
}


extern "C" JNIEXPORT jint JNI_OnLoad(JavaVM *vm, void *) {
    assert(vm != nullptr);
//    test_hook_printf();
    mbgl::android::registerNatives(vm);
    return JNI_VERSION_1_6;
}

