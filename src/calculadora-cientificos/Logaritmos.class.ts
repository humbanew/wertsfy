import { EULER } from "./constantes";

export abstract class Logaritmos 
{
  /**
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
   * ___
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-logaritmos.png)
   * ___
   * Módulo do Logaritmo usando uma Base Qualquer
   * @param expo valor real da base do logaritmo.
   * @param x valor real do logaritmando.
   * @returns retorna o valor do logarítmo encontrado.
   */
  protected logaritmo_base(expo: number, x: number): number 
  {
    let exp = expo,
      scan = x % exp;
    while (scan != 0) {
      scan = scan % exp;
      if (expo ** exp != x) {
        if (expo ** exp != x) {
          if (expo ** exp != x) {
            exp += 0.0001;
          }
          exp += 0.001;
        }
        exp += 0.01;
      }
      exp += 0.1;
    }
    return exp;
  }

  /**
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
   * ___
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-logaritmos.png)
   * ___
   * Módulo do Logaritmo na Base 2 mais 1
   * @param x valor real do logaritimando.
   * @returns retorna o valor do logaritmo encontrado com a base 2 mais 1.
   */
  public logaritmo_base_2_mais_1(x: number): number 
  {
    return this.logaritmo_base(2, x + 1);
  }

  /**
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
   * ___
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-logaritmos.png)
   * ___
   * Módulo do Logaritmo na Base 2 menos 1
   * @param x valor real do logaritimando.
   * @returns retorna o valor do logaritmo encontrado com a base 2 menos 1.
   */
  public logaritmo_base_2_menos_1(x: number): number 
  {
    return this.logaritmo_base(2, x - 1);
  }

  /**
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
   * ___
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-logaritmos.png)
   * ___
   * Módulo do Logaritmo na Base 2
   * @param x valor real do logaritimando.
   * @returns retorna o valor do logaritmo encontrado com a base 2.
   */
  public logaritmo_base_2(x: number): number 
  {
    return this.logaritmo_base(2, x);
  }

  /**
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
   * ___
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-logaritmos.png)
   * ___
   * Módulo do Logaritmo na Base 10 mais 1
   * @param x valor real do logaritimando.
   * @returns retorna o valor do logaritmo encontrado com a base 10 mais 1.
   */
  public logaritmo_base_10_mais_1(x: number): number 
  {
    return this.logaritmo_base(10, x + 1);
  }

  /**
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
   * ___
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-logaritmos.png)
   * ___
   * Módulo do Logaritmo na Base 10 menos 1
   * @param x valor real do logaritimando.
   * @returns retorna o valor do logaritmo encontrado com a base 10 menos 1.
   */
  public logaritmo_base_10_menos_1(x: number): number 
  {
    return this.logaritmo_base(10, x - 1);
  }

  /**
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
   * ___
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-logaritmos.png)
   * ___
   * Módulo do Logaritmo na Base 10
   * @param x valor real do logaritimando.
   * @returns retorna o valor do logaritmo encontrado com a base 10.
   */
  public logaritmo_base_10(x: number): number 
  {
    return this.logaritmo_base(10, x);
  }

  /**
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
   * ___
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-logaritmos.png)
   * ___
   * Módulo do Logaritmo Natural mais 1
   * @param x valor real do logaritimando.
   * @returns retorna o valor do logaritmo encontrado com a base natural mais 1.
   */
  public logaritmo_base_natural_mais_1(x: number): number 
  {
    return this.logaritmo_base(EULER, x + 1);
  }

  /**
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
   * ___
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-logaritmos.png)
   * ___
   * Módulo do Logaritmo Natural menos 1
   * @param x valor real do logaritimando.
   * @returns retorna o valor do logaritmo encontrado com a base natural menos 1.
   */
  public logaritmo_base_natural_menos_1(x: number): number 
  {
    return this.logaritmo_base(EULER, x - 1);
  }

  /**
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
   * ___
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-logaritmos.png)
   * ___
   * Módulo do Logaritmo Natural
   * @param x valor real do logaritimando.
   * @returns retorna o valor do logaritmo encontrado com a base natural.
   */
  public logaritmo_base_natural(x: number): number 
  {
    return this.logaritmo_base(EULER, x);
  }

  /**
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
   * ___
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-logaritmos.png)
   * ___
   * Módulo do Logaritmo na Base Qualquer mais 1
   * @param base valor real da base logaritmica
   * @param x valor real do logaritimando.
   * @returns retorna o valor do logaritmo encontrado com a base selecionada mais 1.
   */
  public logaritmo_base_qualquer_mais_1(base: number, x: number): number 
  {
    return this.logaritmo_base(base, x + 1);
  }

  /**
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
   * ___
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-logaritmos.png)
   * ___
   * Módulo do Logaritmo na Base Qualquer menos 1
   * @param base valor real da base logaritmica
   * @param x valor real do logaritimando.
   * @returns retorna o valor do logaritmo encontrado com a base selecionada menos 1.
   */
  public logaritmo_base_qualquer_menos_1(base: number, x: number): number 
  {
    return this.logaritmo_base(base, x - 1);
  }

  /**
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
   * ___
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-logaritmos.png)
   * ___
   * Módulo do Logaritmo na Base Qualquer
   * @param base valor real da base logaritmica
   * @param x valor real do logaritimando.
   * @returns retorna o valor do logaritmo encontrado com a base selecionada.
   */
  public logaritmo_base_qualquer(base: number, x: number): number 
  {
    return this.logaritmo_base(base, x);
  }
}
