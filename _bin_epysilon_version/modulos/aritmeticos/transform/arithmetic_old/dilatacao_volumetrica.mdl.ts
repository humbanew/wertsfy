export var dilatacaoVolumetrica = (volumeInicial: number, coeficienteDeDilatacaoVolumetrica: number, temperatura: { inicial: number, final: number}): number => {
  return volumeInicial * coeficienteDeDilatacaoVolumetrica * (temperatura.final - temperatura.inicial);
};
