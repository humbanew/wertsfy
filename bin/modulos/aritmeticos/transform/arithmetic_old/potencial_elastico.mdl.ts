import { energiaPotencialElastica } from "./energia_potencial_elastica.mdl";

export var potencialElastico = (constanteElastica: number, distancia: {inicial: number, final: number}): number => {
  return energiaPotencialElastica(constanteElastica, distancia);
};
