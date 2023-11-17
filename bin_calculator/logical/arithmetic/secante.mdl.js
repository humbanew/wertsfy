"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.secante = void 0;
const cosseno_mdl_1 = require("./cosseno.mdl");
var secante = (x) => {
    return 1 / (0, cosseno_mdl_1.cosseno)(x);
};
exports.secante = secante;
//# sourceMappingURL=secante.mdl.js.map