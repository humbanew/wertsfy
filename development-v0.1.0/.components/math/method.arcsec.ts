import { Component_math_corebase_arccos_method } from "./method.arccos";

export const Component_math_corebase_arcsec_method = (x: number): number => {
  return 1 / Component_math_corebase_arccos_method(x);
};
