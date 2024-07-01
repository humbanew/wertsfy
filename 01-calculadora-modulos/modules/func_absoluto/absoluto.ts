/**
 * # Funcionalidade do Valor Absoluto
 * @param x valor atribuído.
 * @returns valor absoluto de x.
 */
export default function absoluto(x: number): number 
{
  return x < 0 ? -1 * x : x;
}
