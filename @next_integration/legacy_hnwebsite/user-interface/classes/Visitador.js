/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

class Visitador{

  verificador(valores=[""]){
    let regex = /([a-z]+)(_)?/g;
    var resultado = null;

    for(let u = 0; u < valores.length; u++){
      while (resultado = regex.exec(valores[u])){
        console.warn(resultado[0]);
        console.warn(regex.lastIndex);
      }
    }
  }
}
