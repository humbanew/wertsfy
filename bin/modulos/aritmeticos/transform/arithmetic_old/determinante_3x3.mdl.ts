export var determinante3x3 = (a00: number, a01: number, a02: number, a10: number, a11: number, a12: number, a20: number, a21: number, a22: number): number => {
  let resultado: number;
  let vetorPrincipal1 = a00 * a11 * a22; 
  let vetorPrincipal2 = a01 * a12 * a20; 
  let vetorPrincipal3 = a02 * a10 * a21;
  let vetorSecundario1 = a02 * a11 * a20; 
  let vetorSecundario2 = a00 * a12 * a21; 
  let vetorSecundario3 = a01 * a10 * a22;
  return resultado = (vetorPrincipal1 + vetorPrincipal2 + vetorPrincipal3) - (vetorSecundario1 + vetorSecundario2 + vetorSecundario3);
};
