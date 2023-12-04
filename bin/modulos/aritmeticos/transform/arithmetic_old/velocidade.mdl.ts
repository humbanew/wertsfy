export var velocidade = (espaco: {inicial: number, final: number}, tempo: {inicial: number, final: number}): number => {
  return (espaco.final - espaco.inicial) / (tempo.final - tempo.inicial);
};
