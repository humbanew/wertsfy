export var tempo = (velocidade: number, espaco: {inicial: number, final: number}): number => {
  return (espaco.final - espaco.inicial) / velocidade;
};
