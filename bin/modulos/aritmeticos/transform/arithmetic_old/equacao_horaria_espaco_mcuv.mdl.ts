export var equacaoHorariaDoEspacoMCUV = (posicaoAngularInicial: number, velocidadeAngularInicial: number, aceleracaoAngular: number, tempo: number): number => {
  return posicaoAngularInicial + (velocidadeAngularInicial * tempo) + (aceleracaoAngular * tempo ** 2) / 2;
};
