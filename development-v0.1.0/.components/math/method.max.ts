export const Component_math_corebase_max_method = (x: number[]): number => {
  let max = x[0];
  for (let i = 1; i < x.length; i++) {
    if (x[i] > max) { max = x[i]; }
  }
  return max;
};
