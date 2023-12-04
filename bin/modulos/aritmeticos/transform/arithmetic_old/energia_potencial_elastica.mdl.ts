export var energiaPotencialElastica = (constanteElastica: number, distancia: { inicial: number, final: number}): number => {
  return (constanteElastica * (distancia.final - distancia.inicial) ** 2) / 2;
};
