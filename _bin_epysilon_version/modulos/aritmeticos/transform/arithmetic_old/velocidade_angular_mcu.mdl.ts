export var velocidadeAngularMCU = (angulo: { inicial: number, final: number}, tempo: { inicial: number, final: number}): number => {
  return (angulo.final - angulo.inicial) / (tempo.final - tempo.inicial);
};
