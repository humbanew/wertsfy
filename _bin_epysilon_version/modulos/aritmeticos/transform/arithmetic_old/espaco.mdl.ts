export var espaco = (velocidade: number, tempo: {inicial: number, final: number}): number => {
  return velocidade * (tempo.final - tempo.inicial);
};
