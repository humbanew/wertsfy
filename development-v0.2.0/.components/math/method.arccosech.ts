import { Component_math_corebase_arcsin_method } from "./method.arcsin";

export const Component_math_corebase_arccosech_method = (x: number): number => {
  return 1 / Component_math_corebase_arcsin_method(x);
};
