import { EULER } from "./constantes";
import { Logaritmos } from "./Logaritmos.class";

export abstract class Cologaritmos extends Logaritmos 
{
  /**
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
   * ___
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-cologaritmos.png)
   * ___
   * Módulo do Cologaritmo na Base 2 mais 1
   * @param x valor real do logaritimando.
   * @returns retorna o valor do cologaritmo encontrado com a base 2 mais 1.
   */
  public cologaritmo_base_2_mais_1(x: number): number 
  {
    return -1 * this.logaritmo_base(2, x + 1);
  }

  /**
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
   * ___
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-cologaritmos.png)
   * ___
   * Módulo do Cologaritmo na Base 2 menos 1
   * @param x valor real do logaritimando.
   * @returns retorna o valor do cologaritmo encontrado com a base 2 menos 1.
   */
  public cologaritmo_base_2_menos_1(x: number): number 
  {
    return -1 * this.logaritmo_base(2, x - 1);
  }

  /**
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
   * ___
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-cologaritmos.png)
   * ___
   * Módulo do Cologaritmo na Base 2
   * @param x valor real do logaritimando.
   * @returns retorna o valor do cologaritmo encontrado com a base 2.
   */
  public cologaritmo_base_2(x: number): number 
  {
    return -1 * this.logaritmo_base(2, x);
  }

  /**
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
   * ___
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-cologaritmos.png)
   * ___
   * Módulo do Cologaritmo na Base 10 mais 1
   * @param x valor real do logaritimando.
   * @returns retorna o valor do cologaritmo encontrado com a base 10 mais 1.
   */
  public cologaritmo_base_10_mais_1(x: number): number 
  {
    return -1 * this.logaritmo_base(10, x + 1);
  }

  /**
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
   * ___
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-cologaritmos.png)
   * ___
   * Módulo do Cologaritmo na Base 10 menos 1
   * @param x valor real do logaritimando.
   * @returns retorna o valor do cologaritmo encontrado com a base 10 menos 1.
   */
  public cologaritmo_base_10_menos_1(x: number): number 
  {
    return -1 * this.logaritmo_base(10, x - 1);
  }

  /**
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
   * ___
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-cologaritmos.png)
   * ___
   * Módulo do Cologaritmo na Base 10
   * @param x valor real do logaritimando.
   * @returns retorna o valor do cologaritmo encontrado com a base 10.
   */
  public cologaritmo_base_10(x: number): number 
  {
    return -1 * this.logaritmo_base(10, x);
  }

  /**
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
   * ___
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-cologaritmos.png)
   * ___
   * Módulo do Cologaritmo na Base Natural mais 1
   * @param x valor real do logaritimando.
   * @returns retorna o valor do cologaritmo encontrado com a base natural mais 1.
   */
  public cologaritmo_base_natural_mais_1(x: number): number 
  {
    return -1 * this.logaritmo_base(EULER, x + 1);
  }

  /**
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
   * ___
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-cologaritmos.png)
   * ___
   * Módulo do Cologaritmo na Base Natural menos 1
   * @param x valor real do logaritimando.
   * @returns retorna o valor do cologaritmo encontrado com a base natural menos 1.
   */
  public cologaritmo_base_natural_menos_1(x: number): number 
  {
    return -1 * this.logaritmo_base(EULER, x - 1);
  }

  /**
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
   * ___
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-cologaritmos.png)
   * ___
   * Módulo do Cologaritmo na Base Natural
   * @param x valor real do logaritimando.
   * @returns retorna o valor do cologaritmo encontrado com a base natural.
   */
  public cologaritmo_base_natural(x: number): number 
  {
    return -1 * this.logaritmo_base(EULER, x);
  }

  /**
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
   * ___
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-cologaritmos.png)
   * ___
   * Módulo do Cologaritmo na Base Qualquer mais 1
   * @param base valor real da base logaritmica
   * @param x valor real do logaritimando.
   * @returns retorna o valor do cologaritmo encontrado com a base selecionada mais 1.
   */
  public cologaritmo_base_qualquer_mais_1(base: number, x: number): number 
  {
    return -1 * this.logaritmo_base(base, x + 1);
  }

  /**
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
   * ___
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-cologaritmos.png)
   * ___
   * Módulo do Cologaritmo na Base Qualquer menos 1
   * @param base valor real da base logaritmica
   * @param x valor real do logaritimando.
   * @returns retorna o valor do cologaritmo encontrado com a base selecionada menos 1.
   */
  public cologaritmo_base_qualquer_menos_1(base: number, x: number): number 
  {
    return -1 * this.logaritmo_base(base, x + 1);
  }

  /**
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
   * ___
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-cologaritmos.png)
   * ___
   * Módulo do Cologaritmo na Base Qualquer
   * @param base valor real da base logaritmica
   * @param x valor real do logaritimando.
   * @returns retorna o valor do cologaritmo encontrado com a base selecionada.
   */
  public cologaritmo_base_qualquer(base: number, x: number): number 
  {
    return -1 * this.logaritmo_base(base, x + 1);
  }
}
