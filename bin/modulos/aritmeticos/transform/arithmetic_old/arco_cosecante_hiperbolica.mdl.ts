import { arcoSeno } from "./arco_seno.mdl";

export var arcoCosecanteHiperbolica = (x: number): number => {
  return 1 / (1 / arcoSeno(x));  
};
