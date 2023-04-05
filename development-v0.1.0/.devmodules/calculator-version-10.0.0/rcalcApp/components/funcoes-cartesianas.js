"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$oitavoGrau = exports.$setimoGrau = exports.$sextoGrau = exports.$quintoGrau = exports.$quartoGrau = exports.$terceiroGrau = exports.$segundoGrau = exports.$primeiroGrau = void 0;
function $primeiroGrau(exp) {
    let res = 0;
    let verif = /([0-9]+(\.[0-9]+)?x((\-)?(\+)?)[0-9]+(\.[0-9]+)?=[0-9]+(\.[0-9]+)?)/gi;
    let p1 = /([0-9]+(\.[0-9]+)?x)/gi;
    let p2 = /(((\-)?(\+)?)[0-9]+(\.[0-9]+)?)/gi;
    let p3 = /(=[0-9]+(\.[0-9]+)?)/gi;
    if (exp.match(verif) == null) {
        return console.error("A expressão inserida não é uma função do 1º Grau!");
    }
    else {
        res = (parseFloat(exp.match(p2)) - parseFloat(exp.match(p3))) / parseFloat(exp.match(p1));
    }
    return res;
}
exports.$primeiroGrau = $primeiroGrau;
function $segundoGrau(a, b, c) {
    let res = [0];
    let delta = (b ** 2) - (4 * a * c);
    let x1 = (-1 * b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-1 * b - Math.sqrt(delta)) / (2 * a);
    res = [x1, x2];
    return res;
}
exports.$segundoGrau = $segundoGrau;
function $terceiroGrau(a, b, c) {
    let res = [0];
    let delta = (b ** 2) - (4 * a * c);
    let x1 = (-1 * b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-1 * b - Math.sqrt(delta)) / (2 * a);
    res = [x1, x2, 0];
    return res;
}
exports.$terceiroGrau = $terceiroGrau;
function $quartoGrau(a, b, c) {
    let res = [0];
    let delta = (b ** 2) - (4 * a * c);
    let x1 = (-1 * b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-1 * b - Math.sqrt(delta)) / (2 * a);
    res = [x1, -1 * x1, x2, -1 * x2];
    return res;
}
exports.$quartoGrau = $quartoGrau;
function $quintoGrau(a, b, c) {
    let res = [0], delta = (b ** 2) - (4 * a * c);
    let x1 = (-1 * b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-1 * b - Math.sqrt(delta)) / (2 * a);
    res = [x1, -1 * x1, x2, -1 * x2, 0];
    return res;
}
exports.$quintoGrau = $quintoGrau;
function $sextoGrau(a, b, c) {
    let res = [0], delta = (b ** 2) - (4 * a * c);
    let x1 = (-1 * b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-1 * b - Math.sqrt(delta)) / (2 * a);
    res = [x1, -1 * x1, x2, -1 * x2, 0, 0];
    return res;
}
exports.$sextoGrau = $sextoGrau;
function $setimoGrau(a, b, c) {
    let res = [0], delta = (b ** 2) - (4 * a * c);
    let x1 = (-1 * b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-1 * b - Math.sqrt(delta)) / (2 * a);
    res = [x1, -1 * x1, x2, -1 * x2, 0, 0, 0];
    return res;
}
exports.$setimoGrau = $setimoGrau;
function $oitavoGrau(a, b, c) {
    let res = [0], delta = (b ** 2) - (4 * a * c);
    let x1 = (-1 * b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-1 * b - Math.sqrt(delta)) / (2 * a);
    res = [x1, -1 * x1, x2, -1 * x2, 0, 0, 0, 0];
    return res;
}
exports.$oitavoGrau = $oitavoGrau;
//# sourceMappingURL=funcoes-cartesianas.js.map