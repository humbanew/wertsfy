import { Component_math_corebase_sin_method } from "./method.sin";

export const Component_math_corebase_cosech_method = (x: number): number => {
  return 1 / (1 / Component_math_corebase_sin_method(x));
};
