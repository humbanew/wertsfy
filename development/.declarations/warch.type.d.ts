import { WertsfyPrototipos } from "./warch.prototype";

/**
 * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
 * 
 * **``Tipo [Type] | Sqrt & Cbrt Collection``**
 * 
 * Coleção de tipos de raiz quadrada e cúbica, possuindo o mesmo molde. [_Collection of square and cubic root types, having the same mold._] 
 */  
export declare type WConstSqrtCbrtCollectionObject = { 
  Of01_02: number; 
  Of01_04: number; 
  Of01_06: number; 
  Of01_08: number; 
  Of01: number; 
  Of02: number; 
  Of03: number; 
  Of04: number; 
  Of05: number; 
  Of06: number; 
  Of07: number; 
  Of09: number; 
  Of10: number;  
}

/**
 * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
 * 
 * **``Tipo [Type] | Shortcuts Collection``**
 * 
 * Coleção de tipos de atalhos de constante. [_Collection of constant shortcuts._] 
 */
export declare type WConstShortcutsCollectionObject = {
  Pi: number; 
  Euler: number; 
  Log2: number; 
  Log2e: number; 
  Log10: number; 
  Log10e: number;
}

/**
 * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
 * 
 * **``Tipo [Type] | Filter``**
 * 
 * Tipo de filtragem de entrada em funções específicas. [_Type of input filtering in specific functions._] 
 */
export declare type WITFilter = number 
  | number[] 
  | string 
  | string[]
  | boolean 
  | WertsfyPrototipos.Logicos.Core["TComuns"]
  | WertsfyPrototipos.Logicos.Core["TAvancados"]
  | WertsfyPrototipos.Logicos.Core["TExpressoes"]["determinantes"]
  | WertsfyPrototipos.Logicos.Core["TExpressoes"]["funcoesCartesianas"]
  | WertsfyPrototipos.Logicos.Core["TExpressoes"]["operacoesCartesianos"]
  | WertsfyPrototipos.Logicos.Core["TExpressoes"]["operacoesComuns"]
  | WertsfyPrototipos.Logicos.Core["TExpressoes"]["operacoesDiagramaVenn"]
  | WertsfyPrototipos.Logicos.Core["TExpressoes"]["operacoesDiversos"]
  | WertsfyPrototipos.Logicos.Core["TExpressoes"]["operacoesGeometricos"]
  | WertsfyPrototipos.Logicos.Core["TExpressoes"]["operacoesNumericos"]
  | WertsfyPrototipos.Logicos.Core["TExpressoes"]["operacoesVetores"]
  | WertsfyPrototipos.Logicos.Core["TExpressoes"]["porcentagem"]
  | WertsfyPrototipos.Logicos.Core["TExpressoes"]["triangulosPitagoricos"]
  | WertsfyPrototipos.Logicos.Core["TExpressoes"]["variaveisDePascal"]
  | WertsfyPrototipos.Logicos.Core["TExpressoes"]["variaveisDeTemperatura"]
  | WertsfyPrototipos.Logicos.Core["TExpressoes"]["variaveisDeTitulacao"]
  | { inicial: number, final: number }
  | { sent1: string, sent2: string }
  | { m1: number[][], m2: number[][] }

/**
 * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
 * 
 * **``Tipo [Type] | Output Filter``**
 * 
 * Tipo de filtragem de saída em funções específicas. [_Type of output filtering in specific functions._] 
 */
export declare type WITFilterOutput = number 
  | number[]
  | string
  | string[]
  | void
  | object
  | boolean
