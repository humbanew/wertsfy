import { forcaEletromotriz } from "./forca_eletromotriz.mdl";

export var contraForcaEletromotriz = (potenciaTotalGerador: number, intensidadeDaCorrente: number): number => {
  return -1 * forcaEletromotriz(potenciaTotalGerador, intensidadeDaCorrente);
};
