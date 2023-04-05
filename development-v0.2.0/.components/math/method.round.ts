export const Component_math_corebase_round_method = (x: number): number => {
  const verificador: RegExp = /([0-9]+)(\.[0-9]+)/gi;
  let resultado: any;
  resultado = verificador.exec(x.toString());
  return parseInt(resultado[0]);
};
