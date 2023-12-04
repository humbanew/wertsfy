import { arcoCosseno } from "./arco_cosseno.mdl";

export var arcoSecante = (x: number): number => {
  return 1 / arcoCosseno(x);
};
