export var forcaGravitacional = (gravidade: number, massaPlaneta: number, distancia: {inicial: number, final: number}): number => {
  return gravidade * (massaPlaneta / (distancia.final - distancia.inicial) ** 2);
};
