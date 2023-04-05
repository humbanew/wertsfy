import { Component_math_calculator_exp_calc_energia_cinetica_method } from "./expression.calc-energia-cinetica";
import { Component_math_calculator_exp_calc_energia_potencial_elastica_method } from "./expression.calc-energia-potencial-elastica";
import { Component_math_calculator_exp_calc_energia_potencial_gravitacional_method } from "./expression.calc-energia-potencial-gravitacional";

const formulaCalculoDoPotencialMecanico = (velocidade: number, constanteElastica: number, distancia: number, massa: number, gravidade: number, altura: number, energPotElas: boolean, energPotGrav: boolean): number => {
  let resultado = 0;
  if (energPotElas == true) { 
    resultado = Component_math_calculator_exp_calc_energia_cinetica_method(massa, velocidade) + Component_math_calculator_exp_calc_energia_potencial_elastica_method(constanteElastica, distancia); 
  }
  if (energPotGrav == true) { 
    resultado = Component_math_calculator_exp_calc_energia_cinetica_method(massa, velocidade) + Component_math_calculator_exp_calc_energia_potencial_gravitacional_method(massa, gravidade, altura); 
  }
  return resultado;
}
export { formulaCalculoDoPotencialMecanico as Component_math_calculator_exp_calc_potencial_mecanico_method }
