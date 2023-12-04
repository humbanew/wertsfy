import { seno } from "./seno.mdl";

export var aceleracaoPlanoInclinadoEixoX = (massa: number, gravidade: number, angulo: number): number => {
  return massa * gravidade * seno(angulo);
};
