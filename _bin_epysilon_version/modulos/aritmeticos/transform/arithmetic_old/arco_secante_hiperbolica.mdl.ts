import { arcoCosseno } from "./arco_cosseno.mdl";

export var arcoSecanteHiperbolica = (x: number): number => {
  return 1 / (1 / arcoCosseno(x));  
};
