import { Component_math_corebase_arctan_method } from "./method.arctan";

export const Component_math_corebase_arccotanh_method = (x: number): number => {
  return 1 / Component_math_corebase_arctan_method(x);
};
