export const Component_math_corebase_fround_method = (x: number): number => {
  const verificador: RegExp = /([0-9]+)(\.[0-9]+)/gi;
  let resultado: any;
  resultado = verificador.exec(x.toString());
  if (parseFloat(resultado[1]) >= 0.5) {
    return parseInt(resultado[0] + 1);
  }
  return parseInt(resultado[0]);
};
