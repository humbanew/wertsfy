export var leiDeCoulomb = (carga: { a: number, b: number}, distancia: {inicial: number, final: number}): number => {
  return (9 * 10 ** 9) * (carga.a * carga.b / (distancia.final - distancia.inicial) ** 2);
};
