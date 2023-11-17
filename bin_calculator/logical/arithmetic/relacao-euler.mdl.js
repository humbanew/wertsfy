"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.relacaoDeEuler = void 0;
var relacaoDeEuler = (vertices, arestas, faces) => {
    return (vertices - (arestas + faces)) - 2;
};
exports.relacaoDeEuler = relacaoDeEuler;
//# sourceMappingURL=relacao-euler.mdl.js.map