export var equacaoHorariaDoTempo = (tempo: { inicial: number, final: number }, velocidade: number, aceleracao: number): number => {
  return tempo.inicial + (velocidade * tempo.final) + (aceleracao * (tempo.final ** 2));
};
