export var aceleracao = (velocidade: number, tempo: {inicial: number, final: number}): number => {
  return velocidade / (tempo.final - tempo.inicial);
};
