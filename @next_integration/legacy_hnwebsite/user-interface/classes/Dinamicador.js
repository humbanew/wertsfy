/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

class Dinamicador {

  dynamicActionInterno(_localPartida = "", _localDestino = "") {
    let _setorBuscado = document.getElementById(_localPartida);
    let _setorRetorno = document.getElementById(_localDestino);
    _setorBuscado.style.display = "none";
    _setorRetorno.style.display = "inline-block";
  }

  get _dynamicActionInterno() {
    return this.dynamicActionInterno;
  }

  dynamicActionExterno(_botaoRetorno, _localEntrada = "", _localSaida = "") {
    let _setorBuscado = document.getElementById(_localEntrada);
    let _setorRetorno = document.getElementById(_localSaida);
    return _botaoRetorno.addEventListener("click", () => {
      setTimeout(() => {
        _setorBuscado.style.display = "none";
        _setorRetorno.style.display = "inline-block";
        setTimeout(() => {
          window.scrollTo(0, 0);
        }, 2);
      }, 200);
    });
  }

  dynamicActionExternoComId(_botaoRetornoId = "", _localEntrada = "", _localSaida = "") {
    let _setorBuscado = document.getElementById(_localEntrada);
    let _setorRetorno = document.getElementById(_localSaida);
    let _botaoRetorno = document.getElementById(_botaoRetornoId);
    return _botaoRetorno.addEventListener("click", () => {
      setTimeout(() => {
        _setorBuscado.style.display = "none";
        _setorRetorno.style.display = "inline-block";
        setTimeout(() => {
          window.scrollTo(0, 0);
        }, 2);
      }, 200);
    });
  }

  dynamicActionExternoSubPartes(_botaoRetorno = "", _localEntrada = "", _localSaida = "") {
    let _setorBuscado = document.getElementById(_localEntrada);
    let _setorRetorno = document.getElementById(_localSaida);
    let _botaoRetornoEncontrado = document.getElementById(_botaoRetorno);
    return _botaoRetornoEncontrado.addEventListener("click", () => {
      setTimeout(() => {
        _setorBuscado.style.display = "none";
        _setorRetorno.style.display = "inline-block";
        setTimeout(() => {
          window.scrollTo(0, 0);
        }, 2);
      }, 200);
    });
  }

  dynamicCardsSelector(_classeBuscarElementos = "", _cardDaInteracao = 0, _localDoClique = "", _localDestinado = "") {
    let _cardsBuscados = document.getElementsByClassName(_classeBuscarElementos);
    return _cardsBuscados[_cardDaInteracao].addEventListener("click", () => {
      setTimeout(() => {
        this._dynamicActionInterno(_localDoClique, _localDestinado);
        window.scrollTo(0, 0);
      }, 200);
    });
  }

  dynamicLoad() {
    return setTimeout(() => { window.scrollTo(0, 0); }, 200);
  }

  dynamicBotaoReturnFormatter(_tagDoIdParteDescritiva = "" || typeof (variable), _partesDoSetor = 0) {
    for (let q = 0; q < _partesDoSetor; q++) {
      let id = _tagDoIdParteDescritiva + `_${q + 1}`;
      let idAchado = document.getElementById(id);
      idAchado.style.marginTop = "-2vw";
    }
  }

  dynamicButtonStyle(botaoDeRetornoId = "") {
    let botaoRetorno = document.getElementById(botaoDeRetornoId);
    botaoRetorno.style.marginTop = "-2vw";
  }

  dynamicSpanStyleColor(spanAvisos = typeof(variable)) {
    spanAvisos.style.backgroundColor = "#ff2200";
  }
}