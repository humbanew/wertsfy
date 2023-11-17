"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tangente = void 0;
const cosseno_mdl_1 = require("./cosseno.mdl");
const seno_mdl_1 = require("./seno.mdl");
var tangente = (x) => {
    return (0, seno_mdl_1.seno)(x) / (0, cosseno_mdl_1.cosseno)(x);
};
exports.tangente = tangente;
//# sourceMappingURL=tangente.mdl.js.map