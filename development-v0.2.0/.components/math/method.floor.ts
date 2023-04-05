export const Component_math_corebase_floor_method = (x: number): number => {
  let v: any;
  if (x > x + 0.5) { v = parseInt(x.toString()); }
  return v;
};
