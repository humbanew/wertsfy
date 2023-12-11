import { arcoSeno } from "./arco_seno.mdl";

export var arcoCosecante = (x: number): number => {
  return 1 / arcoSeno(x);  
};
