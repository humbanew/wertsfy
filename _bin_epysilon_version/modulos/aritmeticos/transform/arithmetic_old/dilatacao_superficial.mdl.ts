export var dilatacaoSuperficial = (areaInicial: number, coeficienteDeDilatacaoSuperficial: number, temperatura: {inicial: number, final: number}): number => {
  return areaInicial * coeficienteDeDilatacaoSuperficial * (temperatura.final - temperatura.inicial);
};
