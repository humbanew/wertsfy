export var equacaoHorariaDoTempoEspaco = (tempo: { inicial: number, final: number}, espaco: {inicial: number, final: number}, velocidade: number, aceleracao: number): number => {
  return tempo.inicial + (velocidade * tempo.final) + (aceleracao * (tempo.final ** 2)) + espaco.inicial + aceleracao * espaco.final;
};
