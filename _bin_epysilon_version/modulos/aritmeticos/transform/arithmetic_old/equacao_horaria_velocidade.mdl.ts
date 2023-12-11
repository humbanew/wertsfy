export var equacaoHorariaDaVelocidade = (velocidade: number, tempo: number, aceleracao: number): number => {
  return velocidade + aceleracao * tempo;
};
