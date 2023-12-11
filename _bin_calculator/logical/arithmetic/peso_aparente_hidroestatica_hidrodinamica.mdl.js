"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pesoAparenteDaHidroestaticaHidrodinamica = void 0;
const empuxo_hidroestatica_hidrodinamica_mdl_1 = require("./empuxo_hidroestatica_hidrodinamica.mdl");
var pesoAparenteDaHidroestaticaHidrodinamica = (peso, densidade, gravidade, volume) => {
    let resultado = peso - (0, empuxo_hidroestatica_hidrodinamica_mdl_1.empuxoHidroestaticaHidrodinamica)(densidade, gravidade, volume);
    return resultado;
};
exports.pesoAparenteDaHidroestaticaHidrodinamica = pesoAparenteDaHidroestaticaHidrodinamica;
//# sourceMappingURL=peso_aparente_hidroestatica_hidrodinamica.mdl.js.map