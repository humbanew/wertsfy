import { cosseno } from "./cosseno.mdl";

export var leiDeLenz = (intensidadeDoCampoMagnetico: number, areaDaSuperficie: number, angulo: number): number => {
  let resultado = intensidadeDoCampoMagnetico * areaDaSuperficie * cosseno(angulo);
  return resultado;
};
