/// <reference path="../.declarations/warch.d.ts" />
/// <reference path="wcconnection.d.ts" />

import { IWComponent } from "../.declarations/warch";
import { WertsfyComponents } from "./wcconnection";

export namespace LibraryMathematic {

  /** 
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Constante [Constant]``**
   *  
   * Retorna o valor de avogadro. [_Returns the value of avogadro._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   */
  export const Avogadro: IWComponent["src"]["number"]=
    WertsfyComponents.source.math["constant.avogadro"]; 

  /** 
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Constante [Constant]``**
   *  
   * Retorna o valor de euler. [_Returns the value of euler._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   */
  export const Euler: IWComponent["src"]["number"]=
    WertsfyComponents.source.math["constant.euler"]; 

  /** 
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Constante [Constant]``**
   *  
   * Retorna o valor do logaritmo de 2. [_Returns the value of the logarithm of 2._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   */
  export const Logarithm2: IWComponent["src"]["number"]=
    WertsfyComponents.source.math["constant.logarithm2"]; 

  /** 
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Constante [Constant]``**
   *  
   * Retorna o valor do logaritmo de 2 na base euler. [_Returns the logarithm value of 2 at the Euler base._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   */
  export const Logarithm2e: IWComponent["src"]["number"]=
    WertsfyComponents.source.math["constant.logarithm2e"];
  
  /** 
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Constante [Constant]``**
   *  
   * Retorna o valor do logaritmo de 10. [_Returns the value of the logarithm of 10._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   */
  export const Logarithm10: IWComponent["src"]["number"]=
    WertsfyComponents.source.math["constant.logarithm10"];

  /** 
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Constante [Constant]``**
   *  
   * Retorna o valor do logaritmo de 10 na base euler. [_Returns the logarithm value of 10 at the Euler base._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   */
  export const Logarithm10e: IWComponent["src"]["number"]=
    WertsfyComponents.source.math["constant.logarithm10e"];

  /** 
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Constante [Constant]``**
   *  
   * Retorna o valor máximo. [_Returns the max value._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   */
  export const Maxvalue: IWComponent["src"]["number"]=
    WertsfyComponents.source.math["constant.maxvalue"];

  /** 
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Constante [Constant]``**
   *  
   * Retorna o valor mínimo. [_Returns the min value._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   */
  export const Minvalue: IWComponent["src"]["number"]=
    WertsfyComponents.source.math["constant.minvalue"];

  /** 
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Constante [Constant]``**
   *  
   * Retorna o valor de newton. [_Returns the value of newton._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   */
  export const Newton: IWComponent["src"]["number"]=
    WertsfyComponents.source.math["constant.newton"];

  /** 
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Constante [Constant]``**
   *  
   * Retorna o valor de pi. [_Returns the value of pi._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   */
  export const Pi: IWComponent["src"]["number"]=
    WertsfyComponents.source.math["constant.pi"];

  /** 
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Constante [Constant]``**
   *  
   * Retorna o valor de plank. [_Returns the value of plank._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   */
  export const Plank: IWComponent["src"]["number"]=
    WertsfyComponents.source.math["constant.plank"]; 

  /** 
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Constante [Constant]``**
   *  
   * Retorna o valor de tesla. [_Returns the value of tesla._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   */
  export const Tesla: IWComponent["src"]["number"]=
    WertsfyComponents.source.math["constant.tesla"];

  /** 
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Coleção de Constante [Constant Collection]``**
   *  
   * Retorna a lista de constantes de raízes quadradas. [_Returns the list of square roots constants._]
   * 
   * ______________________________________
   * 
   * @returns ``Object``
   * 
   */
  export const SquareRoot: IWComponent["src"]["object"]["collections"]["sqrt_cbrt"]=
    WertsfyComponents.source.math["constant.collection.sqrt"];

  /** 
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Coleção de Constante [Constant Collection]``**
   *  
   * Retorna a lista de constantes de raízes cúbicas. [_Returns the list of cubic roots constants._]
   * 
   * ______________________________________
   * 
   * @returns ``Object``
   * 
   */
  export const CubicRoot: IWComponent["src"]["object"]["collections"]["sqrt_cbrt"]=
    WertsfyComponents.source.math["constant.collection.cbrt"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o valor absoluto de um número. [_Returns the absolute value of a number._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const abs: IWComponent["src"]["function"]=
    WertsfyComponents.source.math["method.abs"]; 

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o valor do arco seno de um número. [_Returns the sine arc value of a number._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   *  
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const arcsin: IWComponent["src"]["function"]=
    WertsfyComponents.source.math["method.arcsin"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o valor do arco seno hiperbólico de um número. [_Returns the hiperbolic sine arc value of a number._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   *  
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const arcsinh: IWComponent["src"]["function"]=
    WertsfyComponents.source.math["method.arcsinh"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o valor do arco cosseno de um número. [_Returns the cosine arc value of a number._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const arccos: IWComponent["src"]["function"]=
    WertsfyComponents.source.math["method.arccos"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o valor do arco cosseno hiperbólico de um número. [_Returns the hiperbolic cosine arc value of a number._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const arccosh: IWComponent["src"]["function"]=
    WertsfyComponents.source.math["method.arccosh"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o valor do arco tangente de um número. [_Returns the tangent arc value of a number._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const arctan: IWComponent["src"]["function"]=
    WertsfyComponents.source.math["method.arctan"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o valor do arco tangente hiperbólico de um número. [_Returns the hiperbolic tangent arc value of a number._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   *  
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const arctanh: IWComponent["src"]["function"]=
    WertsfyComponents.source.math["method.arctanh"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o valor do arco secante de um número. [_Returns the secant arc value of a number._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   *  
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const arcsec: IWComponent["src"]["function"]=
    WertsfyComponents.source.math["method.arcsec"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o valor do arco secante hiperbólico de um número. [_Returns the hiperbolic secant arc value of a number._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   *  
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const arcsech: IWComponent["src"]["function"]=
    WertsfyComponents.source.math["method.arcsech"]

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o valor do arco cosecante de um número. [_Returns the cosecant arc value of a number._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   *  
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const arccosec: IWComponent["src"]["function"]=
    WertsfyComponents.source.math["method.arccosec"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o valor do arco cosecante hiperbólico de um número. [_Returns the hiperbolic cosecant arc value of a number._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   *  
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const arccosech: IWComponent["src"]["function"]=
    WertsfyComponents.source.math["method.arccosech"]

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o valor do arco cotangente de um número. [_Returns the cotangent arc value of a number._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const arccotan: IWComponent["src"]["function"]=
    WertsfyComponents.source.math["method.arccotan"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o valor do arco cotangente hiperbólico de um número. [_Returns the hiperbolic cotangent arc value of a number._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   *  
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const arccotanh: IWComponent["src"]["function"]=
    WertsfyComponents.source.math["method.arccotanh"]

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o valor da raiz quadrada de um número. [_Returns the square root value of a number._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const sqrt: IWComponent["src"]["function"]=
    WertsfyComponents.source.math["method.sqrt"]

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o valor da raiz cúbica de um número. [_Returns the cubic root value of a number._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   *  
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const cbrt: IWComponent["src"]["function"]=
    WertsfyComponents.source.math["method.cbrt"]

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o valor da raiz à quarta potência de um número. [_Returns the value of the root to the fourth power of a number._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   *  
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const quart: IWComponent["src"]["function"]=
    WertsfyComponents.source.math["method.quart"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o valor da raiz à quinta potência de um número. [_Returns the value of the root to the fifth power of a number._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const quirt: IWComponent["src"]["function"]=
    WertsfyComponents.source.math["method.quirt"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o valor da raiz à sexta potência de um número. [_Returns the value of the root to the sixth power of a number._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const sexrt: IWComponent["src"]["function"]=
    WertsfyComponents.source.math["method.sexrt"]

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o valor da raiz à sétima potência de um número. [_Returns the value of the root to the seventh power of a number._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const seprt: IWComponent["src"]["function"]=
    WertsfyComponents.source.math["method.seprt"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o valor da raiz à oitava potência de um número. [_Returns the value of the root to the eighth power of a number._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const octrt: IWComponent["src"]["function"]=
    WertsfyComponents.source.math["method.octrt"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o valor da raiz à nona potência de um número. [_Returns the value of the root to the ninth power of a number._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const nonrt: IWComponent["src"]["function"]=
    WertsfyComponents.source.math["method.nonrt"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o valor da raiz à décima potência de um número. [_Returns the value of the root to the tenth power of a number._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   *  
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const decrt: IWComponent["src"]["function"]=
    WertsfyComponents.source.math["method.decrt"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o valor do seno de um número. [_Returns the sine value of a number._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const sin: IWComponent["src"]["function"]=
    WertsfyComponents.source.math["method.sin"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o valor do seno hiperbólico de um número. [_Returns the hiperbolic sine value of a number._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const sinh: IWComponent["src"]["function"]=
    WertsfyComponents.source.math["method.sinh"]

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o valor do cosseno de um número. [_Returns the cossine value of a number._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const cos: IWComponent["src"]["function"]=
    WertsfyComponents.source.math["method.cos"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o valor do cosseno hiperbólico de um número. [_Returns the hiperbolic cossine value of a number._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const cosh: IWComponent["src"]["function"]=
    WertsfyComponents.source.math["method.cosh"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o valor da tangente de um número. [_Returns the tangent value of a number._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const tan: IWComponent["src"]["function"]=
    WertsfyComponents.source.math["method.tan"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o valor da tangente hiperbólica de um número. [_Returns the hiperbolic tangent value of a number._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const tanh: IWComponent["src"]["function"]=
    WertsfyComponents.source.math["method.tanh"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o valor da secante de um número. [_Returns the secant value of a number._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const sec: IWComponent["src"]["function"]=
    WertsfyComponents.source.math["method.sec"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o valor da secante hiperbólica de um número. [_Returns the hiperbolic secant value of a number._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   *  
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const sech: IWComponent["src"]["function"]=
    WertsfyComponents.source.math["method.sech"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o valor da cosecante de um número. [_Returns the cosecant value of a number._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   *  
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const cosec: IWComponent["src"]["function"]=
    WertsfyComponents.source.math["method.cosec"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o valor da cosecante hiperbólica de um número. [_Returns the hiperbolic cosecant value of a number._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const cosech: IWComponent["src"]["function"]=
    WertsfyComponents.source.math["method.cosech"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o valor da cotangente de um número. [_Returns the cotangent value of a number._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const cotan: IWComponent["src"]["function"]=
    WertsfyComponents.source.math["method.cotan"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o valor da cotangente hiperbólica de um número. [_Returns the hiperbolic cotangent value of a number._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   *  
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const cotanh: IWComponent["src"]["function"]=
    WertsfyComponents.source.math["method.cotanh"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna a potência de um número elevado por um valor. [_Returns the power of a high number by a value._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   *  
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ {base}
   * 
   * @argument y ***typeof: number*** ⁝ {exponent} 
   * 
   */
  export const pow: IWComponent["src"]["function"]=
    WertsfyComponents.source.math["method.pow"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna a potência de um número elevado por um valor, este elevado por uma sequência de outras potências. [_Returns the power of a high number by a value, this raised by a sequence of other powers._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ {base}
   * 
   * @argument y ***typeof: number*** ⁝ {exponent} 
   * 
   * @argument z ***typeof: number[]*** ⁝ {exponent of exponent} 
   * 
   */
  export const powofpow: IWComponent["src"]["function"]=
    WertsfyComponents.source.math["method.powofpow"]

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o menor valor numérico de uma sequência. [_Returns the lowest numerical value of a sequence._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number[]***
   * 
   */
  export const min: IWComponent["src"]["function"]=
    WertsfyComponents.source.math["method.min"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o maior valor numérico de uma sequência. [_Returns the highest numerical value of a sequence._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   *  
   * ______________________________________
   * 
   * @argument x ***typeof: number[]***
   * 
   */
  export const max: IWComponent["src"]["function"]=
    WertsfyComponents.source.math["method.max"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna um valor numérico aleátorio. [_Returns an rawn numerical value._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   */
  export const random: IWComponent["src"]["function"]=
    WertsfyComponents.source.math["method.random"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o logarítmo de base 10 de um valor. [_Returns the base logarithm 10 of a value._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   *  
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const log: IWComponent["src"]["function"]=
    WertsfyComponents.source.math["method.log"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o logarítmo de base 10 menos 1 de um valor. [_Returns the base logarithm 10 minus 1 of a value._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const logm1: IWComponent["src"]["function"]=
    WertsfyComponents.source.math["method.logm1"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o logarítmo de base 10 mais 1 de um valor. [_Returns the base logarithm 10 plus 1 of a value._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   *  
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const logp1: IWComponent["src"]["function"]=
    WertsfyComponents.source.math["method.logp1"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o logarítmo de base 2 de um valor. [_Returns the base logarithm 2 of a value._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const log2: IWComponent["src"]["function"]=
    WertsfyComponents.source.math["method.log2"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o logarítmo de base 2 menos 1 de um valor. [_Returns the base logarithm 2 minus 1 of a value._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const log2m1: IWComponent["src"]["function"]=
    WertsfyComponents.source.math["method.log2m1"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o logarítmo de base 2 mais 1 de um valor. [_Returns the base logarithm 2 plus 1 of a value._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const log2p1: IWComponent["src"]["function"]=
    WertsfyComponents.source.math["method.log2p1"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o logarítmo de base qualquer de um valor. [_Returns the base logarithm any of a value._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { value }
   * 
   * @argument y ***typeof: number*** ⁝ { base }
   * 
   */
  export const logx: IWComponent["src"]["function"]=
    WertsfyComponents.source.math["method.logx"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o logarítmo de base qualquer menos 1 de um valor. [_Returns the base logarithm any minus 1 of a value._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { value }
   * 
   * @argument y ***typeof: number*** ⁝ { base }
   * 
   */
  export const logxm1: IWComponent["src"]["function"]=
    WertsfyComponents.source.math["method.logxm1"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o logarítmo de base qualquer mais 1 de um valor. [_Returns the base logarithm any plus 1 of a value._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { value }
   * 
   * @argument y ***typeof: number*** ⁝ { base }
   * 
   */
  export const logxp1: IWComponent["src"]["function"]=
    WertsfyComponents.source.math["method.logxp1"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o logarítmo natural de um valor. [_Returns the natural logarithm of a value._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const ln: IWComponent["src"]["function"]=
    WertsfyComponents.source.math["method.ln"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o logarítmo natural menos 1 de um valor. [_Returns the natural logarithm minus 1 of a value._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const lnm1: IWComponent["src"]["function"]=
    WertsfyComponents.source.math["method.lnm1"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o logarítmo natural mais 1 de um valor. [_Returns the natural logarithm plus 1 of a value._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const lnp1: IWComponent["src"]["function"]=
    WertsfyComponents.source.math["method.lnp1"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o exponencial de um valor. [_Returns the exponential of a value._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   *  
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { base }
   * 
   * @argument y ***typeof: number*** ⁝ { value }
   * 
   */
  export const exp: IWComponent["src"]["function"]=
    WertsfyComponents.source.math["method.exp"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o exponencial menos 1 de um valor. [_Returns the exponential minus 1 of a value._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { base }
   * 
   * @argument y ***typeof: number*** ⁝ { value }
   * 
   */
  export const expm1: IWComponent["src"]["function"]=
    WertsfyComponents.source.math["method.expm1"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o exponencial mais 1 de um valor. [_Returns the exponential plus 1 of a value._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { base }
   * 
   * @argument y ***typeof: number*** ⁝ { value }
   * 
   */
  export const expp1: IWComponent["src"]["function"]=
    WertsfyComponents.source.math["method.expp1"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o valor arredondado de um número. [_Returns the rounded value of a number._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   *  
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const round: IWComponent["src"]["function"]=
    WertsfyComponents.source.math["method.round"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o valor arredondado de um número de ponto flutuante e/ou decimal. [_Returns the rounded value of a floating and/or decimal point number._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const fround: IWComponent["src"]["function"]=
    WertsfyComponents.source.math["method.fround"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o valor arredondado pra cima de um número. [_Returns the rounded value on a number._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const floor: IWComponent["src"]["function"]=
    WertsfyComponents.source.math["method.floor"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o valor arredondado pra baixo de um número. [_Returns the rounded value below a number._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const ceil: IWComponent["src"]["function"]=
    WertsfyComponents.source.math["method.ceil"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o valor da multiplicação de inteiros de 32-bits. [_Returns the value of 32-bit multiplication._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x, y ***typeof: number***
   * 
   */
  export const imul: IWComponent["src"]["function"]=
    WertsfyComponents.source.math["method.imul"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o valor do sinal de número. [_Returns the value of the number signal._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const sign: IWComponent["src"]["function"]=
    WertsfyComponents.source.math["method.sign"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna a parte inteira de um valor decimal. [_Returns the entire part of a decimal value._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   *  
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const trunc: IWComponent["src"]["function"]=
    WertsfyComponents.source.math["method.trunc"];

}

export namespace LibraryCalculator {

  /** 
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Coleção de Constante [Constant Collection]``**
   *  
   * Retorna a lista de constantes de atalho da calculadora. [_Returns the list of calculator shortcut constants._]
   * 
   * ______________________________________
   * 
   * @returns ``Object``
   * 
   * 
   */
  export const Shortcuts: IWComponent["src"]["object"]["collections"]["shortcuts"]=
    WertsfyComponents.source.calc["constant.shortcuts"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado da operação selecionada. [_Returns the result of the selected operation._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument operation ***typeof: TComuns***
   * 
   * @argument numbers ***typeof: number[]***
   * 
   */
  export const common: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.common"]; 

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado da operação selecionada. [_Returns the result of the selected operation._]
   * 
   * ______________________________________
   * 
   * @returns ``Number[]``
   * 
   * ______________________________________
   * 
   * @argument operation ***typeof: TAvancados***
   * 
   * @argument numbers ***typeof: number[]***
   * 
   */
  export const advanced: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.advanced"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado da operação do teorema de Boltzmann. [_Returns the result of the operation of Boltzmann's theorem._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { temperature }
   * 
   * @argument y ***typeof: number*** ⁝ { constant }
   * 
   */
  export const expTeoBoltzmann: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.teo.boltzmann"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado da operação do teorema de Coulomb. [_Returns the result of the operation of Coulomb's theorem._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   *  
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { electric current }
   * 
   * @argument y ***typeof: number*** ⁝ { distance }
   * 
   */
  export const expTeoCoulomb: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.teo.coulomb"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado da operação do teorema de Girard. [_Returns the result of the operation of Girard's theorem._]
   * 
   * ______________________________________
   * 
   * @returns ``Void | Number[] | String[]``
   *  
   * ______________________________________
   * 
   * @argument x ***typeof: string*** ⁝ { expression }
   * 
   */
  export const expTeoGirard: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.teo.girard"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado da operação do teorema de Pascal. [_Returns the result of the operation of Pascal's theorem._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: TExpressoes.variaveisDePascal*** ⁝ { operation constructor object }
   * 
   * @argument y ***typeof: number*** ⁝ { force"1" }
   * 
   * @argument z ***typeof: number*** ⁝ { force"2" }
   * 
   * @argument w ***typeof: number*** ⁝ { area"1" }
   * 
   * @argument k ***typeof: number*** ⁝ { area"2" }
   * 
   */
  export const expTeoPascal: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.teo.pascal"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado da operação do teorema de Pitagoras. [_Returns the result of the operation of Pitagoras's theorem._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: TExpressoes.triangulosPitagoricos*** ⁝ { operation constructor object }
   * 
   */
  export const expTeoPitagoras: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.teo.pitagoras"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado da operação do teorema de Plank. [_Returns the result of the operation of Plank's theorem._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   *  
   * ______________________________________
   * 
   * @argument x ***typeof: string*** ⁝ { energy }
   * 
   * @argument y ***typeof: string*** ⁝ { constant }
   * 
   */
  export const expTeoPlank: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.teo.plank"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado da operação do teorema de Stevin. [_Returns the result of the operation of Stevin's theorem._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { density }
   * 
   * @argument y ***typeof: number*** ⁝ { gravity }
   * 
   * @argument z: { z1, z2 } ***typeof: object: { number, number }*** ⁝ { start height, final height }
   * 
   */
  export const expTeoStevin: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.teo.stevin"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado da operação do teorema de Stirling. [_Returns the result of the operation of Stirling's theorem._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   *  
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const expTeoStirling: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.teo.stirling"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado da operação do teorema de Tales de Mileto. [_Returns the result of the operation of Tales de Mileto's theorem._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x, y, z ***typeof: number***
   * 
   */
  export const expTeoTalesDeMileto: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.teo.tales_mileto"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado da operação da equação horária do tempo. [_Returns the result of the operation of the time schedule equation._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   *  
   * ______________________________________
   * 
   * @argument x: { x1, x2 } ***typeof: object: { number, number }*** ⁝ { start time, final time }
   * 
   * @argument y ***typeof: number*** ⁝ { speed }
   * 
   * @argument z ***typeof: number*** ⁝ { acceleration }
   * 
   */
  export const expEqcHorariaTempo: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.equac.horaria_tempo"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado da operação da equação horária do espaço. [_Returns the result of the operation of the space schedule equation._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x: { x1, x2 } ***typeof: object: { number, number }*** ⁝ { start space, final space }
   * 
   * @argument y ***typeof: number*** ⁝ { acceleration }
   * 
   */
  export const expEqcHorariaEspaco: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.equac.horaria_espaco"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado da operação da equação horária da velocidade. [_Returns the result of the operation of the speed schedule equation._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { speed }
   * 
   * @argument y ***typeof: number*** ⁝ { time }
   * 
   * @argument z ***typeof: number*** ⁝ { acceleration }
   * 
   */
  export const expEqcHorariaVelocidade: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.equac.horaria_velocidade"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado da operação da equação horária da aceleração. [_Returns the result of the operation of the acceleration schedule equation._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { acceleration }
   * 
   * @argument y ***typeof: number*** ⁝ { time }
   * 
   * @argument z ***typeof: number*** ⁝ { speed }
   * 
   */
  export const expEqcHorariaAceleracao: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.equac.horaria_acel"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado da operação da equação horária da força. [_Returns the result of the operation of the force schedule equation._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { force }
   * 
   * @argument y ***typeof: number*** ⁝ { time }
   * 
   * @argument z ***typeof: number*** ⁝ { acceleration }
   * 
   */
  export const expEqcHorariaForca: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.equac.horaria_forca"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado da operação da equação horária do espaco e tempo. [_Returns the result of the operation of the space and time schedule equation._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x: { x1, x2 } ***typeof: object: { number, number }*** ⁝ { start time, final time }
   * 
   * @argument y: { y1: y2 } ***typeof: object: { number, number }*** ⁝ { start space, final space }
   * 
   * @argument z ***typeof: number*** ⁝ { speed }
   * 
   * @argument w ***typeof: number*** ⁝ { acceleration }
   * 
   */
  export const expEqcHorariaEspacoTempo: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.equac.horaria_tempo_espaco"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado da operação da equação horária do tempo em um movimento circular uniformente variado. [_Returns the result of the operation of the time schedule of time in a uniformly varied circular motion._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { initial angular speed }
   * 
   * @argument y ***typeof: number*** ⁝ { angular acceleration }
   * 
   * @argument z ***typeof: number*** ⁝ { time }
   * 
   */
  export const expEqcHorariaTempoMovimentoCircularUniformenteVariado: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.equac.horaria_tempo_movi_circ_unif_var"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado da operação da equação horária do espaço em um movimento circular uniformente variado. [_Returns the result of the operation of the space equation of space in a uniformly varied circular motion._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   *  
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { initial angular position }
   * 
   * @argument y ***typeof: number*** ⁝ { initial angular speed }
   * 
   * @argument z ***typeof: number*** ⁝ { angular acceleration }
   * 
   * @argument w ***typeof: number*** ⁝ { time }
   * 
   */
  export const expEqcHorariaEspacoMovimentoCircularUniformenteVariado: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.equac.horaria_espaco_movi_circ_unif_var"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado da operação da equação horária da posição do movimento harmônico simples. [_Returns the result of the operation of the time of the simple harmonic movement position._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { angular speed }
   * 
   * @argument y ***typeof: number*** ⁝ { amplitude }
   * 
   * @argument z ***typeof: number*** ⁝ { time }
   * 
   * @argument w ***typeof: number*** ⁝ { start level }
   * 
   */
  export const expEqcHorariaPosicaoMovimentoHarmonicoSimples: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.equac.horaria_posicao_movi_harm_simp"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado da operação da equação horária da velocidade do movimento harmônico simples. [_Returns the result of the operation of the time of the simple harmonic movement speed._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { angular speed }
   * 
   * @argument y ***typeof: number*** ⁝ { amplitude }
   * 
   * @argument z ***typeof: number*** ⁝ { time }
   * 
   * @argument w ***typeof: number*** ⁝ { start level }
   * 
   */
  export const expEqcHorariaVelocidadeMovimentoHarmonicoSimples: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.equac.horaria_velocidade_movi_harm_simp"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado da operação da equação horária da aceleração do movimento harmônico simples. [_Returns the result of the operation of the time of the simple harmonic movement acceleration._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { angular speed }
   * 
   * @argument y ***typeof: number*** ⁝ { amplitude }
   * 
   * @argument z ***typeof: number*** ⁝ { time }
   * 
   * @argument w ***typeof: number*** ⁝ { start level }
   * 
   */
  export const expEqcHorariaAceleracaoMovimentoHarmonicoSimples: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.equac.horaria_acel_movi_harm_simp"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado da operação da equação de Torricelli. [_Returns the result of the operation of the Torricelli equation._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { initial speed }
   * 
   * @argument y ***typeof: number*** ⁝ { acceleration }
   * 
   * @argument z ***typeof: object: { number, number }*** ⁝ { start space, final space }
   * 
   */
  export const expEqcTorricelli: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.equac.torricelli"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado da operação da equação de Lagrange. [_Returns the result of the operation of the Lagrange Equation._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x, y, xi, yi, xii, yii, xiii, yiii ***typeof: number***
   * 
   */
  export const expEqcLagrange: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.equac.lagrange"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do fatorial de um valor. [_Returns the result of the factorial of a value._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const expClcFatorial: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.fatorial"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado da combinação de dois valores. [_Returns the result of the combination of two values._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { total }
   * 
   * @argument y ***typeof: number*** ⁝ { divisor }
   * 
   */
  export const expClcCombinacao: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.combinacao"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do arranjo de dois valores. [_Returns the result of the arrangement of two values._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { total }
   * 
   * @argument y ***typeof: number*** ⁝ { divisor }
   * 
   */
  export const expClcArranjo: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.arranjo"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado da probabilidade de dois valores. [_Returns the result of the probability of two values._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { value }
   * 
   * @argument y ***typeof: number*** ⁝ { total value }
   * 
   */
  export const expClcProbabilidade: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.probabilidade"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do conjugado de um número complexo. [_Returns the result of the conjugate of a complex number._]
   * 
   * ______________________________________
   * 
   * @returns ``String``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: string*** ⁝ { expression }
   * 
   */
  export const expClcConjugadoNumeroComplexo: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.conjugado_num_complex"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado da operação da relação de euler. [_Returns the result of the operation of Euler's relationship._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { vertices }
   * 
   * @argument y ***typeof: number*** ⁝ { edges }
   * 
   * @argument z ***typeof: number*** ⁝ { faces }
   * 
   */
  export const expClcRelacaoEuler: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.relacao_euler"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do representante da potenciação de i, do número complexo. [_Returns the result of the representative of the power of I, of the complex number._]
   * 
   * ______________________________________
   * 
   * @returns ``String``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number***
   * 
   */
  export const expClcPotenciasDeI: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.potencias_de_i"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do cálculo de porcentagem. [_Returns the result of the percentage calculation._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: TExpressoes.porcentagem*** ⁝ { operation constructor object }
   * 
   */
  export const expClcPorcentagem: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.porcentagem"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do cálculo da determinante. [_Returns the result of the determinant calculation._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   *  
   * ______________________________________
   * 
   * @argument x ***typeof: TExpressoes.determinantes*** ⁝ { operation constructor object }
   * 
   */
  export const expClcDeterminante: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.determinante"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do cálculo entre polinômios. [_Returns the result of the calculation between polynomials._]
   * 
   * ______________________________________
   * 
   * @returns ``String``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: TExpressoes.operacoesComuns*** ⁝ { operation constructor object }
   * 
   * @argument y: { y1, y2 } ***typeof: object: { number, number }*** ⁝ { polynomials sentence 1, polynomials sentence 2 }
   * 
   */
  export const expClcPolinomios: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.polinomios"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do cálculo entre matrizes. [_Returns the result of the calculation between arrays._]
   * 
   * ______________________________________
   * 
   * @returns ``Number[][]``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: TExpressoes.operacoesComuns*** ⁝ { operation constructor object }
   * 
   * @argument y: { y1, y2 } ***typeof: object: { number[][], number[][] }*** ⁝ { matrix sentence 1, matrix sentence 2 }
   * 
   */
  export const expClcMatrizes: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.matrizes"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do cálculo da velocidade. [_Returns the result of the speed calculation._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x: { x1: x2 } ***typeof: object: { number, number }*** ⁝ { initial space, final space }
   * 
   * @argument y: { y1, y2 } ***typeof: object: { number, number }*** ⁝ { initial time, final time }
   * 
   */
  export const expClcVelocidade: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.velocidade"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do cálculo do espaço. [_Returns the result of the space calculation._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { speed }
   * 
   * @argument y: { y1, y2 } ***typeof: object: { number, number }*** ⁝ { initial time, final time }
   * 
   */
  export const expClcEspaco: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.espaco"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do cálculo do tempo. [_Returns the result of the time calculation._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   *  
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { speed }
   * 
   * @argument y: { y1, y2 } ***typeof: object: { number, number }*** ⁝ { initial space, final space }
   * 
   */
  export const expClcTempo: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.tempo"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do cálculo da aceleração. [_Returns the result of the acceleration calculation._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { speed }
   * 
   * @argument y: { y1, y2 } ***typeof: object: { number, number }*** ⁝ { initial time, final time }
   * 
   */
  export const expClcAceleracao: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.aceleracao"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do cálculo da energia cinética. [_Returns the result of the calculation of kinetic energy._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   *  
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { massa }
   * 
   * @argument y ***typeof: number*** ⁝ { speed }
   * 
   */
  export const expClcEnergiaCinetica: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.energia_cinetica"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do cálculo da energia potencial elástica. [_Returns the result of the calculation of elastic potential energy._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { elastic constant }
   * 
   * @argument y: { y1, y2 } ***typeof: object: { number, number }*** ⁝ { initial distance, final distance }
   * 
   */
  export const expClcEnergiaPotencialElastica: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.energia_potencial_elas"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do cálculo da energia potencial gravitacional. [_Returns the result of the calculation of gravitational potential energy._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { massa }
   * 
   * @argument y ***typeof: number*** ⁝ { gravity }
   * 
   * @argument z ***typeof: number*** ⁝ { height }
   * 
   */
  export const expClcEnergiaPotencialGravitacional: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.energia_potencial_grav"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do cálculo do potencial mecânico. [_Returns the result of the calculation of mecanic potential._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { speed }
   * 
   * @argument y ***typeof: number*** ⁝ { elastical constant }
   * 
   * @argument z: { z1, z2 } ***typeof: object: { number, number }*** ⁝ { initial distance, final distance }
   * 
   * @argument w ***typeof: number*** ⁝ { massa }
   * 
   * @argument k ***typeof: number*** ⁝ { gravity }
   * 
   * @argument t ***typeof: number*** ⁝ { height }
   * 
   * @argument r ***typeof: boolean*** ⁝ { elastic potential energy exists }
   * 
   * @argument s ***typeof: boolean*** ⁝ { gravitational potential energy exists }
   * 
   */
  export const expClcPotencialMecanico: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.potencial_mecanico"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do cálculo do potencial elástico. [_Returns the result of the calculation of elastic potential._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { elastic constant }
   * 
   * @argument y: { y1, y2 } ***typeof: object: { number, number }*** ⁝ { initial distance, final distance }
   * 
   */
  export const expClcPotencialElastico: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.potencial_elastico"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do cálculo do plano inclinado sem atrito. [_Returns the result of the calculation of frictionless inclined plan._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { massa }
   * 
   * @argument y ***typeof: number*** ⁝ { gravity }
   * 
   */
  export const expClcPlanoInclinadoSemAtrito: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.plano_incl_sem_atrito"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do cálculo do plano inclinado com atrito. [_Returns the result of the calculation of frictionful inclined plan._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { friction force }
   * 
   * @argument y ***typeof: number*** ⁝ { massa }
   * 
   * @argument z ***typeof: number*** ⁝ { gravity }
   * 
   * @argument w ***typeof: number*** ⁝ { angle }
   * 
   */
  export const expClcPlanoInclinadoComAtrito: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.plano_incl_com_atrito"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do cálculo da aceleração do plano inclinado no eixo x. [_Returns the result of calculating the tilted plane acceleration on the x axis._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { massa }
   * 
   * @argument y ***typeof: number*** ⁝ { gravity }
   * 
   * @argument z ***typeof: number*** ⁝ { angle }
   * 
   */
  export const expClcAceleracaoPlanoInclinadoEixoX: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.acel_plan_incl_eixo_x"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do cálculo da aceleração do plano inclinado no eixo y. [_Returns the result of calculating the tilted plane acceleration on the y axis._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   *  
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { massa }
   * 
   * @argument y ***typeof: number*** ⁝ { gravity }
   * 
   * @argument z ***typeof: number*** ⁝ { angle }
   * 
   */
  export const expClcAceleracaoPlanoInclinadoEixoY: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.acel_plan_incl_eixo_y"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do cálculo do lançamento horizontal. [_Returns the result of the horizontal release calculation._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { gravity }
   * 
   * @argument y: { y1, y2 } ***typeof: object: { number, number }*** ⁝ { initial time, final time }
   * 
   */
  export const expClcLancamentoHorizontal: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.lancamento_horizontal"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do cálculo da altura máxima de um lançamento vertical. [_Returns the result of the maximum height calculation of a vertical release._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { initial speed }
   * 
   * @argument y ***typeof: number*** ⁝ { gravity }
   * 
   * @argument z ***typeof: number*** ⁝ { angle }
   * 
   */
  export const expClcAlturaMaxLancamentoVertical: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.alt_max_lanc_vert"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do cálculo do alcance de um lançamento vertical. [_Returns the result of the scope calculation of a vertical release._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { speed }
   * 
   * @argument y: { y1, y2 } ***typeof: object: { number, number }*** ⁝ { initial time, final time }
   * 
   * @argument z ***typeof: number*** ⁝ { angle }
   * 
   */
  export const expClcAlcanceLancamentoVertical: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.alc_lanc_vert"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do cálculo do alcance máximo de um lançamento vertical. [_Returns the result of the maximum scope calculation of a vertical release._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { speed }
   * 
   * @argument y ***typeof: number*** ⁝ { gravity }
   * 
   * @argument z ***typeof: number*** ⁝ { angle }
   * 
   */
  export const expClcAlcanceMaxLancamentoVertical: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.alc_max_lanc_vert"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do cálculo do calor sensível. [_Returns the result of the sensitive heat calculation._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { massa }
   * 
   * @argument y ***typeof: number*** ⁝ { specific heat }
   * 
   * @argument z: { z1, z2 } ***typeof: object: { number, number }*** ⁝ { initial temperature, final temperature }
   * 
   */
  export const expClcCalorSensivel: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.calor_sensivel"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do cálculo do calor latente. [_Returns the result of the latent heat calculation._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { quantifier of heat }
   * 
   * @argument y ***typeof: number*** ⁝ { massa }
   * 
   */
  export const expClcCalorLatente: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.calor_latente"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do cálculo das leis de newton. [_Returns the result of the calculation of Newton Laws._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   *  
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { massa }
   * 
   * @argument y ***typeof: number*** ⁝ { acceleration }
   * 
   */
  export const expClcLeisDeNewton: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.leis_de_newton"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do cálculo do trabalho. [_Returns the result of the work calculation._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   *  
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { massa }
   * 
   * @argument y ***typeof: number*** ⁝ { gravity }
   * 
   * @argument z ***typeof: number*** ⁝ { height }
   * 
   */
  export const expClcTrabalho: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.trabalho"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do cálculo do consumo de energia. [_Returns the result of the calculation of energy consumption._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   *  
   * ______________________________________
   * 
   * @argument x: {x1, x2} ***typeof: object: { number, number }*** ⁝ { initial time, final time }
   * 
   * @argument y ***typeof: number*** ⁝ { electric current }
   * 
   * @argument z ***typeof: number*** ⁝ { ddp }
   * 
   */
  export const expClcConsumoDeEnergia: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.consumo_de_energia"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do cálculo da força gravitacional. [_Returns the result of the calculation of gravitational force._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { gravitational force }
   * 
   * @argument y ***typeof: number*** ⁝ { planet massa }
   * 
   * @argument z: { z1, z2 } ***typeof: object: { number, number }*** ⁝ { initial distance, final distance }
   * 
   */
  export const expClcForcaGravitacional: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.forca_gravitacional"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do cálculo da aceleração centripeta de um movimento circular uniforme. [_Returns the result of the centripetal acceleration calculation of a uniform circular motion._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { speed }
   * 
   * @argument y ***typeof: number*** ⁝ { ray }
   * 
   */
  export const expClcAceleracaoCentripetaMovimentoCircularUniforme: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.acel_centrip_mcu"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do cálculo da velocidade angular de um movimento circular uniforme. [_Returns the result of the angle speed calculation of a uniform circular motion._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   *  
   * ______________________________________
   * 
   * @argument x: { x1, x2 } ***typeof: object: { number, number }*** ⁝ { initial angle, final angle }
   * 
   * @argument y: { y1, y2 } ***typeof: object: { number, number }*** ⁝ { initial time, final time }
   * 
   */
  export const expClcVelocidadeAngularMovimentoCircularUniforme: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.veloc_ang_movi_circ_unif"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do cálculo da velocidade linear de um movimento circular uniforme. [_Returns the result of the linear speed calculation of a uniform circular motion._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { frequence }
   * 
   * @argument y ***typeof: number*** ⁝ { ray }
   * 
   */
  export const expClcVelocidadeLinearMovimentoCircularUniforme: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.veloc_linear_movi_circ_unif"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do cálculo de torricelli de um movimento circular uniformente variado. [_Returns the result of the Torricelli calculation of a uniformly varied circular movement._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { initial angle speed }
   * 
   * @argument y ***typeof: number*** ⁝ { angle acceleration }
   * 
   * @argument z: { y1, y2 } ***typeof: object: { number, number }*** ⁝ { initial angular displacement, final angular displacement }
   * 
   */
  export const expClcTorricelliMovimentoCircularUniformenteVariado: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.torricelli-movi-circ-unif-var"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do cálculo da aceleração angular de um movimento circular uniformente variado. [_Returns the result of the calculation of the angular acceleration of a uniformly varied circular motion._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x: { x1, x2 } ***typeof: object: { number, number }*** ⁝ { initial angle speed, final angle speed }
   * 
   * @argument y: { y1, y2 } ***typeof: object: { number, number }*** ⁝ { initial time, final time }
   * 
   */
  export const expClcAceleracaoAngularMovimentoCircularUniformenteVariado: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc_acel_ang_movi_circ_var"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do cálculo da frequência. [_Returns the result of the frequence._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { period }
   * 
   */
  export const expClcFrequencia: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.frequencia"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do cálculo do período. [_Returns the result of the period._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { frequence }
   * 
   */
  export const expClcPeriodo: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.periodo"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do cálculo da temperatura. [_Returns the result of the temperature._]
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: TExpressoes.variaveisDeTemperatura*** ⁝ { operation constructor object }
   * 
   * @argument y ***typeof: number*** ⁝ { value }
   * 
   */
  export const expClcTemperatura: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.temperatura"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado da dilatação linear. [_Returns the result of linear dilation._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { initial length }
   * 
   * @argument y ***typeof: number*** ⁝ { linear dilation coeficient }
   * 
   * @argument z: { z1, z2 } ***typeof: object: { number, number }*** ⁝ { initial temperature, final temperature }
   * 
   */
  export const expClcDilatacaoLinear: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.dilatacao_linear"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado da dilatação superficial. [_Returns the result of superficial dilation._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { initial area }
   * 
   * @argument y ***typeof: number*** ⁝ { superficial dilation coeficient }
   * 
   * @argument z: { z1, z2 } ***typeof: object: { number, number }*** ⁝ { initial temperature, final temperature }
   * 
   */
  export const expClcDilatacaoSuperficial: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.dilatacao_superficial"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado da dilatação volumétrica. [_Returns the result of volumetric dilation._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { initial area }
   * 
   * @argument y ***typeof: number*** ⁝ { volumetric dilation coeficient }
   * 
   * @argument z: { z1, z2 } ***typeof: object: { number, number }*** ⁝ { initial temperature, final temperature }
   * 
   */
  export const expClcDilatacaoVolumetrica: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.dilatacao_volumetrica"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do cálculo do princípio fundamental da hidroestática e hidrodinâmica. [_Returns the result of calculating the fundamental principle of hydroestatic and hydrodynamics._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { initial density }
   * 
   * @argument y ***typeof: number*** ⁝ { gravity }
   * 
   * @argument z: { z1, z2 } ***typeof: object: { number, number }*** ⁝ { initial height, final height }
   * 
   */
  export const expClcPrincipioFundamentalHidroestaticaHidrodinamica: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.principio_fund_hidroest_hidrodinam"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do cálculo do empuxo da hidroestática e hidrodinâmica. [_Returns the result of calculating the buoyancy of hydroestatic and hydrodynamics._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { density }
   * 
   * @argument y ***typeof: number*** ⁝ { gravity }
   * 
   * @argument z ***typeof: number*** ⁝ { volume }
   * 
   */
  export const expClcEmpuxoHidroestaticaHidrodinamica: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.empuxo_hidroes_hidrodinam"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do cálculo do peso aparente da hidroestática e hidrodinâmica. [_Returns the result of calculating the apparent weight of hydroestatic and hydrodynamics._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { weight }
   * 
   * @argument y ***typeof: number*** ⁝ { density }
   * 
   * @argument z ***typeof: number*** ⁝ { gravity }
   * 
   * @argument w ***typeof: number*** ⁝ { volume }
   * 
   */
  export const expClcPesoAparenteHidroestaticaHidrodinamica: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.peso_aparente_hidroest_hidrodinam"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do cálculo de atrito. [_Returns the result of the friction calculation._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { friction coeficient }
   * 
   * @argument y ***typeof: number*** ⁝ { massa }
   * 
   */
  export const expClcAtrito: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.atrito"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do cálculo da lei de Coulomb. [_Returns the result of the calculation of the Coulomb Law._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x: { x1, x2 } ***typeof: object: { number, number }*** ⁝ { charge a, change b }
   * 
   * @argument y: { y1, y2 } ***typeof: object: { number, number }*** ⁝ { initial distance, final distance }
   * 
   */
  export const expClcLeiDeCoulomb: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.lei_de_coulomb"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do cálculo da lei de Ohm. [_Returns the result of the calculation of the Ohm Law._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { resistence }
   * 
   * @argument y ***typeof: number*** ⁝ { current }
   * 
   */
  export const expClcLeideOhm: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.lei_de_ohm"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do cálculo do Efeito Joule. [_Returns the result of the joule effect calculation._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { current }
   * 
   * @argument y ***typeof: number*** ⁝ { resistence }
   * 
   * @argument z: { z1, z2 } ***typeof: object: { number, number }*** ⁝ { initial time, final time }
   * 
   */
  export const expClcEfeitoJoule: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.efeito_joule"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do cálculo da lei de Lenz. [_Returns the result of the calculation of the Lenz Law._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { magnetic field intensity }
   * 
   * @argument y ***typeof: number*** ⁝ { superficie area }
   * 
   * @argument z ***typeof: number*** ⁝ { angle }
   * 
   */
  export const expClcLeiDeLenz: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.lei_de_lenz"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do cálculo da força eletromotriz. [_Returns the result of the electromotive force calculation._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { total potential generator }
   * 
   * @argument y ***typeof: number*** ⁝ { current intensity }
   * 
   */
  export const expClcForcaEletromotriz: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.forca_eletromotriz"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do cálculo da contra força eletromotriz. [_Returns the result of the reverse electromotive force calculation._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { total potential generator }
   * 
   * @argument y ***typeof: number*** ⁝ { current intensity }
   * 
   */
  export const expClcContraForcaEletromotriz: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.contra_forca_eletromotriz"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do cálculo do efeito fotoelétrico. [_Returns the result of the calculation of the photoelectric effect._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   *  
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { light frequency }
   * 
   */
  export const expClcEfeitoFotoeletrico: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.efeito_fotoeletrico"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do cálculo da densidade. [_Returns the result of the density calculation._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { massa }
   * 
   * @argument y ***typeof: number*** ⁝ { volume }
   * 
   */
  export const expClcDensidade: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.densidade"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do cálculo da titulação. [_Returns the result of the calculation of the title._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: TExpressoes.variaveisDeTitulacao*** ⁝ { operation constructor object }
   * 
   * @argument y ***typeof: number*** ⁝ { base massa }
   * 
   * @argument z ***typeof: number*** ⁝ { acid massa }
   * 
   * @argument w ***typeof: number*** ⁝ { base volume }
   * 
   * @argument k ***typeof: number*** ⁝ { acid volume }
   * 
   */
  export const expClcTitulacao: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.titulacao"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do cálculo da concentração. [_Returns the result of the concentration calculation._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { solute massa }
   * 
   * @argument y ***typeof: number*** ⁝ { volume }
   * 
   */
  export const expClcConcentracao: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.concentracao"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do cálculo do rendimento. [_Returns the result of the performance calculation._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { part value }
   * 
   * @argument y ***typeof: number*** ⁝ { total value }
   * 
   */
  export const expClcRendimento: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.rendimento"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do cálculo da lei dos gases. [_Returns the result of the calculation of the Gases Law._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: string*** ⁝ { presure a }
   * 
   * @argument y ***typeof: string*** ⁝ { presure b }
   * 
   * @argument z ***typeof: string*** ⁝ { volume a }
   * 
   * @argument w ***typeof: string*** ⁝ { volume b }
   * 
   * @argument k ***typeof: string*** ⁝ { temperature a }
   * 
   * @argument t ***typeof: string*** ⁝ { temperature b }
   * 
   */
  export const expClcLeiDosGases: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.lei_geral_dos_gases"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do cálculo da regra de três simples. [_Returns the result of the simple rule calculation of three._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { value a }
   * 
   * @argument y ***typeof: number*** ⁝ { value b }
   * 
   * @argument z ***typeof: number*** ⁝ { value c }
   * 
   * @argument w ***typeof: string*** ⁝ { variable position }
   * 
   */
  export const expClcRegraDeTresSimples: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.regra_de_tres_simples"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do cálculo da regra de três composta. [_Returns the result of the composed rule calculation of three._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   *  
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { value a }
   * 
   * @argument y ***typeof: number*** ⁝ { value b }
   * 
   * @argument z ***typeof: number*** ⁝ { value c }
   * 
   * @argument w ***typeof: number*** ⁝ { value d }
   * 
   * @argument k ***typeof: number*** ⁝ { value e }
   * 
   * @argument t ***typeof: number*** ⁝ { value f }
   * 
   * @argument r ***typeof: number*** ⁝ { value g }
   * 
   * @argument s ***typeof: string*** ⁝ { variable position }
   * 
   */
  export const expClcRegraDeTresComposta: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.regra_de_tres_composta"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do cálculo do sistema de equações. [_Returns the result of the equation system calculation._]
   * 
   * ______________________________________
   * 
   * @returns ``Void | String``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: string*** ⁝ { expression a }
   * 
   * @argument y ***typeof: string*** ⁝ { expression b }
   * 
   */
  export const expClcSistemaDeEquacoes: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.sistema_de_equacoes"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do cálculo do sistema de inequações. [_Returns the result of the inequation system calculation._]
   * 
   * ______________________________________
   * 
   * @returns ``Void | String``
   *  
   * ______________________________________
   * 
   * @argument x ***typeof: string*** ⁝ { expression a }
   * 
   * @argument y ***typeof: string*** ⁝ { expression b }
   * 
   */
  export const expClcSistemaDeInequacoes: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.sistema_de_inequacoes"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do cálculo do sistemas lineares. [_Returns the result of the linear systems calculation._]
   * 
   * ______________________________________
   * 
   * @returns ``Void | Any[]``
   *  
   * ______________________________________
   * 
   * @argument x ***typeof: string[]*** ⁝ { expressions list }
   * 
   */
  export const expClcSistemasLineares: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.sistemas_lineares"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do cálculo de números complexos. [_Returns the result of the calculation of complex numbers._]
   * 
   * ______________________________________
   * 
   * @returns ``Void | String``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: TComuns*** ⁝ { operation selector }
   * 
   * @argument y ***typeof: string[]*** ⁝ { expressions list }
   * 
   * @argument z ***typeof: number*** ⁝ { potency } *optional attibute* 
   * 
   */
  export const expClcNumerosComplexos: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.numeros_complex"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do cálculo de juros simples. [_Returns the result of the simple interest calculation._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { value }
   * 
   * @argument y ***typeof: number*** ⁝ { taxa }
   * 
   * @argument z ***typeof: number*** ⁝ { time } 
   * 
   */
  export const expClcJurosSimples: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.juros_simples"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o resultado do cálculo de juros compostos. [_Returns the result of the compounds interest calculation._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { value }
   * 
   * @argument y ***typeof: number*** ⁝ { taxa }
   * 
   * @argument z ***typeof: number*** ⁝ { time } 
   * 
   * @argument k ***typeof: number*** ⁝ { times } 
   * 
   */
  export const expClcJurosCompostos: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.juros_compostos"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o quadrante correspondente às coordenadas de entrada. [_Returns the quadrant corresponding to the input coordinates._]
   * 
   * ______________________________________
   * 
   * @returns ``String``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { in absc }
   * 
   * @argument y ***typeof: number*** ⁝ { ordered }
   * 
   */
  export const expClcSinalizacaoQuadrantes: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.sinalizacao_quadrantes"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o octante correspondente às coordenadas de entrada. [_Returns the octant corresponding to the input coordinates._]
   * 
   * ______________________________________
   * 
   * @returns ``String``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: number*** ⁝ { in absc }
   * 
   * @argument y ***typeof: number*** ⁝ { ordered }
   * 
   * @argument z ***typeof: number*** ⁝ { cota }
   * 
   */
  export const expClcSinalizacaoOctantes: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.sinalizacao_octantes"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o cálculo do quadrado de punnet. [_Returns the punnet square calculation._]
    * 
   * ______________________________________
   * 
   * @returns ``String[]``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: string*** ⁝ { genotype a }
   * 
   * @argument y ***typeof: string*** ⁝ { genotype b }
   * 
   */
  export const expClcQuadradoDePunnet: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.quadrado_de_punnet"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o cálculo do quadrado de punnet extendido. [_Returns the extended punnet square calculation._]
   * 
   * ______________________________________
   * 
   * @returns ``String[]``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: string*** ⁝ { genotype a }
   * 
   * @argument y ***typeof: string*** ⁝ { genotype b }
   * 
   */
  export const expClcQuadradoDePunnetExtendido: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.quadrado_de_punnet_extendido"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o cálculo diverso selecionado. [_Returns the selected diverse calculation._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: TExpressoes.operacoesDiversos*** ⁝ { operation constructor object }
   * 
   */
  export const expClcDiversos: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.diversos"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o cálculo numérico selecionado. [_Returns the selected numeric calculation._]
   * 
   * ______________________________________
   * 
   * @returns ``Number | Number[]``
   *  
   * ______________________________________
   * 
   * @argument x ***typeof: TExpressoes.operacoesNumericos*** ⁝ { operation constructor object }
   * 
   */
  export const expClcNumericos: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.numericos"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o cálculo do Diagrama de Venn selecionado. [_Returns the selected of Diagram of Venn calculation._]
   * 
   * ______________________________________
   * 
   * @returns ``Object``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: TExpressoes.operacoesDiagramaVenn*** ⁝ { operation constructor object }
   * 
   */
  export const expClcDiagramaVenn: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.diagrama_venn"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o cálculo cartesiano selecionado. [_Returns the selected cartesian calculation._]
   * 
   * ______________________________________
   * 
   * @returns ``Void | Number | Number[]``
   * 
   * ______________________________________
   * 
   * @argument x ***typeof: TExpressoes.operacoesCartesianos*** ⁝ { operation constructor object }
   * 
   */
  export const expClcCartesianos: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.cartesianos"];

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Método [Method]``**
   * 
   * Retorna o cálculo geométrico selecionado. [_Returns the selected geometric calculation._]
   * 
   * ______________________________________
   * 
   * @returns ``Number``
   *  
   * ______________________________________
   * 
   * @argument x ***typeof: TExpressoes.operacoesGeometricos*** ⁝ { operation constructor object }
   * 
   */
  export const expClcGeometricos: IWComponent["src"]["function"]=
    WertsfyComponents.source.calc["method.expression.calc.geometricos"];

}