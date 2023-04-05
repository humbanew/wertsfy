const formulaCalculoDaLeiGeralDosGases = (pressao1: string, pressao2: string, volume1: string, volume2: string, temperatura1: string, temperatura2: string): number => {
  let verificacao = /([a-zA-Z])/gi;
  let resultado = 0;
  if (pressao1.match(verificacao) != null) { 
    resultado = (parseFloat(volume1) * parseFloat(temperatura2)) / (parseFloat(pressao2) * parseFloat(volume2) * parseFloat(temperatura1)); 
  }
  if (pressao2.match(verificacao) != null) { resultado = (parseFloat(pressao1) * parseFloat(volume1) * parseFloat(temperatura2)) / (parseFloat(volume2) * parseFloat(temperatura1)); }
  if (volume1.match(verificacao) != null) { resultado = (parseFloat(pressao1) * parseFloat(temperatura2)) / (parseFloat(pressao2) * parseFloat(volume2) * parseFloat(temperatura1)); }
  if (volume2.match(verificacao) != null) { resultado = (parseFloat(pressao1) * parseFloat(volume1) * parseFloat(temperatura2)) / (parseFloat(pressao2) * parseFloat(temperatura1)); }
  if (temperatura1.match(verificacao) != null) { resultado = (parseFloat(pressao1) * parseFloat(volume1) * parseFloat(temperatura2)) / (parseFloat(pressao2) * parseFloat(volume2)); }
  if (temperatura2.match(verificacao) != null) { resultado = (parseFloat(pressao1) * parseFloat(volume1)) / (parseFloat(pressao2) * parseFloat(volume2) * parseFloat(temperatura1)); }
  return resultado;
}
export { formulaCalculoDaLeiGeralDosGases as Component_math_calculator_lei_geral_dos_gases_method }
