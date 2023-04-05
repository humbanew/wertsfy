import { Component_math_corebase_cos_method } from "./method.cos";
import { Component_math_corebase_sin_method } from "./method.sin";

export const Component_math_corebase_tanh_method = (x: number): number => {
  return 1 / (Component_math_corebase_sin_method(x) / Component_math_corebase_cos_method(x));
};
