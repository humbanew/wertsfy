import { cosseno } from "./cosseno.mdl";

export var aceleracaoPlanoInclinadoEixoY = (massa: number, gravidade: number, angulo: number): number => {
  return massa * gravidade * cosseno(angulo);
};
