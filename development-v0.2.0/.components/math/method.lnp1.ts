import { Component_math_corebase_euler_constant } from "./constant.euler";
import { Component_math_corebase_logarithm_protected_method } from "./protected.method.logarithm";

export const Component_math_corebase_lnp1_method = (x: number): number => {
  return Component_math_corebase_logarithm_protected_method(Component_math_corebase_euler_constant+1, x);
};
