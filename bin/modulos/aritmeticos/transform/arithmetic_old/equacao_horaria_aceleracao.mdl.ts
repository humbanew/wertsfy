export var equacaoHorariaDaAceleracao = (aceleracao: number, tempo: number, velocidade: number): number => {
  return aceleracao + (velocidade * tempo);
};
