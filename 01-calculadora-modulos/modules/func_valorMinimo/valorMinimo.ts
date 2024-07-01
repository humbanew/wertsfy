/**
 * # Funcionalidade do Valor Máximo
 * @param valores numerais reais.
 * @returns o menor valor entre os valores passados.
 */
export default function valorMinimo(...valores: number[]): number {
  let min = Infinity;
  for (let i = 0; i < valores.length; i++) {
    if (valores[i] < min) min = valores[i];
  }
  return min;
}
