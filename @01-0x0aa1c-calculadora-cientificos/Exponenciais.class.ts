import { Logaritmos } from "./Logaritmos.class";

export abstract class Exponenciais extends Logaritmos 
{
  /**
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
   * ___
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-exponenciais.png)
   * ___
   * Módulo da Exponencial mais 1
   * @param base base da exponencial.
   * @param x valor real numérico.
   * @returns retorna o valor da exponencial mais 1 encontrada.
   */
  public exponencial_mais_1(base: number, x: number): number 
  {
    if (base == 0) {
      return 1;
    }
    return base ** this.logaritmo_base_qualquer(x, base) + 1;
  }

  /**
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
   * ___
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-exponenciais.png)
   * ___
   * Módulo da Exponencial menos 1
   * @param base base da exponencial.
   * @param x valor real numérico.
   * @returns retorna o valor da exponencial menos 1 encontrada.
   */
  public exponencial_menos_1(base: number, x: number): number 
  {
    if (base == 0) {
      return 1;
    }
    return base ** this.logaritmo_base_qualquer(x, base) - 1;
  }

  /**
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
   * ___
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-exponenciais.png)
   * ___
   * Módulo da Exponencial
   * @param base base da exponencial.
   * @param x valor real numérico.
   * @returns retorna o valor da exponencial encontrada.
   */
  public exponencial(base: number, x: number): number 
  {
    if (base == 0) {
      return 1;
    }
    return base ** this.logaritmo_base_qualquer(x, base);
  }
}
