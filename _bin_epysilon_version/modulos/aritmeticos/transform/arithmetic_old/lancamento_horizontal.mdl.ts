export var lancamentoHorizontal = (gravidade: number, tempo: {inicial: number, final: number}): number => {
  return (gravidade * (tempo.final - tempo.inicial) ** 2) / 2;
};
