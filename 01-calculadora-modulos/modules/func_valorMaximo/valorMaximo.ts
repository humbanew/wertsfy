/**
 * # Funcionalidade do Valor Máximo
 * @param valores numerais reais.
 * @returns o maior valor entre os valores passados.
 */
export default function valorMaximo(...valores: number[]): number {
  let max = 0;
  for (let i = 0; i < valores.length; i++) {
    if (valores[i] > max) max = valores[i];
  }
  return max;
}
