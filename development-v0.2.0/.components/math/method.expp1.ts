import { Component_math_corebase_logx_method } from "./method.logx";

export const Component_math_corebase_expp1_method = (base: number, valorLg: number): number => {
  if(base == 0) { return 0; }
  return base ** Component_math_corebase_logx_method(valorLg+1, base);
};
