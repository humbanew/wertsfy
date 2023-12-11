"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.diagramaVenn2Grupos = void 0;
var diagramaVenn2Grupos = (ng1, ng2) => {
    let resultado = { intersection: 0, group1: 0, group2: 0 };
    return resultado = { intersection: ng1 - ng2, group1: ng1 - resultado.intersection, group2: ng2 - resultado.intersection };
};
exports.diagramaVenn2Grupos = diagramaVenn2Grupos;
//# sourceMappingURL=diagrama_venn_2_grupos.mdl.js.map