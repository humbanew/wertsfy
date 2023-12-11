import { arcoCosseno } from "./arco_cosseno.mdl";
import { arcoSeno } from "./arco_seno.mdl";

export var arcoTangenteHiperbolica = (x: number): number => {
  return 1 / (arcoSeno(x) / arcoCosseno(x));
};
