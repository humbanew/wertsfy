export var determinante2x2 = (a00: number, a01: number, a10: number, a11: number): number => {
  let resultado: number, vetorPrimario = a00 * a11, vetorSecundario = a01 * a10;
  return resultado = vetorPrimario - vetorSecundario;
};
