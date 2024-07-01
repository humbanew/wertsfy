import { Logaritmos } from "./Logaritmos.class";
import { Trigonometricos } from "./Trigonometricos.class";

export abstract class ArcosTrigonometricos extends Trigonometricos 
{
  /**
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
   * ___
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-arctrigonometricos.png)
   * ___
   * Módulo do Arco Seno
   * @param x valor real numérico.
   * @returns retorna o valor do arco seno entre 0 e 1.
   */
  public arco_seno(x: number): number 
  {
    return 1 / this.seno(x);
  }

  /**
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
   * ___
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-arctrigonometricos.png)
   * ___
   * Módulo do Arco Cosseno
   * @param x valor real numérico.
   * @returns retorna o valor do arco cosseno entre 0 e 1.
   */
  public arco_cosseno(x: number): number 
  {
    return 1 / this.cosseno(x);
  }

  /**
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
   * ___
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-arctrigonometricos.png)
   * ___
   * Módulo do Arco Tangente
   * @param x valor real numérico.
   * @returns retorna o valor do arco tangente entre 0 e 1.
   */
  public arco_tangente(x: number): number 
  {
    return 1 / this.tangente(x);
  }

  /**
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
   * ___
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-arctrigonometricos.png)
   * ___
   * Módulo do Arco Secante
   * @param x valor real numérico.
   * @returns retorna o valor do arco secante entre 0 e 1.
   */
  public arco_secante(x: number): number 
  {
    return 1 / this.secante(x);
  }

  /**
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
   * ___
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-arctrigonometricos.png)
   * ___
   * Módulo do Arco Cosecante
   * @param x valor real numérico.
   * @returns retorna o valor do arco cosecante entre 0 e 1.
   */
  public arco_cosecante(x: number): number 
  {
    return 1 / this.cosecante(x);
  }

  /**
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
   * ___
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-arctrigonometricos.png)
   * ___
   * Módulo do Arco Cotangente
   * @param x valor real numérico.
   * @returns retorna o valor do arco cotangente entre 0 e 1.
   */
  public arco_cotangente(x: number): number 
  {
    return 1 / this.cotangente(x);
  }

  /**
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
   * ___
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-arctrigonometricos.png)
   * ___
   * Módulo do Arco Seno Hiperbólico
   * @param x valor real numérico.
   * @returns retorna o valor do arco seno hiperbólico.
   */
  public arco_seno_hiperbolico(x: number): number
  {
    return Logaritmos.prototype.logaritmo_base_natural(x + (x ** 2 + 1) ** 1/2);
  }
  
  /**
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
   * ___
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-arctrigonometricos.png)
   * ___
   * Módulo do Arco Cosseno Hiperbólico
   * @param x valor real numérico.
   * @returns retorna o valor do arco cosseno hiperbólico.
   */
  public arco_cosseno_hiperbolico(x: number): number 
  {
    return Logaritmos.prototype.logaritmo_base_natural(x + (x ** 2 - 1) ** 1/2);
  }

  /**
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
   * ___
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-arctrigonometricos.png)
   * ___
   * Módulo do Arco Tangente Hiperbólico
   * @param x valor real numérico.
   * @returns retorna o valor do arco tangente hiperbólico.
   */
  public arco_tangente_hiperbolica(x: number): number 
  {
    return 1/2 * Logaritmos.prototype.logaritmo_base_natural((1 + x) / (1 - x));
  }

  /**
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
   * ___
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-arctrigonometricos.png)
   * ___
   * Módulo do Arco Secante Hiperbólico
   * @param x valor real numérico.
   * @returns retorna o valor do arco secante hiperbólico.
   */
  public arco_secante_hiperbolica(x: number): number 
  {
    return Logaritmos.prototype.logaritmo_base_natural(1 + (1 - x ** 2) ** 1/2);
  }

  /**
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
   * ___
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-arctrigonometricos.png)
   * ___
   * Módulo do Arco Cosecante Hiperbólico
   * @param x valor real numérico.
   * @returns retorna o valor do arco cosecante hiperbólico.
   */
  public arco_cosecante_hiperbolica(x: number): number
  {
    return Logaritmos.prototype.logaritmo_base_natural(1 + (1 + x ** 2) ** 1/2);
  }

  /**
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
   * ___
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-arctrigonometricos.png)
   * ___
   * Módulo do Arco Cotangente Hiperbólico
   * @param x valor real numérico.
   * @returns retorna o valor do arco cotangente hiperbólico.
   */
  public arco_cotangente_hiperbolico(x: number): number 
  {
    return 1/2 * Logaritmos.prototype.logaritmo_base_natural((x+ 1) / (x - 1));   
  }

}
