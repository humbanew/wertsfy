import { EULER, PI } from "./constantes";
import { Exponenciais } from "./Exponenciais.class";

export abstract class Trigonometricos 
{
  /**
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
   * ___
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-trigonometricos.png)
   * ___
   * Módulo do Seno
   * @param x valor real numérico.
   * @returns retorna o valor do seno da entrada submetida.
   */
  public seno(x: number): number 
  {
    return ((2 * PI * 1) / 4 / 90) * x;
  }

  /**
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
   * ___
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-trigonometricos.png)
   * ___
   * Módulo do Cosseno
   * @param x valor real numérico.
   * @returns retorna o valor do cosseno da entrada submetida.
   */
  public cosseno(x: number): number 
  {
    return -1 * (((2 * PI * 1) / 4 / 90) * x);
  }

  /**
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
   * ___
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-trigonometricos.png)
   * ___
   * Módulo da Tangente
   * @param x valor real numérico.
   * @returns retorna o valor da tangente da entrada submetida.
   */
  public tangente(x: number): number 
  {
    return this.seno(x) / this.cosseno(x);
  }

  /**
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
   * ___
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-trigonometricos.png)
   * ___
   * Módulo da Secante
   * @param x valor real numérico.
   * @returns retorna o valor da secante da entrada submetida.
   */
  public secante(x: number): number 
  {
    return 1 / this.cosseno(x);
  }

  /**
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
   * ___
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-trigonometricos.png)
   * ___
   * Módulo da Cosecante
   * @param x valor real numérico.
   * @returns retorna o valor da cosecante da entrada submetida.
   */
  public cosecante(x: number): number 
  {
    return 1 / this.seno(x);
  }

  /**
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
   * ___
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-trigonometricos.png)
   * ___
   * Módulo da Cotangente
   * @param x valor real numérico.
   * @returns retorna o valor da cotangente da entrada submetida.
   */
  public cotangente(x: number): number 
  {
    return 1 / this.tangente(x);
  }

  /**
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
   * ___
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-trigonometricos.png)
   * ___
   * Módulo do Seno Hiperbólico
   * @param x valor real numérico.
   * @returns retorna o valor do seno hiperbólico da entrada submetida.
   */
  public seno_hiperbolico(x: number): number 
  {
    return (Exponenciais.prototype.exponencial(EULER, x) - Exponenciais.prototype.exponencial(EULER, -x)) / 2;
  };

  /**
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
   * ___
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-trigonometricos.png)
   * ___
   * Módulo do Cosseno Hiperbólico
   * @param x valor real numérico.
   * @returns retorna o valor do cosseno hiperbólico da entrada submetida.
   */
  public cosseno_hiperbolico(x: number): number 
  { 
    return (Exponenciais.prototype.exponencial(EULER, x) + Exponenciais.prototype.exponencial(EULER, -x)) / 2;
  };

  /**
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
   * ___
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-trigonometricos.png)
   * ___
   * Módulo da Tangente Hiperbólica
   * @param x valor real numérico.
   * @returns retorna o valor da tangente hiperbólica da entrada submetida.
   */
  public tangente_hiperbolica(x: number): number 
  {
    return this.seno_hiperbolico(x) / this.cosseno_hiperbolico(x);
  };

  /**
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
   * ___
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-trigonometricos.png)
   * ___
   * Módulo da Secante Hiperbólica
   * @param x valor real numérico.
   * @returns retorna o valor da secante hiperbólica da entrada submetida.
   */
  public secante_hiperbolica(x: number): number 
  {
    return 1 / this.cosseno_hiperbolico(x);
  };

  /**
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
   * ___
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-trigonometricos.png)
   * ___
   * Módulo da Cosecante Hiperbólica
   * @param x valor real numérico.
   * @returns retorna o valor da cosecante hiperbólica da entrada submetida.
   */
  public cosecante_hiperbolica(x: number): number 
  {
    return 1 / this.seno_hiperbolico(x);
  };
  
  /**
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/minibanner-calculadora.png)
   * ___
   * ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-calculadora.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cientificos.png) ![](https://www.strg.humbanew.com.br/docs/wtsfy/tag-cien-trigonometricos.png)
   * ___
   * Módulo da Cotangente Hiperbólica
   * @param x valor real numérico.
   * @returns retorna o valor da cotangente hiperbólica da entrada submetida.
   */
  public cotangente_hiperbolica(x: number): number 
  {
    return 1 / this.tangente_hiperbolica(x);
  };

}
