import { energiaCinetica } from "./energia_cinetica.mdl";
import { energiaPotencialElastica } from "./energia_potencial_elastica.mdl";
import { energiaPotencialGravitacional } from "./energia_potencial_gravitacional.mdl";

export var potencialMecanico = (velocidade: number, constanteElastica: number, distancia: { inicial: number, final: number}, massa: number, gravidade: number, altura: number, energPotElas: boolean, energPotGrav: boolean): number => {
  let resultado = 0;
  if (energPotElas == true) { 
    resultado = energiaCinetica(massa, velocidade) + energiaPotencialElastica(constanteElastica, distancia); 
  }
  if (energPotGrav == true) { 
    resultado = energiaCinetica(massa, velocidade) + energiaPotencialGravitacional(massa, gravidade, altura); 
  }
  return resultado;
};
