#include <stdlib.h>
#include <string.h>
#include <mbgl/hook/kitzz/include/kitzz.h>

#include "interceptor-linux.h"
#include "interceptor.h"
#include "trampoline.h"

#pragma GCC diagnostic ignored "-Wunused-parameter"

ZZSTATUS ZzHookGOT(const char *name, zz_ptr_t replace_ptr, zz_ptr_t *origin_ptr, PRECALL pre_call_ptr,
                   POSTCALL post_call_ptr)
{

    return ZZ_SUCCESS;
}

ZZSTATUS ZzDisableHookGOT(const char *name) {

    return ZZ_SUCCESS;
}