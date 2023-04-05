/// <reference path="warch.prototype.d.ts" />

import { WertsfyPrototipos } from "./warch.prototype";

/**
 * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
 * 
 * **``Container de Tipagem [Typing Conteiner]``**
 * 
 * Um pacote de tipagens da Wertsfy [_A Wertsfy typing package_] 
 */
export namespace WertsfyTypes {

  /**
   * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
   * 
   * **``Grupo de Tipagens [Typing Group] | Logicos``**
   * 
   * O grupo de tipagens lógicas e matemáticas. [_The group of logical and mathematical typing._] 
   */  
  export namespace Logicos {

    /**
     * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
     * 
     * **``Categoria de Tipagens [Typing Group] | Comum``**
     * 
     * A categoria de tipagens covencionais. [_The category of cosky typing._] 
     */  
    export var comum: WertsfyPrototipos.Logicos.Core["TComuns"];
    
    /**
     * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
     * 
     * **``Categoria de Tipagens [Typing Group] | Avancados``**
     * 
     * A categoria de tipagens avançadas. [_The category of advanced typing._] 
     */  
    export var avancados: WertsfyPrototipos.Logicos.Core["TAvancados"];

    /**
     * **𝕎𝕖𝕣𝕥𝕤𝕗𝕪**
     * 
     * **``Categoria de Tipagens [Typing Group] | Expressoes``**
     * 
     * A categoria de tipagens de expressões. [_The category of expressions typing._] 
     */  
    export var expressoes: WertsfyPrototipos.Logicos.Core["TExpressoes"];

  }

}
