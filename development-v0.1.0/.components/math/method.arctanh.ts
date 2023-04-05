import { Component_math_corebase_arccos_method } from "./method.arccos";
import { Component_math_corebase_arcsin_method } from "./method.arcsin";

export const Component_math_corebase_arctanh_method = (x: number): number => {
  return 1 / (Component_math_corebase_arcsin_method(x) / Component_math_corebase_arccos_method(x));
};
