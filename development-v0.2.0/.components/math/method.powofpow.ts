export const Component_math_corebase_powofpow_method = (x: number, y: number, z?: number[]): number => {
  let rest: any;
  if(z != null) {
    let l = 0; for (let i = 0; i < z.length; i++) { l += z[i]; }
    return rest = x ** (y ** l);
  }
  return rest;
};
