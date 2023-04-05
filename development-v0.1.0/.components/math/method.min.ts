export const Component_math_corebase_min_method = (x: number[]): number => {
  let min = x[0];
  for (let i = 1; i < x.length; i++) {
    if (x[i] < min) { min = x[i]; }
  }
  return min;
};
