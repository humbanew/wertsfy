export var equacaoHorariaDoEspaco = (espaco: { inicial: number, final: number }, aceleracao: number): number => {
  return espaco.inicial + aceleracao * espaco.final;
};
