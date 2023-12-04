import { arcoTangente } from "./arco_tangente.mdl";

export var arcoCotangenteHiperbolica = (x: number): number => {
  return 1 / (1 / arcoTangente(x));  
};
