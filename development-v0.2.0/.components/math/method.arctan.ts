import { Component_math_corebase_arcsin_method } from "./method.arcsin";
import { Component_math_corebase_arccos_method } from "./method.arccos";

export const Component_math_corebase_arctan_method = (x: number): number => {
  return (Component_math_corebase_arcsin_method(x) / Component_math_corebase_arccos_method(x));
};
