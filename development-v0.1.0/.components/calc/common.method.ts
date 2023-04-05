/// <reference path="../../.declarations/warch.prototype.d.ts" />

import { WertsfyPrototipos } from "../../.declarations/warch.prototype";

export const Component_math_calculator_common_method = (operation: WertsfyPrototipos.Logicos.Core["TComuns"], ...numbers: number[]): number => {
    
  let resultado: number;
  
  operation["modelo"] == "#plus" || "#minus" ? resultado = 0 : resultado = 1; 

  for(let i = 0; i < numbers.length; i++) {

    if(i == 0 && (operation["modelo"] == "#divisor" || "#multip" || "#power") ) { 
      resultado = numbers[0];
      continue;
    }

    switch(operation["modelo"]) {
      case "#plus": 
        resultado = resultado + numbers[i]; break;
      case "#minus":
        resultado = resultado - numbers[i]; break;
      case "#multip": 
        resultado = resultado * numbers[i]; break;
      case "#divisor":
        resultado = resultado / numbers[i]; break;
      case "#power": 
        resultado = resultado ** numbers[i]; break; 
    }

  }

  return resultado;

};
