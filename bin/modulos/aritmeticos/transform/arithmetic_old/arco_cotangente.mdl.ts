import { arcoTangente } from "./arco_tangente.mdl";

export var arcoCotangente = (x: number): number => {
  return 1 / arcoTangente(x);  
};
