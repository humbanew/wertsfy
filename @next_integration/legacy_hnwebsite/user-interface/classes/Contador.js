/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

var _contadorFuncionalidades = [];

class Contador {

  montar(_sectionRaiz, _classeEId) {
    const _contadorFuncionalidadesDisplay = document.createElement("p");

    _contadorFuncionalidadesDisplay.classList.add(_classeEId);

    _contadorFuncionalidadesDisplay.id = _classeEId;

    _contadorFuncionalidadesDisplay.textContent = "Funcionalidades Disponíveis: " + _contadorFuncionalidades.length;

    _sectionRaiz.appendChild(_contadorFuncionalidadesDisplay);
  }

  adicionar(_classeCardsSetor="") {
    const _setor = document.getElementsByClassName(_classeCardsSetor);

    for (let i = 0; i < _setor.length; i++) {
      _contadorFuncionalidades.push(_setor[i]);
    }

    return _contadorFuncionalidades;
  }
}