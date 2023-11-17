"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrendondaParaDecimal32Bits = void 0;
/** **Function** Fround() */
var arrendondaParaDecimal32Bits = (x) => {
    let tam = 24;
    let regexp = /([0-9]+)\.([0-9]+)/g;
    let redux = regexp.exec(x.toString())[1].length;
    let k = new Float32Array(tam).toString();
    for (let i = 0; i < tam - 1; i++) {
        k = k.replace(",", "");
    }
    ;
    k = k.slice(0, k.length - redux);
    return x + k;
};
exports.arrendondaParaDecimal32Bits = arrendondaParaDecimal32Bits;
//# sourceMappingURL=arrendonda_para_decimal_32bits.mdl.js.map