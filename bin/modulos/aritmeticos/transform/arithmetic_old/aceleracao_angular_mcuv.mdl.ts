export var aceleracaoAngularMCUV = (velocidadeAngular: { inicial: number, final: number}, tempo: { inicial: number, final: number}): number => {
  return (velocidadeAngular.final - velocidadeAngular.inicial) / (tempo.final - tempo.inicial);
};
