export var dilatacaoLinear = (comprimentoInicial: number, coeficienteDeDilatacaoLinear: number, temperatura: { inicial: number, final: number}): number => {
  return comprimentoInicial * coeficienteDeDilatacaoLinear * (temperatura.final - temperatura.inicial);
};
