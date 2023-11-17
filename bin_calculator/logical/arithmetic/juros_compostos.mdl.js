"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jurosCompostos = void 0;
var jurosCompostos = (valor, taxa, tempo, vezes) => {
    return (valor * (1 + taxa * tempo)) ** vezes;
};
exports.jurosCompostos = jurosCompostos;
//# sourceMappingURL=juros_compostos.mdl.js.map