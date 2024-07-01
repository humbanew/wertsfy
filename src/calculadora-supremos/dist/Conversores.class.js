"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conversores = exports.UnkownUnitConversor = void 0;
var EDicionarioUnidades;
(function (EDicionarioUnidades) {
    EDicionarioUnidades["computacionais_bits"] = "01t01";
    EDicionarioUnidades["computacionais_bytes"] = "01t02";
    EDicionarioUnidades["computacionais_kilobytes"] = "01t03";
    EDicionarioUnidades["computacionais_megabytes"] = "01t04";
    EDicionarioUnidades["computacionais_gigabytes"] = "01t05";
    EDicionarioUnidades["computacionais_terabytes"] = "01t06";
    EDicionarioUnidades["computacionais_petabytes"] = "01t07";
    EDicionarioUnidades["computacionais_exabytes"] = "01t08";
    EDicionarioUnidades["computacionais_zettabytes"] = "01t09";
    EDicionarioUnidades["computacionais_yottabytes"] = "01t10";
    EDicionarioUnidades["computacionais_binario_bytes"] = "02t01";
    EDicionarioUnidades["computacionais_binario_kibibytes"] = "02t02";
    EDicionarioUnidades["computacionais_binario_mebibytes"] = "02t03";
    EDicionarioUnidades["computacionais_binario_gibibytes"] = "02t04";
    EDicionarioUnidades["computacionais_binario_tebibytes"] = "02t05";
    EDicionarioUnidades["computacionais_binario_pebibytes"] = "02t06";
    EDicionarioUnidades["computacionais_binario_exbibytes"] = "02t07";
    EDicionarioUnidades["computacionais_binario_zebibytes"] = "02t08";
    EDicionarioUnidades["computacionais_binario_yobibytes"] = "02t09";
    EDicionarioUnidades["lineares_quectometros"] = "03t01";
    EDicionarioUnidades["lineares_rontometros"] = "03t02";
    EDicionarioUnidades["lineares_yoctometros"] = "03t03";
    EDicionarioUnidades["lineares_zeptometros"] = "03t04";
    EDicionarioUnidades["lineares_attometros"] = "03t05";
    EDicionarioUnidades["lineares_femtometros"] = "03t06";
    EDicionarioUnidades["lineares_picometros"] = "03t07";
    EDicionarioUnidades["lineares_nanometros"] = "03t08";
    EDicionarioUnidades["lineares_micrometros"] = "03t09";
    EDicionarioUnidades["lineares_milimetros"] = "03t10";
    EDicionarioUnidades["lineares_centimetros"] = "03t11";
    EDicionarioUnidades["lineares_decimetros"] = "03t12";
    EDicionarioUnidades["lineares_metros"] = "03t13";
    EDicionarioUnidades["lineares_decametros"] = "03t14";
    EDicionarioUnidades["lineares_hectometros"] = "03t15";
    EDicionarioUnidades["lineares_kilometros"] = "03t16";
    EDicionarioUnidades["lineares_megametros"] = "03t17";
    EDicionarioUnidades["lineares_gigametros"] = "03t18";
    EDicionarioUnidades["lineares_terametros"] = "03t19";
    EDicionarioUnidades["lineares_petametros"] = "03t20";
    EDicionarioUnidades["lineares_exametros"] = "03t21";
    EDicionarioUnidades["lineares_zettametros"] = "03t22";
    EDicionarioUnidades["lineares_yottametros"] = "03t23";
    EDicionarioUnidades["lineares_ronnametros"] = "03t24";
    EDicionarioUnidades["lineares_quettametros"] = "03t25";
    EDicionarioUnidades["area_quectometros_quadrados"] = "04t01";
    EDicionarioUnidades["area_rontometros_quadrados"] = "04t02";
    EDicionarioUnidades["area_yoctometros_quadrados"] = "04t03";
    EDicionarioUnidades["area_zeptometros_quadrados"] = "04t04";
    EDicionarioUnidades["area_attometros_quadrados"] = "04t05";
    EDicionarioUnidades["area_femtometros_quadrados"] = "04t06";
    EDicionarioUnidades["area_picometros_quadrados"] = "04t07";
    EDicionarioUnidades["area_nanometros_quadrados"] = "04t08";
    EDicionarioUnidades["area_micrometros_quadrados"] = "04t09";
    EDicionarioUnidades["area_milimetros_quadrados"] = "04t10";
    EDicionarioUnidades["area_centimetros_quadrados"] = "04t11";
    EDicionarioUnidades["area_decimetros_quadrados"] = "04t12";
    EDicionarioUnidades["area_metros_quadrados"] = "04t13";
    EDicionarioUnidades["area_decametros_quadrados"] = "04t14";
    EDicionarioUnidades["area_hectometros_quadrados"] = "04t15";
    EDicionarioUnidades["area_kilometros_quadrados"] = "04t16";
    EDicionarioUnidades["area_megametros_quadrados"] = "04t17";
    EDicionarioUnidades["area_gigametros_quadrados"] = "04t18";
    EDicionarioUnidades["area_terametros_quadrados"] = "04t19";
    EDicionarioUnidades["area_petametros_quadrados"] = "04t20";
    EDicionarioUnidades["area_exametros_quadrados"] = "04t21";
    EDicionarioUnidades["area_zettametros_quadrados"] = "04t22";
    EDicionarioUnidades["area_yottametros_quadrados"] = "04t23";
    EDicionarioUnidades["area_ronnametros_quadrados"] = "04t24";
    EDicionarioUnidades["area_quettametros_quadrados"] = "04t25";
    EDicionarioUnidades["volume_quectometros_cubicos"] = "05t01";
    EDicionarioUnidades["volume_rontometros_cubicos"] = "05t02";
    EDicionarioUnidades["volume_yoctometros_cubicos"] = "05t03";
    EDicionarioUnidades["volume_zeptometros_cubicos"] = "05t04";
    EDicionarioUnidades["volume_attometros_cubicos"] = "05t05";
    EDicionarioUnidades["volume_femtometros_cubicos"] = "05t06";
    EDicionarioUnidades["volume_picometros_cubicos"] = "05t07";
    EDicionarioUnidades["volume_nanometros_cubicos"] = "05t08";
    EDicionarioUnidades["volume_micrometros_cubicos"] = "05t09";
    EDicionarioUnidades["volume_milimetros_cubicos"] = "05t10";
    EDicionarioUnidades["volume_centimetros_cubicos"] = "05t11";
    EDicionarioUnidades["volume_decimetros_cubicos"] = "05t12";
    EDicionarioUnidades["volume_metros_cubicos"] = "05t13";
    EDicionarioUnidades["volume_decametros_cubicos"] = "05t14";
    EDicionarioUnidades["volume_hectometros_cubicos"] = "05t15";
    EDicionarioUnidades["volume_kilometros_cubicos"] = "05t16";
    EDicionarioUnidades["volume_megametros_cubicos"] = "05t17";
    EDicionarioUnidades["volume_gigametros_cubicos"] = "05t18";
    EDicionarioUnidades["volume_terametros_cubicos"] = "05t19";
    EDicionarioUnidades["volume_petametros_cubicos"] = "05t20";
    EDicionarioUnidades["volume_exametros_cubicos"] = "05t21";
    EDicionarioUnidades["volume_zettametros_cubicos"] = "05t22";
    EDicionarioUnidades["volume_yottametros_cubicos"] = "05t23";
    EDicionarioUnidades["volume_ronnametros_cubicos"] = "05t24";
    EDicionarioUnidades["volume_quettametros_cubicos"] = "05t25";
})(EDicionarioUnidades || (EDicionarioUnidades = {}));
/**
 * @todo Componente com necessidade de atualizações, módulos incompletos ou não implementados.
 */
class UnkownUnitConversor extends Error {
    constructor(a, b) {
        super(`Conversão de unidades imprópria ou desconhecida! ${a} => ${b}`);
    }
}
exports.UnkownUnitConversor = UnkownUnitConversor;
class Conversores {
    transform(to, go, value) {
        let informativo = `Conversão de ${go} para ${to} com valor ${value}`;
        switch (to) {
            case EDicionarioUnidades.computacionais_bits:
                switch (go) {
                    case EDicionarioUnidades.computacionais_bytes:
                        value = value / 8;
                        break;
                    case EDicionarioUnidades.computacionais_kilobytes:
                        value = value / 1000 / 8;
                        break;
                    case EDicionarioUnidades.computacionais_megabytes:
                        value = value / 1000 ** 2 / 8;
                        break;
                    case EDicionarioUnidades.computacionais_gigabytes:
                        value = value / 1000 ** 3 / 8;
                        break;
                    case EDicionarioUnidades.computacionais_terabytes:
                        value = value / 1000 ** 4 / 8;
                        break;
                    case EDicionarioUnidades.computacionais_petabytes:
                        value = value / 1000 ** 5 / 8;
                        break;
                    case EDicionarioUnidades.computacionais_exabytes:
                        value = value / 1000 ** 6 / 8;
                        break;
                    case EDicionarioUnidades.computacionais_zettabytes:
                        value = value / 1000 ** 7 / 8;
                        break;
                    case EDicionarioUnidades.computacionais_yottabytes:
                        value = value / 1000 ** 8 / 8;
                        break;
                    case EDicionarioUnidades.computacionais_binario_bytes:
                        value = value / 8;
                        break;
                    case EDicionarioUnidades.computacionais_binario_kibibytes:
                        value = value / 1024 / 8;
                        break;
                    case EDicionarioUnidades.computacionais_binario_mebibytes:
                        value = value / 1024 ** 2 / 8;
                        break;
                    case EDicionarioUnidades.computacionais_binario_gibibytes:
                        value = value / 1024 ** 3 / 8;
                        break;
                    case EDicionarioUnidades.computacionais_binario_tebibytes:
                        value = value / 1024 ** 4 / 8;
                        break;
                    case EDicionarioUnidades.computacionais_binario_pebibytes:
                        value = value / 1024 ** 5 / 8;
                        break;
                    case EDicionarioUnidades.computacionais_binario_exbibytes:
                        value = value / 1024 ** 6 / 8;
                        break;
                    case EDicionarioUnidades.computacionais_binario_zebibytes:
                        value = value / 1024 ** 7 / 8;
                        break;
                    case EDicionarioUnidades.computacionais_binario_yobibytes:
                        value = value / 1024 ** 8 / 8;
                        break;
                    case EDicionarioUnidades.lineares_quectometros ||
                        EDicionarioUnidades.lineares_rontometros ||
                        EDicionarioUnidades.lineares_yoctometros ||
                        EDicionarioUnidades.lineares_zeptometros ||
                        EDicionarioUnidades.lineares_attometros ||
                        EDicionarioUnidades.lineares_femtometros ||
                        EDicionarioUnidades.lineares_picometros ||
                        EDicionarioUnidades.lineares_nanometros ||
                        EDicionarioUnidades.lineares_micrometros ||
                        EDicionarioUnidades.lineares_milimetros ||
                        EDicionarioUnidades.lineares_centimetros ||
                        EDicionarioUnidades.lineares_decimetros ||
                        EDicionarioUnidades.lineares_metros ||
                        EDicionarioUnidades.lineares_decametros ||
                        EDicionarioUnidades.lineares_hectometros ||
                        EDicionarioUnidades.lineares_kilometros ||
                        EDicionarioUnidades.lineares_megametros ||
                        EDicionarioUnidades.lineares_gigametros ||
                        EDicionarioUnidades.lineares_terametros ||
                        EDicionarioUnidades.lineares_petametros ||
                        EDicionarioUnidades.lineares_exametros ||
                        EDicionarioUnidades.lineares_zettametros ||
                        EDicionarioUnidades.lineares_yottametros ||
                        EDicionarioUnidades.lineares_ronnametros ||
                        EDicionarioUnidades.lineares_quettametros ||
                        EDicionarioUnidades.area_quectometros_quadrados ||
                        EDicionarioUnidades.area_rontometros_quadrados ||
                        EDicionarioUnidades.area_yoctometros_quadrados ||
                        EDicionarioUnidades.area_zeptometros_quadrados ||
                        EDicionarioUnidades.area_attometros_quadrados ||
                        EDicionarioUnidades.area_femtometros_quadrados ||
                        EDicionarioUnidades.area_picometros_quadrados ||
                        EDicionarioUnidades.area_nanometros_quadrados ||
                        EDicionarioUnidades.area_micrometros_quadrados ||
                        EDicionarioUnidades.area_milimetros_quadrados ||
                        EDicionarioUnidades.area_centimetros_quadrados ||
                        EDicionarioUnidades.area_decimetros_quadrados ||
                        EDicionarioUnidades.area_metros_quadrados ||
                        EDicionarioUnidades.area_decametros_quadrados ||
                        EDicionarioUnidades.area_hectometros_quadrados ||
                        EDicionarioUnidades.area_kilometros_quadrados ||
                        EDicionarioUnidades.area_megametros_quadrados ||
                        EDicionarioUnidades.area_gigametros_quadrados ||
                        EDicionarioUnidades.area_terametros_quadrados ||
                        EDicionarioUnidades.area_petametros_quadrados ||
                        EDicionarioUnidades.area_exametros_quadrados ||
                        EDicionarioUnidades.area_zettametros_quadrados ||
                        EDicionarioUnidades.area_yottametros_quadrados ||
                        EDicionarioUnidades.area_ronnametros_quadrados ||
                        EDicionarioUnidades.area_quettametros_quadrados ||
                        EDicionarioUnidades.volume_quectometros_cubicos ||
                        EDicionarioUnidades.volume_rontometros_cubicos ||
                        EDicionarioUnidades.volume_yoctometros_cubicos ||
                        EDicionarioUnidades.volume_zeptometros_cubicos ||
                        EDicionarioUnidades.volume_attometros_cubicos ||
                        EDicionarioUnidades.volume_femtometros_cubicos ||
                        EDicionarioUnidades.volume_picometros_cubicos ||
                        EDicionarioUnidades.volume_nanometros_cubicos ||
                        EDicionarioUnidades.volume_micrometros_cubicos ||
                        EDicionarioUnidades.volume_milimetros_cubicos ||
                        EDicionarioUnidades.volume_centimetros_cubicos ||
                        EDicionarioUnidades.volume_decimetros_cubicos ||
                        EDicionarioUnidades.volume_metros_cubicos ||
                        EDicionarioUnidades.volume_decametros_cubicos ||
                        EDicionarioUnidades.volume_hectometros_cubicos ||
                        EDicionarioUnidades.volume_kilometros_cubicos ||
                        EDicionarioUnidades.volume_megametros_cubicos ||
                        EDicionarioUnidades.volume_gigametros_cubicos ||
                        EDicionarioUnidades.volume_terametros_cubicos ||
                        EDicionarioUnidades.volume_petametros_cubicos ||
                        EDicionarioUnidades.volume_exametros_cubicos ||
                        EDicionarioUnidades.volume_zettametros_cubicos ||
                        EDicionarioUnidades.volume_yottametros_cubicos ||
                        EDicionarioUnidades.volume_ronnametros_cubicos ||
                        EDicionarioUnidades.volume_quettametros_cubicos:
                        throw new UnkownUnitConversor(go, to);
                }
                break;
            case EDicionarioUnidades.computacionais_bytes:
                switch (go) {
                    case EDicionarioUnidades.computacionais_bits:
                        value = value * 8;
                        break;
                    case EDicionarioUnidades.computacionais_kilobytes:
                        value = value / 1000;
                        break;
                    case EDicionarioUnidades.computacionais_megabytes:
                        value = value / 1000 ** 2;
                        break;
                    case EDicionarioUnidades.computacionais_gigabytes:
                        value = value / 1000 ** 3;
                        break;
                    case EDicionarioUnidades.computacionais_terabytes:
                        value = value / 1000 ** 4;
                        break;
                    case EDicionarioUnidades.computacionais_petabytes:
                        value = value / 1000 ** 5;
                        break;
                    case EDicionarioUnidades.computacionais_exabytes:
                        value = value / 1000 ** 6;
                        break;
                    case EDicionarioUnidades.computacionais_zettabytes:
                        value = value / 1000 ** 7;
                        break;
                    case EDicionarioUnidades.computacionais_yottabytes:
                        value = value / 1000 ** 8;
                        break;
                    case EDicionarioUnidades.computacionais_binario_bytes:
                        value = value;
                        break;
                    case EDicionarioUnidades.computacionais_binario_kibibytes:
                        value = value / 1024;
                        break;
                    case EDicionarioUnidades.computacionais_binario_mebibytes:
                        value = value / 1024 ** 2;
                        break;
                    case EDicionarioUnidades.computacionais_binario_gibibytes:
                        value = value / 1024 ** 3;
                        break;
                    case EDicionarioUnidades.computacionais_binario_tebibytes:
                        value = value / 1024 ** 4;
                        break;
                    case EDicionarioUnidades.computacionais_binario_pebibytes:
                        value = value / 1024 ** 5;
                        break;
                    case EDicionarioUnidades.computacionais_binario_exbibytes:
                        value = value / 1024 ** 6;
                        break;
                    case EDicionarioUnidades.computacionais_binario_zebibytes:
                        value = value / 1024 ** 7;
                        break;
                    case EDicionarioUnidades.computacionais_binario_yobibytes:
                        value = value / 1024 ** 8;
                        break;
                    case EDicionarioUnidades.lineares_quectometros ||
                        EDicionarioUnidades.lineares_rontometros ||
                        EDicionarioUnidades.lineares_yoctometros ||
                        EDicionarioUnidades.lineares_zeptometros ||
                        EDicionarioUnidades.lineares_attometros ||
                        EDicionarioUnidades.lineares_femtometros ||
                        EDicionarioUnidades.lineares_picometros ||
                        EDicionarioUnidades.lineares_nanometros ||
                        EDicionarioUnidades.lineares_micrometros ||
                        EDicionarioUnidades.lineares_milimetros ||
                        EDicionarioUnidades.lineares_centimetros ||
                        EDicionarioUnidades.lineares_decimetros ||
                        EDicionarioUnidades.lineares_metros ||
                        EDicionarioUnidades.lineares_decametros ||
                        EDicionarioUnidades.lineares_hectometros ||
                        EDicionarioUnidades.lineares_kilometros ||
                        EDicionarioUnidades.lineares_megametros ||
                        EDicionarioUnidades.lineares_gigametros ||
                        EDicionarioUnidades.lineares_terametros ||
                        EDicionarioUnidades.lineares_petametros ||
                        EDicionarioUnidades.lineares_exametros ||
                        EDicionarioUnidades.lineares_zettametros ||
                        EDicionarioUnidades.lineares_yottametros ||
                        EDicionarioUnidades.lineares_ronnametros ||
                        EDicionarioUnidades.lineares_quettametros ||
                        EDicionarioUnidades.area_quectometros_quadrados ||
                        EDicionarioUnidades.area_rontometros_quadrados ||
                        EDicionarioUnidades.area_yoctometros_quadrados ||
                        EDicionarioUnidades.area_zeptometros_quadrados ||
                        EDicionarioUnidades.area_attometros_quadrados ||
                        EDicionarioUnidades.area_femtometros_quadrados ||
                        EDicionarioUnidades.area_picometros_quadrados ||
                        EDicionarioUnidades.area_nanometros_quadrados ||
                        EDicionarioUnidades.area_micrometros_quadrados ||
                        EDicionarioUnidades.area_milimetros_quadrados ||
                        EDicionarioUnidades.area_centimetros_quadrados ||
                        EDicionarioUnidades.area_decimetros_quadrados ||
                        EDicionarioUnidades.area_metros_quadrados ||
                        EDicionarioUnidades.area_decametros_quadrados ||
                        EDicionarioUnidades.area_hectometros_quadrados ||
                        EDicionarioUnidades.area_kilometros_quadrados ||
                        EDicionarioUnidades.area_megametros_quadrados ||
                        EDicionarioUnidades.area_gigametros_quadrados ||
                        EDicionarioUnidades.area_terametros_quadrados ||
                        EDicionarioUnidades.area_petametros_quadrados ||
                        EDicionarioUnidades.area_exametros_quadrados ||
                        EDicionarioUnidades.area_zettametros_quadrados ||
                        EDicionarioUnidades.area_yottametros_quadrados ||
                        EDicionarioUnidades.area_ronnametros_quadrados ||
                        EDicionarioUnidades.area_quettametros_quadrados ||
                        EDicionarioUnidades.volume_quectometros_cubicos ||
                        EDicionarioUnidades.volume_rontometros_cubicos ||
                        EDicionarioUnidades.volume_yoctometros_cubicos ||
                        EDicionarioUnidades.volume_zeptometros_cubicos ||
                        EDicionarioUnidades.volume_attometros_cubicos ||
                        EDicionarioUnidades.volume_femtometros_cubicos ||
                        EDicionarioUnidades.volume_picometros_cubicos ||
                        EDicionarioUnidades.volume_nanometros_cubicos ||
                        EDicionarioUnidades.volume_micrometros_cubicos ||
                        EDicionarioUnidades.volume_milimetros_cubicos ||
                        EDicionarioUnidades.volume_centimetros_cubicos ||
                        EDicionarioUnidades.volume_decimetros_cubicos ||
                        EDicionarioUnidades.volume_metros_cubicos ||
                        EDicionarioUnidades.volume_decametros_cubicos ||
                        EDicionarioUnidades.volume_hectometros_cubicos ||
                        EDicionarioUnidades.volume_kilometros_cubicos ||
                        EDicionarioUnidades.volume_megametros_cubicos ||
                        EDicionarioUnidades.volume_gigametros_cubicos ||
                        EDicionarioUnidades.volume_terametros_cubicos ||
                        EDicionarioUnidades.volume_petametros_cubicos ||
                        EDicionarioUnidades.volume_exametros_cubicos ||
                        EDicionarioUnidades.volume_zettametros_cubicos ||
                        EDicionarioUnidades.volume_yottametros_cubicos ||
                        EDicionarioUnidades.volume_ronnametros_cubicos ||
                        EDicionarioUnidades.volume_quettametros_cubicos:
                        throw new UnkownUnitConversor(go, to);
                }
                break;
            case EDicionarioUnidades.computacionais_kilobytes:
                switch (go) {
                    case EDicionarioUnidades.computacionais_bits:
                        value = value * 8 * 1000;
                        break;
                    case EDicionarioUnidades.computacionais_bytes:
                        value = value * 1000;
                        break;
                    case EDicionarioUnidades.computacionais_megabytes:
                        value = value / 1000;
                        break;
                    case EDicionarioUnidades.computacionais_gigabytes:
                        value = value / 1000 ** 2;
                        break;
                    case EDicionarioUnidades.computacionais_terabytes:
                        value = value / 1000 ** 3;
                        break;
                    case EDicionarioUnidades.computacionais_petabytes:
                        value = value / 1000 ** 4;
                        break;
                    case EDicionarioUnidades.computacionais_exabytes:
                        value = value / 1000 ** 5;
                        break;
                    case EDicionarioUnidades.computacionais_zettabytes:
                        value = value / 1000 ** 6;
                        break;
                    case EDicionarioUnidades.computacionais_yottabytes:
                        value = value / 1000 ** 7;
                        break;
                    case EDicionarioUnidades.computacionais_binario_bytes:
                        value = value * 1024;
                        break;
                    case EDicionarioUnidades.computacionais_binario_kibibytes:
                        value = value;
                        break;
                    case EDicionarioUnidades.computacionais_binario_mebibytes:
                        value = value / 1024;
                        break;
                    case EDicionarioUnidades.computacionais_binario_gibibytes:
                        value = value / 1024 ** 2;
                        break;
                    case EDicionarioUnidades.computacionais_binario_tebibytes:
                        value = value / 1024 ** 3;
                        break;
                    case EDicionarioUnidades.computacionais_binario_pebibytes:
                        value = value / 1024 ** 4;
                        break;
                    case EDicionarioUnidades.computacionais_binario_exbibytes:
                        value = value / 1024 ** 5;
                        break;
                    case EDicionarioUnidades.computacionais_binario_zebibytes:
                        value = value / 1024 ** 6;
                        break;
                    case EDicionarioUnidades.computacionais_binario_yobibytes:
                        value = value / 1024 ** 7;
                        break;
                    case EDicionarioUnidades.lineares_quectometros ||
                        EDicionarioUnidades.lineares_rontometros ||
                        EDicionarioUnidades.lineares_yoctometros ||
                        EDicionarioUnidades.lineares_zeptometros ||
                        EDicionarioUnidades.lineares_attometros ||
                        EDicionarioUnidades.lineares_femtometros ||
                        EDicionarioUnidades.lineares_picometros ||
                        EDicionarioUnidades.lineares_nanometros ||
                        EDicionarioUnidades.lineares_micrometros ||
                        EDicionarioUnidades.lineares_milimetros ||
                        EDicionarioUnidades.lineares_centimetros ||
                        EDicionarioUnidades.lineares_decimetros ||
                        EDicionarioUnidades.lineares_metros ||
                        EDicionarioUnidades.lineares_decametros ||
                        EDicionarioUnidades.lineares_hectometros ||
                        EDicionarioUnidades.lineares_kilometros ||
                        EDicionarioUnidades.lineares_megametros ||
                        EDicionarioUnidades.lineares_gigametros ||
                        EDicionarioUnidades.lineares_terametros ||
                        EDicionarioUnidades.lineares_petametros ||
                        EDicionarioUnidades.lineares_exametros ||
                        EDicionarioUnidades.lineares_zettametros ||
                        EDicionarioUnidades.lineares_yottametros ||
                        EDicionarioUnidades.lineares_ronnametros ||
                        EDicionarioUnidades.lineares_quettametros ||
                        EDicionarioUnidades.area_quectometros_quadrados ||
                        EDicionarioUnidades.area_rontometros_quadrados ||
                        EDicionarioUnidades.area_yoctometros_quadrados ||
                        EDicionarioUnidades.area_zeptometros_quadrados ||
                        EDicionarioUnidades.area_attometros_quadrados ||
                        EDicionarioUnidades.area_femtometros_quadrados ||
                        EDicionarioUnidades.area_picometros_quadrados ||
                        EDicionarioUnidades.area_nanometros_quadrados ||
                        EDicionarioUnidades.area_micrometros_quadrados ||
                        EDicionarioUnidades.area_milimetros_quadrados ||
                        EDicionarioUnidades.area_centimetros_quadrados ||
                        EDicionarioUnidades.area_decimetros_quadrados ||
                        EDicionarioUnidades.area_metros_quadrados ||
                        EDicionarioUnidades.area_decametros_quadrados ||
                        EDicionarioUnidades.area_hectometros_quadrados ||
                        EDicionarioUnidades.area_kilometros_quadrados ||
                        EDicionarioUnidades.area_megametros_quadrados ||
                        EDicionarioUnidades.area_gigametros_quadrados ||
                        EDicionarioUnidades.area_terametros_quadrados ||
                        EDicionarioUnidades.area_petametros_quadrados ||
                        EDicionarioUnidades.area_exametros_quadrados ||
                        EDicionarioUnidades.area_zettametros_quadrados ||
                        EDicionarioUnidades.area_yottametros_quadrados ||
                        EDicionarioUnidades.area_ronnametros_quadrados ||
                        EDicionarioUnidades.area_quettametros_quadrados ||
                        EDicionarioUnidades.volume_quectometros_cubicos ||
                        EDicionarioUnidades.volume_rontometros_cubicos ||
                        EDicionarioUnidades.volume_yoctometros_cubicos ||
                        EDicionarioUnidades.volume_zeptometros_cubicos ||
                        EDicionarioUnidades.volume_attometros_cubicos ||
                        EDicionarioUnidades.volume_femtometros_cubicos ||
                        EDicionarioUnidades.volume_picometros_cubicos ||
                        EDicionarioUnidades.volume_nanometros_cubicos ||
                        EDicionarioUnidades.volume_micrometros_cubicos ||
                        EDicionarioUnidades.volume_milimetros_cubicos ||
                        EDicionarioUnidades.volume_centimetros_cubicos ||
                        EDicionarioUnidades.volume_decimetros_cubicos ||
                        EDicionarioUnidades.volume_metros_cubicos ||
                        EDicionarioUnidades.volume_decametros_cubicos ||
                        EDicionarioUnidades.volume_hectometros_cubicos ||
                        EDicionarioUnidades.volume_kilometros_cubicos ||
                        EDicionarioUnidades.volume_megametros_cubicos ||
                        EDicionarioUnidades.volume_gigametros_cubicos ||
                        EDicionarioUnidades.volume_terametros_cubicos ||
                        EDicionarioUnidades.volume_petametros_cubicos ||
                        EDicionarioUnidades.volume_exametros_cubicos ||
                        EDicionarioUnidades.volume_zettametros_cubicos ||
                        EDicionarioUnidades.volume_yottametros_cubicos ||
                        EDicionarioUnidades.volume_ronnametros_cubicos ||
                        EDicionarioUnidades.volume_quettametros_cubicos:
                        throw new UnkownUnitConversor(go, to);
                }
                break;
            case EDicionarioUnidades.computacionais_megabytes:
                switch (go) {
                    case EDicionarioUnidades.computacionais_bits:
                        value = value * 8 * 1000 ** 2;
                        break;
                    case EDicionarioUnidades.computacionais_bytes:
                        value = value * 1000 ** 2;
                        break;
                    case EDicionarioUnidades.computacionais_kilobytes:
                        value = value * 1000;
                        break;
                    case EDicionarioUnidades.computacionais_gigabytes:
                        value = value / 1000;
                        break;
                    case EDicionarioUnidades.computacionais_terabytes:
                        value = value / 1000 ** 2;
                        break;
                    case EDicionarioUnidades.computacionais_petabytes:
                        value = value / 1000 ** 3;
                        break;
                    case EDicionarioUnidades.computacionais_exabytes:
                        value = value / 1000 ** 4;
                        break;
                    case EDicionarioUnidades.computacionais_zettabytes:
                        value = value / 1000 ** 5;
                        break;
                    case EDicionarioUnidades.computacionais_yottabytes:
                        value = value / 1000 ** 6;
                        break;
                    case EDicionarioUnidades.computacionais_binario_bytes:
                        value = value * 1024 ** 2;
                        break;
                    case EDicionarioUnidades.computacionais_binario_kibibytes:
                        value = value * 1024;
                        break;
                    case EDicionarioUnidades.computacionais_binario_mebibytes:
                        value = value;
                        break;
                    case EDicionarioUnidades.computacionais_binario_gibibytes:
                        value = value / 1024;
                        break;
                    case EDicionarioUnidades.computacionais_binario_tebibytes:
                        value = value / 1024 ** 2;
                        break;
                    case EDicionarioUnidades.computacionais_binario_pebibytes:
                        value = value / 1024 ** 3;
                        break;
                    case EDicionarioUnidades.computacionais_binario_exbibytes:
                        value = value / 1024 ** 4;
                        break;
                    case EDicionarioUnidades.computacionais_binario_zebibytes:
                        value = value / 1024 ** 5;
                        break;
                    case EDicionarioUnidades.computacionais_binario_yobibytes:
                        value = value / 1024 ** 6;
                        break;
                    case EDicionarioUnidades.lineares_quectometros ||
                        EDicionarioUnidades.lineares_rontometros ||
                        EDicionarioUnidades.lineares_yoctometros ||
                        EDicionarioUnidades.lineares_zeptometros ||
                        EDicionarioUnidades.lineares_attometros ||
                        EDicionarioUnidades.lineares_femtometros ||
                        EDicionarioUnidades.lineares_picometros ||
                        EDicionarioUnidades.lineares_nanometros ||
                        EDicionarioUnidades.lineares_micrometros ||
                        EDicionarioUnidades.lineares_milimetros ||
                        EDicionarioUnidades.lineares_centimetros ||
                        EDicionarioUnidades.lineares_decimetros ||
                        EDicionarioUnidades.lineares_metros ||
                        EDicionarioUnidades.lineares_decametros ||
                        EDicionarioUnidades.lineares_hectometros ||
                        EDicionarioUnidades.lineares_kilometros ||
                        EDicionarioUnidades.lineares_megametros ||
                        EDicionarioUnidades.lineares_gigametros ||
                        EDicionarioUnidades.lineares_terametros ||
                        EDicionarioUnidades.lineares_petametros ||
                        EDicionarioUnidades.lineares_exametros ||
                        EDicionarioUnidades.lineares_zettametros ||
                        EDicionarioUnidades.lineares_yottametros ||
                        EDicionarioUnidades.lineares_ronnametros ||
                        EDicionarioUnidades.lineares_quettametros ||
                        EDicionarioUnidades.area_quectometros_quadrados ||
                        EDicionarioUnidades.area_rontometros_quadrados ||
                        EDicionarioUnidades.area_yoctometros_quadrados ||
                        EDicionarioUnidades.area_zeptometros_quadrados ||
                        EDicionarioUnidades.area_attometros_quadrados ||
                        EDicionarioUnidades.area_femtometros_quadrados ||
                        EDicionarioUnidades.area_picometros_quadrados ||
                        EDicionarioUnidades.area_nanometros_quadrados ||
                        EDicionarioUnidades.area_micrometros_quadrados ||
                        EDicionarioUnidades.area_milimetros_quadrados ||
                        EDicionarioUnidades.area_centimetros_quadrados ||
                        EDicionarioUnidades.area_decimetros_quadrados ||
                        EDicionarioUnidades.area_metros_quadrados ||
                        EDicionarioUnidades.area_decametros_quadrados ||
                        EDicionarioUnidades.area_hectometros_quadrados ||
                        EDicionarioUnidades.area_kilometros_quadrados ||
                        EDicionarioUnidades.area_megametros_quadrados ||
                        EDicionarioUnidades.area_gigametros_quadrados ||
                        EDicionarioUnidades.area_terametros_quadrados ||
                        EDicionarioUnidades.area_petametros_quadrados ||
                        EDicionarioUnidades.area_exametros_quadrados ||
                        EDicionarioUnidades.area_zettametros_quadrados ||
                        EDicionarioUnidades.area_yottametros_quadrados ||
                        EDicionarioUnidades.area_ronnametros_quadrados ||
                        EDicionarioUnidades.area_quettametros_quadrados ||
                        EDicionarioUnidades.volume_quectometros_cubicos ||
                        EDicionarioUnidades.volume_rontometros_cubicos ||
                        EDicionarioUnidades.volume_yoctometros_cubicos ||
                        EDicionarioUnidades.volume_zeptometros_cubicos ||
                        EDicionarioUnidades.volume_attometros_cubicos ||
                        EDicionarioUnidades.volume_femtometros_cubicos ||
                        EDicionarioUnidades.volume_picometros_cubicos ||
                        EDicionarioUnidades.volume_nanometros_cubicos ||
                        EDicionarioUnidades.volume_micrometros_cubicos ||
                        EDicionarioUnidades.volume_milimetros_cubicos ||
                        EDicionarioUnidades.volume_centimetros_cubicos ||
                        EDicionarioUnidades.volume_decimetros_cubicos ||
                        EDicionarioUnidades.volume_metros_cubicos ||
                        EDicionarioUnidades.volume_decametros_cubicos ||
                        EDicionarioUnidades.volume_hectometros_cubicos ||
                        EDicionarioUnidades.volume_kilometros_cubicos ||
                        EDicionarioUnidades.volume_megametros_cubicos ||
                        EDicionarioUnidades.volume_gigametros_cubicos ||
                        EDicionarioUnidades.volume_terametros_cubicos ||
                        EDicionarioUnidades.volume_petametros_cubicos ||
                        EDicionarioUnidades.volume_exametros_cubicos ||
                        EDicionarioUnidades.volume_zettametros_cubicos ||
                        EDicionarioUnidades.volume_yottametros_cubicos ||
                        EDicionarioUnidades.volume_ronnametros_cubicos ||
                        EDicionarioUnidades.volume_quettametros_cubicos:
                        throw new UnkownUnitConversor(go, to);
                }
                break;
            case EDicionarioUnidades.computacionais_gigabytes:
                switch (go) {
                    case EDicionarioUnidades.computacionais_bits:
                        value = value * 8 * 1000 ** 3;
                        break;
                    case EDicionarioUnidades.computacionais_bytes:
                        value = value * 1000 ** 3;
                        break;
                    case EDicionarioUnidades.computacionais_kilobytes:
                        value = value * 1000 ** 2;
                        break;
                    case EDicionarioUnidades.computacionais_megabytes:
                        value = value * 1000;
                        break;
                    case EDicionarioUnidades.computacionais_terabytes:
                        value = value / 1000;
                        break;
                    case EDicionarioUnidades.computacionais_petabytes:
                        value = value / 1000 ** 2;
                        break;
                    case EDicionarioUnidades.computacionais_exabytes:
                        value = value / 1000 ** 3;
                        break;
                    case EDicionarioUnidades.computacionais_zettabytes:
                        value = value / 1000 ** 4;
                        break;
                    case EDicionarioUnidades.computacionais_yottabytes:
                        value = value / 1000 ** 5;
                        break;
                    case EDicionarioUnidades.computacionais_binario_bytes:
                        value = value * 1024 ** 3;
                        break;
                    case EDicionarioUnidades.computacionais_binario_kibibytes:
                        value = value * 1024 ** 2;
                        break;
                    case EDicionarioUnidades.computacionais_binario_mebibytes:
                        value = value * 1024;
                        break;
                    case EDicionarioUnidades.computacionais_binario_gibibytes:
                        value = value;
                        break;
                    case EDicionarioUnidades.computacionais_binario_tebibytes:
                        value = value / 1024;
                        break;
                    case EDicionarioUnidades.computacionais_binario_pebibytes:
                        value = value / 1024 ** 2;
                        break;
                    case EDicionarioUnidades.computacionais_binario_exbibytes:
                        value = value / 1024 ** 3;
                        break;
                    case EDicionarioUnidades.computacionais_binario_zebibytes:
                        value = value / 1024 ** 4;
                        break;
                    case EDicionarioUnidades.computacionais_binario_yobibytes:
                        value = value / 1024 ** 5;
                        break;
                    case EDicionarioUnidades.lineares_quectometros ||
                        EDicionarioUnidades.lineares_rontometros ||
                        EDicionarioUnidades.lineares_yoctometros ||
                        EDicionarioUnidades.lineares_zeptometros ||
                        EDicionarioUnidades.lineares_attometros ||
                        EDicionarioUnidades.lineares_femtometros ||
                        EDicionarioUnidades.lineares_picometros ||
                        EDicionarioUnidades.lineares_nanometros ||
                        EDicionarioUnidades.lineares_micrometros ||
                        EDicionarioUnidades.lineares_milimetros ||
                        EDicionarioUnidades.lineares_centimetros ||
                        EDicionarioUnidades.lineares_decimetros ||
                        EDicionarioUnidades.lineares_metros ||
                        EDicionarioUnidades.lineares_decametros ||
                        EDicionarioUnidades.lineares_hectometros ||
                        EDicionarioUnidades.lineares_kilometros ||
                        EDicionarioUnidades.lineares_megametros ||
                        EDicionarioUnidades.lineares_gigametros ||
                        EDicionarioUnidades.lineares_terametros ||
                        EDicionarioUnidades.lineares_petametros ||
                        EDicionarioUnidades.lineares_exametros ||
                        EDicionarioUnidades.lineares_zettametros ||
                        EDicionarioUnidades.lineares_yottametros ||
                        EDicionarioUnidades.lineares_ronnametros ||
                        EDicionarioUnidades.lineares_quettametros ||
                        EDicionarioUnidades.area_quectometros_quadrados ||
                        EDicionarioUnidades.area_rontometros_quadrados ||
                        EDicionarioUnidades.area_yoctometros_quadrados ||
                        EDicionarioUnidades.area_zeptometros_quadrados ||
                        EDicionarioUnidades.area_attometros_quadrados ||
                        EDicionarioUnidades.area_femtometros_quadrados ||
                        EDicionarioUnidades.area_picometros_quadrados ||
                        EDicionarioUnidades.area_nanometros_quadrados ||
                        EDicionarioUnidades.area_micrometros_quadrados ||
                        EDicionarioUnidades.area_milimetros_quadrados ||
                        EDicionarioUnidades.area_centimetros_quadrados ||
                        EDicionarioUnidades.area_decimetros_quadrados ||
                        EDicionarioUnidades.area_metros_quadrados ||
                        EDicionarioUnidades.area_decametros_quadrados ||
                        EDicionarioUnidades.area_hectometros_quadrados ||
                        EDicionarioUnidades.area_kilometros_quadrados ||
                        EDicionarioUnidades.area_megametros_quadrados ||
                        EDicionarioUnidades.area_gigametros_quadrados ||
                        EDicionarioUnidades.area_terametros_quadrados ||
                        EDicionarioUnidades.area_petametros_quadrados ||
                        EDicionarioUnidades.area_exametros_quadrados ||
                        EDicionarioUnidades.area_zettametros_quadrados ||
                        EDicionarioUnidades.area_yottametros_quadrados ||
                        EDicionarioUnidades.area_ronnametros_quadrados ||
                        EDicionarioUnidades.area_quettametros_quadrados ||
                        EDicionarioUnidades.volume_quectometros_cubicos ||
                        EDicionarioUnidades.volume_rontometros_cubicos ||
                        EDicionarioUnidades.volume_yoctometros_cubicos ||
                        EDicionarioUnidades.volume_zeptometros_cubicos ||
                        EDicionarioUnidades.volume_attometros_cubicos ||
                        EDicionarioUnidades.volume_femtometros_cubicos ||
                        EDicionarioUnidades.volume_picometros_cubicos ||
                        EDicionarioUnidades.volume_nanometros_cubicos ||
                        EDicionarioUnidades.volume_micrometros_cubicos ||
                        EDicionarioUnidades.volume_milimetros_cubicos ||
                        EDicionarioUnidades.volume_centimetros_cubicos ||
                        EDicionarioUnidades.volume_decimetros_cubicos ||
                        EDicionarioUnidades.volume_metros_cubicos ||
                        EDicionarioUnidades.volume_decametros_cubicos ||
                        EDicionarioUnidades.volume_hectometros_cubicos ||
                        EDicionarioUnidades.volume_kilometros_cubicos ||
                        EDicionarioUnidades.volume_megametros_cubicos ||
                        EDicionarioUnidades.volume_gigametros_cubicos ||
                        EDicionarioUnidades.volume_terametros_cubicos ||
                        EDicionarioUnidades.volume_petametros_cubicos ||
                        EDicionarioUnidades.volume_exametros_cubicos ||
                        EDicionarioUnidades.volume_zettametros_cubicos ||
                        EDicionarioUnidades.volume_yottametros_cubicos ||
                        EDicionarioUnidades.volume_ronnametros_cubicos ||
                        EDicionarioUnidades.volume_quettametros_cubicos:
                        throw new UnkownUnitConversor(go, to);
                }
                break;
            case EDicionarioUnidades.computacionais_terabytes:
                switch (go) {
                    case EDicionarioUnidades.computacionais_bits:
                        value = value * 8 * 1000 ** 4;
                        break;
                    case EDicionarioUnidades.computacionais_bytes:
                        value = value * 1000 ** 4;
                        break;
                    case EDicionarioUnidades.computacionais_kilobytes:
                        value = value * 1000 ** 3;
                        break;
                    case EDicionarioUnidades.computacionais_megabytes:
                        value = value * 1000 ** 2;
                        break;
                    case EDicionarioUnidades.computacionais_gigabytes:
                        value = value * 1000;
                        break;
                    case EDicionarioUnidades.computacionais_petabytes:
                        value = value / 1000;
                        break;
                    case EDicionarioUnidades.computacionais_exabytes:
                        value = value / 1000 ** 2;
                        break;
                    case EDicionarioUnidades.computacionais_zettabytes:
                        value = value / 1000 ** 3;
                        break;
                    case EDicionarioUnidades.computacionais_yottabytes:
                        value = value / 1000 ** 4;
                        break;
                    case EDicionarioUnidades.computacionais_binario_bytes:
                        value = value * 1024 ** 4;
                        break;
                    case EDicionarioUnidades.computacionais_binario_kibibytes:
                        value = value * 1024 ** 3;
                        break;
                    case EDicionarioUnidades.computacionais_binario_mebibytes:
                        value = value * 1024 ** 2;
                        break;
                    case EDicionarioUnidades.computacionais_binario_gibibytes:
                        value = value * 1024;
                        break;
                    case EDicionarioUnidades.computacionais_binario_tebibytes:
                        value = value;
                        break;
                    case EDicionarioUnidades.computacionais_binario_pebibytes:
                        value = value / 1024;
                        break;
                    case EDicionarioUnidades.computacionais_binario_exbibytes:
                        value = value / 1024 ** 2;
                        break;
                    case EDicionarioUnidades.computacionais_binario_zebibytes:
                        value = value / 1024 ** 3;
                        break;
                    case EDicionarioUnidades.computacionais_binario_yobibytes:
                        value = value / 1024 ** 4;
                        break;
                    case EDicionarioUnidades.lineares_quectometros ||
                        EDicionarioUnidades.lineares_rontometros ||
                        EDicionarioUnidades.lineares_yoctometros ||
                        EDicionarioUnidades.lineares_zeptometros ||
                        EDicionarioUnidades.lineares_attometros ||
                        EDicionarioUnidades.lineares_femtometros ||
                        EDicionarioUnidades.lineares_picometros ||
                        EDicionarioUnidades.lineares_nanometros ||
                        EDicionarioUnidades.lineares_micrometros ||
                        EDicionarioUnidades.lineares_milimetros ||
                        EDicionarioUnidades.lineares_centimetros ||
                        EDicionarioUnidades.lineares_decimetros ||
                        EDicionarioUnidades.lineares_metros ||
                        EDicionarioUnidades.lineares_decametros ||
                        EDicionarioUnidades.lineares_hectometros ||
                        EDicionarioUnidades.lineares_kilometros ||
                        EDicionarioUnidades.lineares_megametros ||
                        EDicionarioUnidades.lineares_gigametros ||
                        EDicionarioUnidades.lineares_terametros ||
                        EDicionarioUnidades.lineares_petametros ||
                        EDicionarioUnidades.lineares_exametros ||
                        EDicionarioUnidades.lineares_zettametros ||
                        EDicionarioUnidades.lineares_yottametros ||
                        EDicionarioUnidades.lineares_ronnametros ||
                        EDicionarioUnidades.lineares_quettametros ||
                        EDicionarioUnidades.area_quectometros_quadrados ||
                        EDicionarioUnidades.area_rontometros_quadrados ||
                        EDicionarioUnidades.area_yoctometros_quadrados ||
                        EDicionarioUnidades.area_zeptometros_quadrados ||
                        EDicionarioUnidades.area_attometros_quadrados ||
                        EDicionarioUnidades.area_femtometros_quadrados ||
                        EDicionarioUnidades.area_picometros_quadrados ||
                        EDicionarioUnidades.area_nanometros_quadrados ||
                        EDicionarioUnidades.area_micrometros_quadrados ||
                        EDicionarioUnidades.area_milimetros_quadrados ||
                        EDicionarioUnidades.area_centimetros_quadrados ||
                        EDicionarioUnidades.area_decimetros_quadrados ||
                        EDicionarioUnidades.area_metros_quadrados ||
                        EDicionarioUnidades.area_decametros_quadrados ||
                        EDicionarioUnidades.area_hectometros_quadrados ||
                        EDicionarioUnidades.area_kilometros_quadrados ||
                        EDicionarioUnidades.area_megametros_quadrados ||
                        EDicionarioUnidades.area_gigametros_quadrados ||
                        EDicionarioUnidades.area_terametros_quadrados ||
                        EDicionarioUnidades.area_petametros_quadrados ||
                        EDicionarioUnidades.area_exametros_quadrados ||
                        EDicionarioUnidades.area_zettametros_quadrados ||
                        EDicionarioUnidades.area_yottametros_quadrados ||
                        EDicionarioUnidades.area_ronnametros_quadrados ||
                        EDicionarioUnidades.area_quettametros_quadrados ||
                        EDicionarioUnidades.volume_quectometros_cubicos ||
                        EDicionarioUnidades.volume_rontometros_cubicos ||
                        EDicionarioUnidades.volume_yoctometros_cubicos ||
                        EDicionarioUnidades.volume_zeptometros_cubicos ||
                        EDicionarioUnidades.volume_attometros_cubicos ||
                        EDicionarioUnidades.volume_femtometros_cubicos ||
                        EDicionarioUnidades.volume_picometros_cubicos ||
                        EDicionarioUnidades.volume_nanometros_cubicos ||
                        EDicionarioUnidades.volume_micrometros_cubicos ||
                        EDicionarioUnidades.volume_milimetros_cubicos ||
                        EDicionarioUnidades.volume_centimetros_cubicos ||
                        EDicionarioUnidades.volume_decimetros_cubicos ||
                        EDicionarioUnidades.volume_metros_cubicos ||
                        EDicionarioUnidades.volume_decametros_cubicos ||
                        EDicionarioUnidades.volume_hectometros_cubicos ||
                        EDicionarioUnidades.volume_kilometros_cubicos ||
                        EDicionarioUnidades.volume_megametros_cubicos ||
                        EDicionarioUnidades.volume_gigametros_cubicos ||
                        EDicionarioUnidades.volume_terametros_cubicos ||
                        EDicionarioUnidades.volume_petametros_cubicos ||
                        EDicionarioUnidades.volume_exametros_cubicos ||
                        EDicionarioUnidades.volume_zettametros_cubicos ||
                        EDicionarioUnidades.volume_yottametros_cubicos ||
                        EDicionarioUnidades.volume_ronnametros_cubicos ||
                        EDicionarioUnidades.volume_quettametros_cubicos:
                        throw new UnkownUnitConversor(go, to);
                }
                break;
            case EDicionarioUnidades.computacionais_petabytes:
                switch (go) {
                    case EDicionarioUnidades.computacionais_bits:
                        value = value * 8 * 1000 ** 5;
                        break;
                    case EDicionarioUnidades.computacionais_bytes:
                        value = value * 1000 ** 5;
                        break;
                    case EDicionarioUnidades.computacionais_kilobytes:
                        value = value * 1000 ** 4;
                        break;
                    case EDicionarioUnidades.computacionais_megabytes:
                        value = value * 1000 ** 3;
                        break;
                    case EDicionarioUnidades.computacionais_gigabytes:
                        value = value * 1000 ** 2;
                        break;
                    case EDicionarioUnidades.computacionais_terabytes:
                        value = value * 1000;
                        break;
                    case EDicionarioUnidades.computacionais_exabytes:
                        value = value / 1000;
                        break;
                    case EDicionarioUnidades.computacionais_zettabytes:
                        value = value / 1000 ** 2;
                        break;
                    case EDicionarioUnidades.computacionais_yottabytes:
                        value = value / 1000 ** 3;
                        break;
                    case EDicionarioUnidades.computacionais_binario_bytes:
                        value = value * 1024 ** 5;
                        break;
                    case EDicionarioUnidades.computacionais_binario_kibibytes:
                        value = value * 1024 ** 4;
                        break;
                    case EDicionarioUnidades.computacionais_binario_mebibytes:
                        value = value * 1024 ** 3;
                        break;
                    case EDicionarioUnidades.computacionais_binario_gibibytes:
                        value = value * 1024 ** 2;
                        break;
                    case EDicionarioUnidades.computacionais_binario_tebibytes:
                        value = value * 1024;
                        break;
                    case EDicionarioUnidades.computacionais_binario_pebibytes:
                        value = value;
                        break;
                    case EDicionarioUnidades.computacionais_binario_exbibytes:
                        value = value / 1024;
                        break;
                    case EDicionarioUnidades.computacionais_binario_zebibytes:
                        value = value / 1024 ** 2;
                        break;
                    case EDicionarioUnidades.computacionais_binario_yobibytes:
                        value = value / 1024 ** 3;
                        break;
                    case EDicionarioUnidades.lineares_quectometros ||
                        EDicionarioUnidades.lineares_rontometros ||
                        EDicionarioUnidades.lineares_yoctometros ||
                        EDicionarioUnidades.lineares_zeptometros ||
                        EDicionarioUnidades.lineares_attometros ||
                        EDicionarioUnidades.lineares_femtometros ||
                        EDicionarioUnidades.lineares_picometros ||
                        EDicionarioUnidades.lineares_nanometros ||
                        EDicionarioUnidades.lineares_micrometros ||
                        EDicionarioUnidades.lineares_milimetros ||
                        EDicionarioUnidades.lineares_centimetros ||
                        EDicionarioUnidades.lineares_decimetros ||
                        EDicionarioUnidades.lineares_metros ||
                        EDicionarioUnidades.lineares_decametros ||
                        EDicionarioUnidades.lineares_hectometros ||
                        EDicionarioUnidades.lineares_kilometros ||
                        EDicionarioUnidades.lineares_megametros ||
                        EDicionarioUnidades.lineares_gigametros ||
                        EDicionarioUnidades.lineares_terametros ||
                        EDicionarioUnidades.lineares_petametros ||
                        EDicionarioUnidades.lineares_exametros ||
                        EDicionarioUnidades.lineares_zettametros ||
                        EDicionarioUnidades.lineares_yottametros ||
                        EDicionarioUnidades.lineares_ronnametros ||
                        EDicionarioUnidades.lineares_quettametros ||
                        EDicionarioUnidades.area_quectometros_quadrados ||
                        EDicionarioUnidades.area_rontometros_quadrados ||
                        EDicionarioUnidades.area_yoctometros_quadrados ||
                        EDicionarioUnidades.area_zeptometros_quadrados ||
                        EDicionarioUnidades.area_attometros_quadrados ||
                        EDicionarioUnidades.area_femtometros_quadrados ||
                        EDicionarioUnidades.area_picometros_quadrados ||
                        EDicionarioUnidades.area_nanometros_quadrados ||
                        EDicionarioUnidades.area_micrometros_quadrados ||
                        EDicionarioUnidades.area_milimetros_quadrados ||
                        EDicionarioUnidades.area_centimetros_quadrados ||
                        EDicionarioUnidades.area_decimetros_quadrados ||
                        EDicionarioUnidades.area_metros_quadrados ||
                        EDicionarioUnidades.area_decametros_quadrados ||
                        EDicionarioUnidades.area_hectometros_quadrados ||
                        EDicionarioUnidades.area_kilometros_quadrados ||
                        EDicionarioUnidades.area_megametros_quadrados ||
                        EDicionarioUnidades.area_gigametros_quadrados ||
                        EDicionarioUnidades.area_terametros_quadrados ||
                        EDicionarioUnidades.area_petametros_quadrados ||
                        EDicionarioUnidades.area_exametros_quadrados ||
                        EDicionarioUnidades.area_zettametros_quadrados ||
                        EDicionarioUnidades.area_yottametros_quadrados ||
                        EDicionarioUnidades.area_ronnametros_quadrados ||
                        EDicionarioUnidades.area_quettametros_quadrados ||
                        EDicionarioUnidades.volume_quectometros_cubicos ||
                        EDicionarioUnidades.volume_rontometros_cubicos ||
                        EDicionarioUnidades.volume_yoctometros_cubicos ||
                        EDicionarioUnidades.volume_zeptometros_cubicos ||
                        EDicionarioUnidades.volume_attometros_cubicos ||
                        EDicionarioUnidades.volume_femtometros_cubicos ||
                        EDicionarioUnidades.volume_picometros_cubicos ||
                        EDicionarioUnidades.volume_nanometros_cubicos ||
                        EDicionarioUnidades.volume_micrometros_cubicos ||
                        EDicionarioUnidades.volume_milimetros_cubicos ||
                        EDicionarioUnidades.volume_centimetros_cubicos ||
                        EDicionarioUnidades.volume_decimetros_cubicos ||
                        EDicionarioUnidades.volume_metros_cubicos ||
                        EDicionarioUnidades.volume_decametros_cubicos ||
                        EDicionarioUnidades.volume_hectometros_cubicos ||
                        EDicionarioUnidades.volume_kilometros_cubicos ||
                        EDicionarioUnidades.volume_megametros_cubicos ||
                        EDicionarioUnidades.volume_gigametros_cubicos ||
                        EDicionarioUnidades.volume_terametros_cubicos ||
                        EDicionarioUnidades.volume_petametros_cubicos ||
                        EDicionarioUnidades.volume_exametros_cubicos ||
                        EDicionarioUnidades.volume_zettametros_cubicos ||
                        EDicionarioUnidades.volume_yottametros_cubicos ||
                        EDicionarioUnidades.volume_ronnametros_cubicos ||
                        EDicionarioUnidades.volume_quettametros_cubicos:
                        throw new UnkownUnitConversor(go, to);
                }
                break;
            case EDicionarioUnidades.computacionais_exabytes:
                switch (go) {
                    case EDicionarioUnidades.computacionais_bits:
                        value = value * 8 * 1000 ** 6;
                        break;
                    case EDicionarioUnidades.computacionais_bytes:
                        value = value * 1000 ** 6;
                        break;
                    case EDicionarioUnidades.computacionais_kilobytes:
                        value = value * 1000 ** 5;
                        break;
                    case EDicionarioUnidades.computacionais_megabytes:
                        value = value * 1000 ** 4;
                        break;
                    case EDicionarioUnidades.computacionais_gigabytes:
                        value = value * 1000 ** 3;
                        break;
                    case EDicionarioUnidades.computacionais_terabytes:
                        value = value * 1000 ** 2;
                        break;
                    case EDicionarioUnidades.computacionais_petabytes:
                        value = value * 1000;
                        break;
                    case EDicionarioUnidades.computacionais_zettabytes:
                        value = value / 1000;
                        break;
                    case EDicionarioUnidades.computacionais_yottabytes:
                        value = value / 1000 ** 2;
                        break;
                    case EDicionarioUnidades.computacionais_binario_bytes:
                        value = value * 1024 ** 6;
                        break;
                    case EDicionarioUnidades.computacionais_binario_kibibytes:
                        value = value * 1024 ** 5;
                        break;
                    case EDicionarioUnidades.computacionais_binario_mebibytes:
                        value = value * 1024 ** 4;
                        break;
                    case EDicionarioUnidades.computacionais_binario_gibibytes:
                        value = value * 1024 ** 3;
                        break;
                    case EDicionarioUnidades.computacionais_binario_tebibytes:
                        value = value * 1024 ** 2;
                        break;
                    case EDicionarioUnidades.computacionais_binario_pebibytes:
                        value = value * 1024;
                        break;
                    case EDicionarioUnidades.computacionais_binario_exbibytes:
                        value = value;
                        break;
                    case EDicionarioUnidades.computacionais_binario_zebibytes:
                        value = value / 1024;
                        break;
                    case EDicionarioUnidades.computacionais_binario_yobibytes:
                        value = value / 1024 ** 2;
                        break;
                    case EDicionarioUnidades.lineares_quectometros ||
                        EDicionarioUnidades.lineares_rontometros ||
                        EDicionarioUnidades.lineares_yoctometros ||
                        EDicionarioUnidades.lineares_zeptometros ||
                        EDicionarioUnidades.lineares_attometros ||
                        EDicionarioUnidades.lineares_femtometros ||
                        EDicionarioUnidades.lineares_picometros ||
                        EDicionarioUnidades.lineares_nanometros ||
                        EDicionarioUnidades.lineares_micrometros ||
                        EDicionarioUnidades.lineares_milimetros ||
                        EDicionarioUnidades.lineares_centimetros ||
                        EDicionarioUnidades.lineares_decimetros ||
                        EDicionarioUnidades.lineares_metros ||
                        EDicionarioUnidades.lineares_decametros ||
                        EDicionarioUnidades.lineares_hectometros ||
                        EDicionarioUnidades.lineares_kilometros ||
                        EDicionarioUnidades.lineares_megametros ||
                        EDicionarioUnidades.lineares_gigametros ||
                        EDicionarioUnidades.lineares_terametros ||
                        EDicionarioUnidades.lineares_petametros ||
                        EDicionarioUnidades.lineares_exametros ||
                        EDicionarioUnidades.lineares_zettametros ||
                        EDicionarioUnidades.lineares_yottametros ||
                        EDicionarioUnidades.lineares_ronnametros ||
                        EDicionarioUnidades.lineares_quettametros ||
                        EDicionarioUnidades.area_quectometros_quadrados ||
                        EDicionarioUnidades.area_rontometros_quadrados ||
                        EDicionarioUnidades.area_yoctometros_quadrados ||
                        EDicionarioUnidades.area_zeptometros_quadrados ||
                        EDicionarioUnidades.area_attometros_quadrados ||
                        EDicionarioUnidades.area_femtometros_quadrados ||
                        EDicionarioUnidades.area_picometros_quadrados ||
                        EDicionarioUnidades.area_nanometros_quadrados ||
                        EDicionarioUnidades.area_micrometros_quadrados ||
                        EDicionarioUnidades.area_milimetros_quadrados ||
                        EDicionarioUnidades.area_centimetros_quadrados ||
                        EDicionarioUnidades.area_decimetros_quadrados ||
                        EDicionarioUnidades.area_metros_quadrados ||
                        EDicionarioUnidades.area_decametros_quadrados ||
                        EDicionarioUnidades.area_hectometros_quadrados ||
                        EDicionarioUnidades.area_kilometros_quadrados ||
                        EDicionarioUnidades.area_megametros_quadrados ||
                        EDicionarioUnidades.area_gigametros_quadrados ||
                        EDicionarioUnidades.area_terametros_quadrados ||
                        EDicionarioUnidades.area_petametros_quadrados ||
                        EDicionarioUnidades.area_exametros_quadrados ||
                        EDicionarioUnidades.area_zettametros_quadrados ||
                        EDicionarioUnidades.area_yottametros_quadrados ||
                        EDicionarioUnidades.area_ronnametros_quadrados ||
                        EDicionarioUnidades.area_quettametros_quadrados ||
                        EDicionarioUnidades.volume_quectometros_cubicos ||
                        EDicionarioUnidades.volume_rontometros_cubicos ||
                        EDicionarioUnidades.volume_yoctometros_cubicos ||
                        EDicionarioUnidades.volume_zeptometros_cubicos ||
                        EDicionarioUnidades.volume_attometros_cubicos ||
                        EDicionarioUnidades.volume_femtometros_cubicos ||
                        EDicionarioUnidades.volume_picometros_cubicos ||
                        EDicionarioUnidades.volume_nanometros_cubicos ||
                        EDicionarioUnidades.volume_micrometros_cubicos ||
                        EDicionarioUnidades.volume_milimetros_cubicos ||
                        EDicionarioUnidades.volume_centimetros_cubicos ||
                        EDicionarioUnidades.volume_decimetros_cubicos ||
                        EDicionarioUnidades.volume_metros_cubicos ||
                        EDicionarioUnidades.volume_decametros_cubicos ||
                        EDicionarioUnidades.volume_hectometros_cubicos ||
                        EDicionarioUnidades.volume_kilometros_cubicos ||
                        EDicionarioUnidades.volume_megametros_cubicos ||
                        EDicionarioUnidades.volume_gigametros_cubicos ||
                        EDicionarioUnidades.volume_terametros_cubicos ||
                        EDicionarioUnidades.volume_petametros_cubicos ||
                        EDicionarioUnidades.volume_exametros_cubicos ||
                        EDicionarioUnidades.volume_zettametros_cubicos ||
                        EDicionarioUnidades.volume_yottametros_cubicos ||
                        EDicionarioUnidades.volume_ronnametros_cubicos ||
                        EDicionarioUnidades.volume_quettametros_cubicos:
                        throw new UnkownUnitConversor(go, to);
                }
                break;
            case EDicionarioUnidades.computacionais_zettabytes:
                switch (go) {
                    case EDicionarioUnidades.computacionais_bits:
                        value = value * 8 * 1000 ** 7;
                        break;
                    case EDicionarioUnidades.computacionais_bytes:
                        value = value * 1000 ** 7;
                        break;
                    case EDicionarioUnidades.computacionais_kilobytes:
                        value = value * 1000 ** 6;
                        break;
                    case EDicionarioUnidades.computacionais_megabytes:
                        value = value * 1000 ** 5;
                        break;
                    case EDicionarioUnidades.computacionais_gigabytes:
                        value = value * 1000 ** 4;
                        break;
                    case EDicionarioUnidades.computacionais_terabytes:
                        value = value * 1000 ** 3;
                        break;
                    case EDicionarioUnidades.computacionais_petabytes:
                        value = value * 1000 ** 2;
                        break;
                    case EDicionarioUnidades.computacionais_exabytes:
                        value = value * 1000;
                        break;
                    case EDicionarioUnidades.computacionais_yottabytes:
                        value = value / 1000;
                        break;
                    case EDicionarioUnidades.computacionais_binario_bytes:
                        value = value * 1024 ** 7;
                        break;
                    case EDicionarioUnidades.computacionais_binario_kibibytes:
                        value = value * 1024 ** 6;
                        break;
                    case EDicionarioUnidades.computacionais_binario_mebibytes:
                        value = value * 1024 ** 5;
                        break;
                    case EDicionarioUnidades.computacionais_binario_gibibytes:
                        value = value * 1024 ** 4;
                        break;
                    case EDicionarioUnidades.computacionais_binario_tebibytes:
                        value = value * 1024 ** 3;
                        break;
                    case EDicionarioUnidades.computacionais_binario_pebibytes:
                        value = value * 1024 ** 2;
                        break;
                    case EDicionarioUnidades.computacionais_binario_exbibytes:
                        value = value * 1024;
                        break;
                    case EDicionarioUnidades.computacionais_binario_zebibytes:
                        value = value;
                        break;
                    case EDicionarioUnidades.computacionais_binario_yobibytes:
                        value = value / 1024;
                        break;
                    case EDicionarioUnidades.lineares_quectometros ||
                        EDicionarioUnidades.lineares_rontometros ||
                        EDicionarioUnidades.lineares_yoctometros ||
                        EDicionarioUnidades.lineares_zeptometros ||
                        EDicionarioUnidades.lineares_attometros ||
                        EDicionarioUnidades.lineares_femtometros ||
                        EDicionarioUnidades.lineares_picometros ||
                        EDicionarioUnidades.lineares_nanometros ||
                        EDicionarioUnidades.lineares_micrometros ||
                        EDicionarioUnidades.lineares_milimetros ||
                        EDicionarioUnidades.lineares_centimetros ||
                        EDicionarioUnidades.lineares_decimetros ||
                        EDicionarioUnidades.lineares_metros ||
                        EDicionarioUnidades.lineares_decametros ||
                        EDicionarioUnidades.lineares_hectometros ||
                        EDicionarioUnidades.lineares_kilometros ||
                        EDicionarioUnidades.lineares_megametros ||
                        EDicionarioUnidades.lineares_gigametros ||
                        EDicionarioUnidades.lineares_terametros ||
                        EDicionarioUnidades.lineares_petametros ||
                        EDicionarioUnidades.lineares_exametros ||
                        EDicionarioUnidades.lineares_zettametros ||
                        EDicionarioUnidades.lineares_yottametros ||
                        EDicionarioUnidades.lineares_ronnametros ||
                        EDicionarioUnidades.lineares_quettametros ||
                        EDicionarioUnidades.area_quectometros_quadrados ||
                        EDicionarioUnidades.area_rontometros_quadrados ||
                        EDicionarioUnidades.area_yoctometros_quadrados ||
                        EDicionarioUnidades.area_zeptometros_quadrados ||
                        EDicionarioUnidades.area_attometros_quadrados ||
                        EDicionarioUnidades.area_femtometros_quadrados ||
                        EDicionarioUnidades.area_picometros_quadrados ||
                        EDicionarioUnidades.area_nanometros_quadrados ||
                        EDicionarioUnidades.area_micrometros_quadrados ||
                        EDicionarioUnidades.area_milimetros_quadrados ||
                        EDicionarioUnidades.area_centimetros_quadrados ||
                        EDicionarioUnidades.area_decimetros_quadrados ||
                        EDicionarioUnidades.area_metros_quadrados ||
                        EDicionarioUnidades.area_decametros_quadrados ||
                        EDicionarioUnidades.area_hectometros_quadrados ||
                        EDicionarioUnidades.area_kilometros_quadrados ||
                        EDicionarioUnidades.area_megametros_quadrados ||
                        EDicionarioUnidades.area_gigametros_quadrados ||
                        EDicionarioUnidades.area_terametros_quadrados ||
                        EDicionarioUnidades.area_petametros_quadrados ||
                        EDicionarioUnidades.area_exametros_quadrados ||
                        EDicionarioUnidades.area_zettametros_quadrados ||
                        EDicionarioUnidades.area_yottametros_quadrados ||
                        EDicionarioUnidades.area_ronnametros_quadrados ||
                        EDicionarioUnidades.area_quettametros_quadrados ||
                        EDicionarioUnidades.volume_quectometros_cubicos ||
                        EDicionarioUnidades.volume_rontometros_cubicos ||
                        EDicionarioUnidades.volume_yoctometros_cubicos ||
                        EDicionarioUnidades.volume_zeptometros_cubicos ||
                        EDicionarioUnidades.volume_attometros_cubicos ||
                        EDicionarioUnidades.volume_femtometros_cubicos ||
                        EDicionarioUnidades.volume_picometros_cubicos ||
                        EDicionarioUnidades.volume_nanometros_cubicos ||
                        EDicionarioUnidades.volume_micrometros_cubicos ||
                        EDicionarioUnidades.volume_milimetros_cubicos ||
                        EDicionarioUnidades.volume_centimetros_cubicos ||
                        EDicionarioUnidades.volume_decimetros_cubicos ||
                        EDicionarioUnidades.volume_metros_cubicos ||
                        EDicionarioUnidades.volume_decametros_cubicos ||
                        EDicionarioUnidades.volume_hectometros_cubicos ||
                        EDicionarioUnidades.volume_kilometros_cubicos ||
                        EDicionarioUnidades.volume_megametros_cubicos ||
                        EDicionarioUnidades.volume_gigametros_cubicos ||
                        EDicionarioUnidades.volume_terametros_cubicos ||
                        EDicionarioUnidades.volume_petametros_cubicos ||
                        EDicionarioUnidades.volume_exametros_cubicos ||
                        EDicionarioUnidades.volume_zettametros_cubicos ||
                        EDicionarioUnidades.volume_yottametros_cubicos ||
                        EDicionarioUnidades.volume_ronnametros_cubicos ||
                        EDicionarioUnidades.volume_quettametros_cubicos:
                        throw new UnkownUnitConversor(go, to);
                }
                break;
            case EDicionarioUnidades.computacionais_yottabytes:
                switch (go) {
                    case EDicionarioUnidades.computacionais_bits:
                        value = value * 8 * 1000 ** 8;
                        break;
                    case EDicionarioUnidades.computacionais_bytes:
                        value = value * 1000 ** 8;
                        break;
                    case EDicionarioUnidades.computacionais_kilobytes:
                        value = value * 1000 ** 7;
                        break;
                    case EDicionarioUnidades.computacionais_megabytes:
                        value = value * 1000 ** 6;
                        break;
                    case EDicionarioUnidades.computacionais_gigabytes:
                        value = value * 1000 ** 5;
                        break;
                    case EDicionarioUnidades.computacionais_terabytes:
                        value = value * 1000 ** 4;
                        break;
                    case EDicionarioUnidades.computacionais_petabytes:
                        value = value * 1000 ** 3;
                        break;
                    case EDicionarioUnidades.computacionais_exabytes:
                        value = value * 1000 ** 2;
                        break;
                    case EDicionarioUnidades.computacionais_zettabytes:
                        value = value * 1000;
                        break;
                    case EDicionarioUnidades.computacionais_binario_bytes:
                        value = value * 1024 ** 8;
                        break;
                    case EDicionarioUnidades.computacionais_binario_kibibytes:
                        value = value * 1024 ** 7;
                        break;
                    case EDicionarioUnidades.computacionais_binario_mebibytes:
                        value = value * 1024 ** 6;
                        break;
                    case EDicionarioUnidades.computacionais_binario_gibibytes:
                        value = value * 1024 ** 5;
                        break;
                    case EDicionarioUnidades.computacionais_binario_tebibytes:
                        value = value * 1024 ** 4;
                        break;
                    case EDicionarioUnidades.computacionais_binario_pebibytes:
                        value = value * 1024 ** 3;
                        break;
                    case EDicionarioUnidades.computacionais_binario_exbibytes:
                        value = value * 1024 ** 2;
                        break;
                    case EDicionarioUnidades.computacionais_binario_zebibytes:
                        value = value * 1024;
                        break;
                    case EDicionarioUnidades.computacionais_binario_yobibytes:
                        value = value;
                        break;
                    case EDicionarioUnidades.lineares_quectometros ||
                        EDicionarioUnidades.lineares_rontometros ||
                        EDicionarioUnidades.lineares_yoctometros ||
                        EDicionarioUnidades.lineares_zeptometros ||
                        EDicionarioUnidades.lineares_attometros ||
                        EDicionarioUnidades.lineares_femtometros ||
                        EDicionarioUnidades.lineares_picometros ||
                        EDicionarioUnidades.lineares_nanometros ||
                        EDicionarioUnidades.lineares_micrometros ||
                        EDicionarioUnidades.lineares_milimetros ||
                        EDicionarioUnidades.lineares_centimetros ||
                        EDicionarioUnidades.lineares_decimetros ||
                        EDicionarioUnidades.lineares_metros ||
                        EDicionarioUnidades.lineares_decametros ||
                        EDicionarioUnidades.lineares_hectometros ||
                        EDicionarioUnidades.lineares_kilometros ||
                        EDicionarioUnidades.lineares_megametros ||
                        EDicionarioUnidades.lineares_gigametros ||
                        EDicionarioUnidades.lineares_terametros ||
                        EDicionarioUnidades.lineares_petametros ||
                        EDicionarioUnidades.lineares_exametros ||
                        EDicionarioUnidades.lineares_zettametros ||
                        EDicionarioUnidades.lineares_yottametros ||
                        EDicionarioUnidades.lineares_ronnametros ||
                        EDicionarioUnidades.lineares_quettametros ||
                        EDicionarioUnidades.area_quectometros_quadrados ||
                        EDicionarioUnidades.area_rontometros_quadrados ||
                        EDicionarioUnidades.area_yoctometros_quadrados ||
                        EDicionarioUnidades.area_zeptometros_quadrados ||
                        EDicionarioUnidades.area_attometros_quadrados ||
                        EDicionarioUnidades.area_femtometros_quadrados ||
                        EDicionarioUnidades.area_picometros_quadrados ||
                        EDicionarioUnidades.area_nanometros_quadrados ||
                        EDicionarioUnidades.area_micrometros_quadrados ||
                        EDicionarioUnidades.area_milimetros_quadrados ||
                        EDicionarioUnidades.area_centimetros_quadrados ||
                        EDicionarioUnidades.area_decimetros_quadrados ||
                        EDicionarioUnidades.area_metros_quadrados ||
                        EDicionarioUnidades.area_decametros_quadrados ||
                        EDicionarioUnidades.area_hectometros_quadrados ||
                        EDicionarioUnidades.area_kilometros_quadrados ||
                        EDicionarioUnidades.area_megametros_quadrados ||
                        EDicionarioUnidades.area_gigametros_quadrados ||
                        EDicionarioUnidades.area_terametros_quadrados ||
                        EDicionarioUnidades.area_petametros_quadrados ||
                        EDicionarioUnidades.area_exametros_quadrados ||
                        EDicionarioUnidades.area_zettametros_quadrados ||
                        EDicionarioUnidades.area_yottametros_quadrados ||
                        EDicionarioUnidades.area_ronnametros_quadrados ||
                        EDicionarioUnidades.area_quettametros_quadrados ||
                        EDicionarioUnidades.volume_quectometros_cubicos ||
                        EDicionarioUnidades.volume_rontometros_cubicos ||
                        EDicionarioUnidades.volume_yoctometros_cubicos ||
                        EDicionarioUnidades.volume_zeptometros_cubicos ||
                        EDicionarioUnidades.volume_attometros_cubicos ||
                        EDicionarioUnidades.volume_femtometros_cubicos ||
                        EDicionarioUnidades.volume_picometros_cubicos ||
                        EDicionarioUnidades.volume_nanometros_cubicos ||
                        EDicionarioUnidades.volume_micrometros_cubicos ||
                        EDicionarioUnidades.volume_milimetros_cubicos ||
                        EDicionarioUnidades.volume_centimetros_cubicos ||
                        EDicionarioUnidades.volume_decimetros_cubicos ||
                        EDicionarioUnidades.volume_metros_cubicos ||
                        EDicionarioUnidades.volume_decametros_cubicos ||
                        EDicionarioUnidades.volume_hectometros_cubicos ||
                        EDicionarioUnidades.volume_kilometros_cubicos ||
                        EDicionarioUnidades.volume_megametros_cubicos ||
                        EDicionarioUnidades.volume_gigametros_cubicos ||
                        EDicionarioUnidades.volume_terametros_cubicos ||
                        EDicionarioUnidades.volume_petametros_cubicos ||
                        EDicionarioUnidades.volume_exametros_cubicos ||
                        EDicionarioUnidades.volume_zettametros_cubicos ||
                        EDicionarioUnidades.volume_yottametros_cubicos ||
                        EDicionarioUnidades.volume_ronnametros_cubicos ||
                        EDicionarioUnidades.volume_quettametros_cubicos:
                        throw new UnkownUnitConversor(go, to);
                }
                break;
        }
    }
}
exports.Conversores = Conversores;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udmVyc29yZXMuY2xhc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9Db252ZXJzb3Jlcy5jbGFzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxJQUFLLG1CQWdHSjtBQWhHRCxXQUFLLG1CQUFtQjtJQUV0QixvREFBNkIsQ0FBQTtJQUM3QixxREFBOEIsQ0FBQTtJQUM5Qix5REFBa0MsQ0FBQTtJQUNsQyx5REFBa0MsQ0FBQTtJQUNsQyx5REFBa0MsQ0FBQTtJQUNsQyx5REFBa0MsQ0FBQTtJQUNsQyx5REFBa0MsQ0FBQTtJQUNsQyx3REFBaUMsQ0FBQTtJQUNqQywwREFBbUMsQ0FBQTtJQUNuQywwREFBbUMsQ0FBQTtJQUNuQyw2REFBc0MsQ0FBQTtJQUN0QyxpRUFBMEMsQ0FBQTtJQUMxQyxpRUFBMEMsQ0FBQTtJQUMxQyxpRUFBMEMsQ0FBQTtJQUMxQyxpRUFBMEMsQ0FBQTtJQUMxQyxpRUFBMEMsQ0FBQTtJQUMxQyxpRUFBMEMsQ0FBQTtJQUMxQyxpRUFBMEMsQ0FBQTtJQUMxQyxpRUFBMEMsQ0FBQTtJQUMxQyxzREFBK0IsQ0FBQTtJQUMvQixxREFBOEIsQ0FBQTtJQUM5QixxREFBOEIsQ0FBQTtJQUM5QixxREFBOEIsQ0FBQTtJQUM5QixvREFBNkIsQ0FBQTtJQUM3QixxREFBOEIsQ0FBQTtJQUM5QixvREFBNkIsQ0FBQTtJQUM3QixvREFBNkIsQ0FBQTtJQUM3QixxREFBOEIsQ0FBQTtJQUM5QixvREFBNkIsQ0FBQTtJQUM3QixxREFBOEIsQ0FBQTtJQUM5QixvREFBNkIsQ0FBQTtJQUM3QixnREFBeUIsQ0FBQTtJQUN6QixvREFBNkIsQ0FBQTtJQUM3QixxREFBOEIsQ0FBQTtJQUM5QixvREFBNkIsQ0FBQTtJQUM3QixvREFBNkIsQ0FBQTtJQUM3QixvREFBNkIsQ0FBQTtJQUM3QixvREFBNkIsQ0FBQTtJQUM3QixvREFBNkIsQ0FBQTtJQUM3QixtREFBNEIsQ0FBQTtJQUM1QixxREFBOEIsQ0FBQTtJQUM5QixxREFBOEIsQ0FBQTtJQUM5QixxREFBOEIsQ0FBQTtJQUM5QixzREFBK0IsQ0FBQTtJQUMvQiw0REFBcUMsQ0FBQTtJQUNyQywyREFBb0MsQ0FBQTtJQUNwQywyREFBb0MsQ0FBQTtJQUNwQywyREFBb0MsQ0FBQTtJQUNwQywwREFBbUMsQ0FBQTtJQUNuQywyREFBb0MsQ0FBQTtJQUNwQywwREFBbUMsQ0FBQTtJQUNuQywwREFBbUMsQ0FBQTtJQUNuQywyREFBb0MsQ0FBQTtJQUNwQywwREFBbUMsQ0FBQTtJQUNuQywyREFBb0MsQ0FBQTtJQUNwQywwREFBbUMsQ0FBQTtJQUNuQyxzREFBK0IsQ0FBQTtJQUMvQiwwREFBbUMsQ0FBQTtJQUNuQywyREFBb0MsQ0FBQTtJQUNwQywwREFBbUMsQ0FBQTtJQUNuQywwREFBbUMsQ0FBQTtJQUNuQywwREFBbUMsQ0FBQTtJQUNuQywwREFBbUMsQ0FBQTtJQUNuQywwREFBbUMsQ0FBQTtJQUNuQyx5REFBa0MsQ0FBQTtJQUNsQywyREFBb0MsQ0FBQTtJQUNwQywyREFBb0MsQ0FBQTtJQUNwQywyREFBb0MsQ0FBQTtJQUNwQyw0REFBcUMsQ0FBQTtJQUNyQyw0REFBcUMsQ0FBQTtJQUNyQywyREFBb0MsQ0FBQTtJQUNwQywyREFBb0MsQ0FBQTtJQUNwQywyREFBb0MsQ0FBQTtJQUNwQywwREFBbUMsQ0FBQTtJQUNuQywyREFBb0MsQ0FBQTtJQUNwQywwREFBbUMsQ0FBQTtJQUNuQywwREFBbUMsQ0FBQTtJQUNuQywyREFBb0MsQ0FBQTtJQUNwQywwREFBbUMsQ0FBQTtJQUNuQywyREFBb0MsQ0FBQTtJQUNwQywwREFBbUMsQ0FBQTtJQUNuQyxzREFBK0IsQ0FBQTtJQUMvQiwwREFBbUMsQ0FBQTtJQUNuQywyREFBb0MsQ0FBQTtJQUNwQywwREFBbUMsQ0FBQTtJQUNuQywwREFBbUMsQ0FBQTtJQUNuQywwREFBbUMsQ0FBQTtJQUNuQywwREFBbUMsQ0FBQTtJQUNuQywwREFBbUMsQ0FBQTtJQUNuQyx5REFBa0MsQ0FBQTtJQUNsQywyREFBb0MsQ0FBQTtJQUNw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ZGVzIFxyXG57XHJcbiAgY29tcHV0YWNpb25haXNfYml0cyA9IFwiMDF0MDFcIixcclxuICBjb21wdXRhY2lvbmFpc19ieXRlcyA9IFwiMDF0MDJcIiwgLy8gMTBeMFxyXG4gIGNvbXB1dGFjaW9uYWlzX2tpbG9ieXRlcyA9IFwiMDF0MDNcIiwgLy8gMTBeM1xyXG4gIGNvbXB1dGFjaW9uYWlzX21lZ2FieXRlcyA9IFwiMDF0MDRcIiwgLy8gMTBeNlxyXG4gIGNvbXB1dGFjaW9uYWlzX2dpZ2FieXRlcyA9IFwiMDF0MDVcIiwgLy8gMTBeOVxyXG4gIGNvbXB1dGFjaW9uYWlzX3RlcmFieXRlcyA9IFwiMDF0MDZcIiwgLy8gMTBeMTJcclxuICBjb21wdXRhY2lvbmFpc19wZXRhYnl0ZXMgPSBcIjAxdDA3XCIsIC8vIDEwXjE1XHJcbiAgY29tcHV0YWNpb25haXNfZXhhYnl0ZXMgPSBcIjAxdDA4XCIsIC8vIDEwXjE4XHJcbiAgY29tcHV0YWNpb25haXNfemV0dGFieXRlcyA9IFwiMDF0MDlcIiwgLy8gMTBeMjFcclxuICBjb21wdXRhY2lvbmFpc195b3R0YWJ5dGVzID0gXCIwMXQxMFwiLCAvLyAxMF4yNFxyXG4gIGNvbXB1dGFjaW9uYWlzX2JpbmFyaW9fYnl0ZXMgPSBcIjAydDAxXCIsIC8vIDJeMFxyXG4gIGNvbXB1dGFjaW9uYWlzX2JpbmFyaW9fa2liaWJ5dGVzID0gXCIwMnQwMlwiLCAvLyAyXjEwXHJcbiAgY29tcHV0YWNpb25haXNfYmluYXJpb19tZWJpYnl0ZXMgPSBcIjAydDAzXCIsIC8vIDJeMjBcclxuICBjb21wdXRhY2lvbmFpc19iaW5hcmlvX2dpYmlieXRlcyA9IFwiMDJ0MDRcIiwgLy8gMl4zMFxyXG4gIGNvbXB1dGFjaW9uYWlzX2JpbmFyaW9fdGViaWJ5dGVzID0gXCIwMnQwNVwiLCAvLyAyXjQwXHJcbiAgY29tcHV0YWNpb25haXNfYmluYXJpb19wZWJpYnl0ZXMgPSBcIjAydDA2XCIsIC8vIDJeNTBcclxuICBjb21wdXRhY2lvbmFpc19iaW5hcmlvX2V4YmlieXRlcyA9IFwiMDJ0MDdcIiwgLy8gMl42MFxyXG4gIGNvbXB1dGFjaW9uYWlzX2JpbmFyaW9femViaWJ5dGVzID0gXCIwMnQwOFwiLCAvLyAyXjcwXHJcbiAgY29tcHV0YWNpb25haXNfYmluYXJpb195b2JpYnl0ZXMgPSBcIjAydDA5XCIsIC8vIDJeODBcclxuICBsaW5lYXJlc19xdWVjdG9tZXRyb3MgPSBcIjAzdDAxXCIsXHJcbiAgbGluZWFyZXNfcm9udG9tZXRyb3MgPSBcIjAzdDAyXCIsXHJcbiAgbGluZWFyZXNfeW9jdG9tZXRyb3MgPSBcIjAzdDAzXCIsXHJcbiAgbGluZWFyZXNfemVwdG9tZXRyb3MgPSBcIjAzdDA0XCIsXHJcbiAgbGluZWFyZXNfYXR0b21ldHJvcyA9IFwiMDN0MDVcIixcclxuICBsaW5lYXJlc19mZW10b21ldHJvcyA9IFwiMDN0MDZcIixcclxuICBsaW5lYXJlc19waWNvbWV0cm9zID0gXCIwM3QwN1wiLFxyXG4gIGxpbmVhcmVzX25hbm9tZXRyb3MgPSBcIjAzdDA4XCIsXHJcbiAgbGluZWFyZXNfbWljcm9tZXRyb3MgPSBcIjAzdDA5XCIsXHJcbiAgbGluZWFyZXNfbWlsaW1ldHJvcyA9IFwiMDN0MTBcIixcclxuICBsaW5lYXJlc19jZW50aW1ldHJvcyA9IFwiMDN0MTFcIixcclxuICBsaW5lYXJlc19kZWNpbWV0cm9zID0gXCIwM3QxMlwiLFxyXG4gIGxpbmVhcmVzX21ldHJvcyA9IFwiMDN0MTNcIixcclxuICBsaW5lYXJlc19kZWNhbWV0cm9zID0gXCIwM3QxNFwiLFxyXG4gIGxpbmVhcmVzX2hlY3RvbWV0cm9zID0gXCIwM3QxNVwiLFxyXG4gIGxpbmVhcmVzX2tpbG9tZXRyb3MgPSBcIjAzdDE2XCIsXHJcbiAgbGluZWFyZXNfbWVnYW1ldHJvcyA9IFwiMDN0MTdcIixcclxuICBsaW5lYXJlc19naWdhbWV0cm9zID0gXCIwM3QxOFwiLFxyXG4gIGxpbmVhcmVzX3RlcmFtZXRyb3MgPSBcIjAzdDE5XCIsXHJcbiAgbGluZWFyZXNfcGV0YW1ldHJvcyA9IFwiMDN0MjBcIixcclxuICBsaW5lYXJlc19leGFtZXRyb3MgPSBcIjAzdDIxXCIsXHJcbiAgbGluZWFyZXNfemV0dGFtZXRyb3MgPSBcIjAzdDIyXCIsXHJcbiAgbGluZWFyZXNfeW90dGFtZXRyb3MgPSBcIjAzdDIzXCIsXHJcbiAgbGluZWFyZXNfcm9ubmFtZXRyb3MgPSBcIjAzdDI0XCIsXHJcbiAgbGluZWFyZXNfcXVldHRhbWV0cm9zID0gXCIwM3QyNVwiLFxyXG4gIGFyZWFfcXVlY3RvbWV0cm9zX3F1YWRyYWRvcyA9IFwiMDR0MDFcIixcclxuICBhcmVhX3JvbnRvbWV0cm9zX3F1YWRyYWRvcyA9IFwiMDR0MDJcIixcclxuICBhcmVhX3lvY3RvbWV0cm9zX3F1YWRyYWRvcyA9IFwiMDR0MDNcIixcclxuICBhcmVhX3plcHRvbWV0cm9zX3F1YWRyYWRvcyA9IFwiMDR0MDRcIixcclxuICBhcmVhX2F0dG9tZXRyb3NfcXVhZHJhZG9zID0gXCIwNHQwNVwiLFxyXG4gIGFyZWFfZmVtdG9tZXRyb3NfcXVhZHJhZG9zID0gXCIwNHQwNlwiLFxyXG4gIGFyZWFfcGljb21ldHJvc19xdWFkcmFkb3MgPSBcIjA0dDA3XCIsXHJcbiAgYXJlYV9uYW5vbWV0cm9zX3F1YWRyYWRvcyA9IFwiMDR0MDhcIixcclxuICBhcmVhX21pY3JvbWV0cm9zX3F1YWRyYWRvcyA9IFwiMDR0MDlcIixcclxuICBhcmVhX21pbGltZXRyb3NfcXVhZHJhZG9zID0gXCIwNHQxMFwiLFxyXG4gIGFyZWFfY2VudGltZXRyb3NfcXVhZHJhZG9zID0gXCIwNHQxMVwiLFxyXG4gIGFyZWFfZGVjaW1ldHJvc19xdWFkcmFkb3MgPSBcIjA0dDEyXCIsXHJcbiAgYXJlYV9tZXRyb3NfcXVhZHJhZG9zID0gXCIwNHQxM1wiLFxyXG4gIGFyZWFfZGVjYW1ldHJvc19xdWFkcmFkb3MgPSBcIjA0dDE0XCIsXHJcbiAgYXJlYV9oZWN0b21ldHJvc19xdWFkcmFkb3MgPSBcIjA0dDE1XCIsXHJcbiAgYXJlYV9raWxvbWV0cm9zX3F1YWRyYWRvcyA9IFwiMDR0MTZcIixcclxuICBhcmVhX21lZ2FtZXRyb3NfcXVhZHJhZG9zID0gXCIwNHQxN1wiLFxyXG4gIGFyZWFfZ2lnYW1ldHJvc19xdWFkcmFkb3MgPSBcIjA0dDE4XCIsXHJcbiAgYXJlYV90ZXJhbWV0cm9zX3F1YWRyYWRvcyA9IFwiMDR0MTlcIixcclxuICBhcmVhX3BldGFtZXRyb3NfcXVhZHJhZG9zID0gXCIwNHQyMFwiLFxyXG4gIGFyZWFfZXhhbWV0cm9zX3F1YWRyYWRvcyA9IFwiMDR0MjFcIixcclxuICBhcmVhX3pldHRhbWV0cm9zX3F1YWRyYWRvcyA9IFwiMDR0MjJcIixcclxuICBhcmVhX3lvdHRhbWV0cm9zX3F1YWRyYWRvcyA9IFwiMDR0MjNcIixcclxuICBhcmVhX3Jvbm5hbWV0cm9zX3F1YWRyYWRvcyA9IFwiMDR0MjRcIixcclxuICBhcmVhX3F1ZXR0YW1ldHJvc19xdWFkcmFkb3MgPSBcIjA0dDI1XCIsXHJcbiAgdm9sdW1lX3F1ZWN0b21ldHJvc19jdWJpY29zID0gXCIwNXQwMVwiLFxyXG4gIHZvbHVtZV9yb250b21ldHJvc19jdWJpY29zID0gXCIwNXQwMlwiLFxyXG4gIHZvbHVtZV95b2N0b21ldHJvc19jdWJpY29zID0gXCIwNXQwM1wiLFxyXG4gIHZvbHVtZV96ZXB0b21ldHJvc19jdWJpY29zID0gXCIwNXQwNFwiLFxyXG4gIHZvbHVtZV9hdHRvbWV0cm9zX2N1Ymljb3MgPSBcIjA1dDA1XCIsXHJcbiAgdm9sdW1lX2ZlbXRvbWV0cm9zX2N1Ymljb3MgPSBcIjA1dDA2XCIsXHJcbiAgdm9sdW1lX3BpY29tZXRyb3NfY3ViaWNvcyA9IFwiMDV0MDdcIixcclxuICB2b2x1bWVfbmFub21ldHJvc19jdWJpY29zID0gXCIwNXQwOFwiLFxyXG4gIHZvbHVtZV9taWNyb21ldHJvc19jdWJpY29zID0gXCIwNXQwOVwiLFxyXG4gIHZvbHVtZV9taWxpbWV0cm9zX2N1Ymljb3MgPSBcIjA1dDEwXCIsXHJcbiAgdm9sdW1lX2NlbnRpbWV0cm9zX2N1Ymljb3MgPSBcIjA1dDExXCIsXHJcbiAgdm9sdW1lX2RlY2ltZXRyb3NfY3ViaWNvcyA9IFwiMDV0MTJcIixcclxuICB2b2x1bWVfbWV0cm9zX2N1Ymljb3MgPSBcIjA1dDEzXCIsXHJcbiAgdm9sdW1lX2RlY2FtZXRyb3NfY3ViaWNvcyA9IFwiMDV0MTRcIixcclxuICB2b2x1bWVfaGVjdG9tZXRyb3NfY3ViaWNvcyA9IFwiMDV0MTVcIixcclxuICB2b2x1bWVfa2lsb21ldHJvc19jdWJpY29zID0gXCIwNXQxNlwiLFxyXG4gIHZvbHVtZV9tZWdhbWV0cm9zX2N1Ymljb3MgPSBcIjA1dDE3XCIsXHJcbiAgdm9sdW1lX2dpZ2FtZXRyb3NfY3ViaWNvcyA9IFwiMDV0MThcIixcclxuICB2b2x1bWVfdGVyYW1ldHJvc19jdWJpY29zID0gXCIwNXQxOVwiLFxyXG4gIHZvbHVtZV9wZXRhbWV0cm9zX2N1Ymljb3MgPSBcIjA1dDIwXCIsXHJcbiAgdm9sdW1lX2V4YW1ldHJvc19jdWJpY29zID0gXCIwNXQyMVwiLFxyXG4gIHZvbHVtZV96ZXR0YW1ldHJvc19jdWJpY29zID0gXCIwNXQyMlwiLFxyXG4gIHZvbHVtZV95b3R0YW1ldHJvc19jdWJpY29zID0gXCIwNXQyM1wiLFxyXG4gIHZvbHVtZV9yb25uYW1ldHJvc19jdWJpY29zID0gXCIwNXQyNFwiLFxyXG4gIHZvbHVtZV9xdWV0dGFtZXRyb3NfY3ViaWNvcyA9IFwiMDV0MjVcIixcclxufVxyXG5cclxuLyoqXHJcbiAqIEB0b2RvIENvbXBvbmVudGUgY29tIG5lY2Vzc2lkYWRlIGRlIGF0dWFsaXphw6fDtWVzLCBtw7NkdWxvcyBpbmNvbXBsZXRvcyBvdSBuw6NvIGltcGxlbWVudGFkb3MuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgVW5rb3duVW5pdENvbnZlcnNvciBleHRlbmRzIEVycm9yIFxyXG57XHJcbiAgY29uc3RydWN0b3IoYTogRURpY2lvbmFyaW9VbmlkYWRlcywgYjogRURpY2lvbmFyaW9VbmlkYWRlcykge1xyXG4gICAgc3VwZXIoYENvbnZlcnPDo28gZGUgdW5pZGFkZXMgaW1wcsOzcHJpYSBvdSBkZXNjb25oZWNpZGEhICR7YX0gPT4gJHtifWApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENvbnZlcnNvcmVzIFxyXG57XHJcbiAgcHVibGljIHRyYW5zZm9ybSh0bzogRURpY2lvbmFyaW9VbmlkYWRlcywgZ286IEVEaWNpb25hcmlvVW5pZGFkZXMsIHZhbHVlOiBudW1iZXIpIHtcclxuICAgIGxldCBpbmZvcm1hdGl2byA9IGBDb252ZXJzw6NvIGRlICR7Z299IHBhcmEgJHt0b30gY29tIHZhbG9yICR7dmFsdWV9YDtcclxuXHJcbiAgICBzd2l0Y2ggKHRvKSB7XHJcbiAgICAgIGNhc2UgRURpY2lvbmFyaW9VbmlkYWRlcy5jb21wdXRhY2lvbmFpc19iaXRzOlxyXG4gICAgICAgIHN3aXRjaCAoZ28pIHtcclxuICAgICAgICAgIGNhc2UgRURpY2lvbmFyaW9VbmlkYWRlcy5jb21wdXRhY2lvbmFpc19ieXRlczpcclxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSAvIDg7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBFRGljaW9uYXJpb1VuaWRhZGVzLmNvbXB1dGFjaW9uYWlzX2tpbG9ieXRlczpcclxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSAvIDEwMDAgLyA4O1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgRURpY2lvbmFyaW9VbmlkYWRlcy5jb21wdXRhY2lvbmFpc19tZWdhYnl0ZXM6XHJcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgLyAxMDAwICoqIDIgLyA4O1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgRURpY2lvbmFyaW9VbmlkYWRlcy5jb21wdXRhY2lvbmFpc19naWdhYnl0ZXM6XHJcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgLyAxMDAwICoqIDMgLyA4O1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgRURpY2lvbmFyaW9VbmlkYWRlcy5jb21wdXRhY2lvbmFpc190ZXJhYnl0ZXM6XHJcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgLyAxMDAwICoqIDQgLyA4O1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgRURpY2lvbmFyaW9VbmlkYWRlcy5jb21wdXRhY2lvbmFpc19wZXRhYnl0ZXM6XHJcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgLyAxMDAwICoqIDUgLyA4O1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgRURpY2lvbmFyaW9VbmlkYWRlcy5jb21wdXRhY2lvbmFpc19leGFieXRlczpcclxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSAvIDEwMDAgKiogNiAvIDg7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBFRGljaW9uYXJpb1VuaWRhZGVzLmNvbXB1dGFjaW9uYWlzX3pldHRhYnl0ZXM6XHJcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgLyAxMDAwICoqIDcgLyA4O1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgRURpY2lvbmFyaW9VbmlkYWRlcy5jb21wdXRhY2lvbmFpc195b3R0YWJ5dGVzOlxyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlIC8gMTAwMCAqKiA4IC8gODtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIEVEaWNpb25hcmlvVW5pZGFkZXMuY29tcHV0YWNpb25haXNfYmluYXJpb19ieXRlczpcclxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSAvIDg7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBFRGljaW9uYXJpb1VuaWRhZGVzLmNvbXB1dGFjaW9uYWlzX2JpbmFyaW9fa2liaWJ5dGVzOlxyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlIC8gMTAyNCAvIDg7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBFRGljaW9uYXJpb1VuaWRhZGVzLmNvbXB1dGFjaW9uYWlzX2JpbmFyaW9fbWViaWJ5dGVzOlxyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlIC8gMTAyNCAqKiAyIC8gODtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIEVEaWNpb25hcmlvVW5pZGFkZXMuY29tcHV0YWNpb25haXNfYmluYXJpb19naWJpYnl0ZXM6XHJcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgLyAxMDI0ICoqIDMgLyA4O1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgRURpY2lvbmFyaW9VbmlkYWRlcy5jb21wdXRhY2lvbmFpc19iaW5hcmlvX3RlYmlieXRlczpcclxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSAvIDEwMjQgKiogNCAvIDg7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBFRGljaW9uYXJpb1VuaWRhZGVzLmNvbXB1dGFjaW9uYWlzX2JpbmFyaW9fcGViaWJ5dGVzOlxyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlIC8gMTAyNCAqKiA1IC8gODtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIEVEaWNpb25hcmlvVW5pZGFkZXMuY29tcHV0YWNpb25haXNfYmluYXJpb19leGJpYnl0ZXM6XHJcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgLyAxMDI0ICoqIDYgLyA4O1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgRURpY2lvbmFyaW9VbmlkYWRlcy5jb21wdXRhY2lvbmFpc19iaW5hcmlvX3plYmlieXRlczpcclxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSAvIDEwMjQgKiogNyAvIDg7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBFRGljaW9uYXJpb1VuaWRhZGVzLmNvbXB1dGFjaW9uYWlzX2JpbmFyaW9feW9iaWJ5dGVzOlxyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlIC8gMTAyNCAqKiA4IC8gODtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIEVEaWNpb25hcmlvVW5pZGFkZXMubGluZWFyZXNfcXVlY3RvbWV0cm9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMubGluZWFyZXNfcm9udG9tZXRyb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5saW5lYXJlc195b2N0b21ldHJvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmxpbmVhcmVzX3plcHRvbWV0cm9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMubGluZWFyZXNfYXR0b21ldHJvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmxpbmVhcmVzX2ZlbXRvbWV0cm9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMubGluZWFyZXNfcGljb21ldHJvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmxpbmVhcmVzX25hbm9tZXRyb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5saW5lYXJlc19taWNyb21ldHJvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmxpbmVhcmVzX21pbGltZXRyb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5saW5lYXJlc19jZW50aW1ldHJvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmxpbmVhcmVzX2RlY2ltZXRyb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5saW5lYXJlc19tZXRyb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5saW5lYXJlc19kZWNhbWV0cm9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMubGluZWFyZXNfaGVjdG9tZXRyb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5saW5lYXJlc19raWxvbWV0cm9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMubGluZWFyZXNfbWVnYW1ldHJvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmxpbmVhcmVzX2dpZ2FtZXRyb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5saW5lYXJlc190ZXJhbWV0cm9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMubGluZWFyZXNfcGV0YW1ldHJvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmxpbmVhcmVzX2V4YW1ldHJvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmxpbmVhcmVzX3pldHRhbWV0cm9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMubGluZWFyZXNfeW90dGFtZXRyb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5saW5lYXJlc19yb25uYW1ldHJvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmxpbmVhcmVzX3F1ZXR0YW1ldHJvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmFyZWFfcXVlY3RvbWV0cm9zX3F1YWRyYWRvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmFyZWFfcm9udG9tZXRyb3NfcXVhZHJhZG9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMuYXJlYV95b2N0b21ldHJvc19xdWFkcmFkb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5hcmVhX3plcHRvbWV0cm9zX3F1YWRyYWRvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmFyZWFfYXR0b21ldHJvc19xdWFkcmFkb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5hcmVhX2ZlbXRvbWV0cm9zX3F1YWRyYWRvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmFyZWFfcGljb21ldHJvc19xdWFkcmFkb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5hcmVhX25hbm9tZXRyb3NfcXVhZHJhZG9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMuYXJlYV9taWNyb21ldHJvc19xdWFkcmFkb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5hcmVhX21pbGltZXRyb3NfcXVhZHJhZG9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMuYXJlYV9jZW50aW1ldHJvc19xdWFkcmFkb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5hcmVhX2RlY2ltZXRyb3NfcXVhZHJhZG9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMuYXJlYV9tZXRyb3NfcXVhZHJhZG9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMuYXJlYV9kZWNhbWV0cm9zX3F1YWRyYWRvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmFyZWFfaGVjdG9tZXRyb3NfcXVhZHJhZG9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMuYXJlYV9raWxvbWV0cm9zX3F1YWRyYWRvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmFyZWFfbWVnYW1ldHJvc19xdWFkcmFkb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5hcmVhX2dpZ2FtZXRyb3NfcXVhZHJhZG9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMuYXJlYV90ZXJhbWV0cm9zX3F1YWRyYWRvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmFyZWFfcGV0YW1ldHJvc19xdWFkcmFkb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5hcmVhX2V4YW1ldHJvc19xdWFkcmFkb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5hcmVhX3pldHRhbWV0cm9zX3F1YWRyYWRvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmFyZWFfeW90dGFtZXRyb3NfcXVhZHJhZG9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMuYXJlYV9yb25uYW1ldHJvc19xdWFkcmFkb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5hcmVhX3F1ZXR0YW1ldHJvc19xdWFkcmFkb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy52b2x1bWVfcXVlY3RvbWV0cm9zX2N1Ymljb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy52b2x1bWVfcm9udG9tZXRyb3NfY3ViaWNvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLnZvbHVtZV95b2N0b21ldHJvc19jdWJpY29zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMudm9sdW1lX3plcHRvbWV0cm9zX2N1Ymljb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy52b2x1bWVfYXR0b21ldHJvc19jdWJpY29zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMudm9sdW1lX2ZlbXRvbWV0cm9zX2N1Ymljb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy52b2x1bWVfcGljb21ldHJvc19jdWJpY29zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMudm9sdW1lX25hbm9tZXRyb3NfY3ViaWNvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLnZvbHVtZV9taWNyb21ldHJvc19jdWJpY29zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMudm9sdW1lX21pbGltZXRyb3NfY3ViaWNvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLnZvbHVtZV9jZW50aW1ldHJvc19jdWJpY29zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMudm9sdW1lX2RlY2ltZXRyb3NfY3ViaWNvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLnZvbHVtZV9tZXRyb3NfY3ViaWNvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLnZvbHVtZV9kZWNhbWV0cm9zX2N1Ymljb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy52b2x1bWVfaGVjdG9tZXRyb3NfY3ViaWNvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLnZvbHVtZV9raWxvbWV0cm9zX2N1Ymljb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy52b2x1bWVfbWVnYW1ldHJvc19jdWJpY29zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMudm9sdW1lX2dpZ2FtZXRyb3NfY3ViaWNvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLnZvbHVtZV90ZXJhbWV0cm9zX2N1Ymljb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy52b2x1bWVfcGV0YW1ldHJvc19jdWJpY29zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMudm9sdW1lX2V4YW1ldHJvc19jdWJpY29zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMudm9sdW1lX3pldHRhbWV0cm9zX2N1Ymljb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy52b2x1bWVfeW90dGFtZXRyb3NfY3ViaWNvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLnZvbHVtZV9yb25uYW1ldHJvc19jdWJpY29zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMudm9sdW1lX3F1ZXR0YW1ldHJvc19jdWJpY29zOlxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVW5rb3duVW5pdENvbnZlcnNvcihnbywgdG8pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBFRGljaW9uYXJpb1VuaWRhZGVzLmNvbXB1dGFjaW9uYWlzX2J5dGVzOlxyXG4gICAgICAgIHN3aXRjaCAoZ28pIHtcclxuICAgICAgICAgIGNhc2UgRURpY2lvbmFyaW9VbmlkYWRlcy5jb21wdXRhY2lvbmFpc19iaXRzOlxyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlICogODtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIEVEaWNpb25hcmlvVW5pZGFkZXMuY29tcHV0YWNpb25haXNfa2lsb2J5dGVzOlxyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlIC8gMTAwMDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIEVEaWNpb25hcmlvVW5pZGFkZXMuY29tcHV0YWNpb25haXNfbWVnYWJ5dGVzOlxyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlIC8gMTAwMCAqKiAyO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgRURpY2lvbmFyaW9VbmlkYWRlcy5jb21wdXRhY2lvbmFpc19naWdhYnl0ZXM6XHJcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgLyAxMDAwICoqIDM7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBFRGljaW9uYXJpb1VuaWRhZGVzLmNvbXB1dGFjaW9uYWlzX3RlcmFieXRlczpcclxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSAvIDEwMDAgKiogNDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIEVEaWNpb25hcmlvVW5pZGFkZXMuY29tcHV0YWNpb25haXNfcGV0YWJ5dGVzOlxyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlIC8gMTAwMCAqKiA1O1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgRURpY2lvbmFyaW9VbmlkYWRlcy5jb21wdXRhY2lvbmFpc19leGFieXRlczpcclxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSAvIDEwMDAgKiogNjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIEVEaWNpb25hcmlvVW5pZGFkZXMuY29tcHV0YWNpb25haXNfemV0dGFieXRlczpcclxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSAvIDEwMDAgKiogNztcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIEVEaWNpb25hcmlvVW5pZGFkZXMuY29tcHV0YWNpb25haXNfeW90dGFieXRlczpcclxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSAvIDEwMDAgKiogODtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIEVEaWNpb25hcmlvVW5pZGFkZXMuY29tcHV0YWNpb25haXNfYmluYXJpb19ieXRlczpcclxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIEVEaWNpb25hcmlvVW5pZGFkZXMuY29tcHV0YWNpb25haXNfYmluYXJpb19raWJpYnl0ZXM6XHJcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgLyAxMDI0O1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgRURpY2lvbmFyaW9VbmlkYWRlcy5jb21wdXRhY2lvbmFpc19iaW5hcmlvX21lYmlieXRlczpcclxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSAvIDEwMjQgKiogMjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIEVEaWNpb25hcmlvVW5pZGFkZXMuY29tcHV0YWNpb25haXNfYmluYXJpb19naWJpYnl0ZXM6XHJcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgLyAxMDI0ICoqIDM7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBFRGljaW9uYXJpb1VuaWRhZGVzLmNvbXB1dGFjaW9uYWlzX2JpbmFyaW9fdGViaWJ5dGVzOlxyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlIC8gMTAyNCAqKiA0O1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgRURpY2lvbmFyaW9VbmlkYWRlcy5jb21wdXRhY2lvbmFpc19iaW5hcmlvX3BlYmlieXRlczpcclxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSAvIDEwMjQgKiogNTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIEVEaWNpb25hcmlvVW5pZGFkZXMuY29tcHV0YWNpb25haXNfYmluYXJpb19leGJpYnl0ZXM6XHJcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgLyAxMDI0ICoqIDY7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBFRGljaW9uYXJpb1VuaWRhZGVzLmNvbXB1dGFjaW9uYWlzX2JpbmFyaW9femViaWJ5dGVzOlxyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlIC8gMTAyNCAqKiA3O1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgRURpY2lvbmFyaW9VbmlkYWRlcy5jb21wdXRhY2lvbmFpc19iaW5hcmlvX3lvYmlieXRlczpcclxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSAvIDEwMjQgKiogODtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIEVEaWNpb25hcmlvVW5pZGFkZXMubGluZWFyZXNfcXVlY3RvbWV0cm9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMubGluZWFyZXNfcm9udG9tZXRyb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5saW5lYXJlc195b2N0b21ldHJvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmxpbmVhcmVzX3plcHRvbWV0cm9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMubGluZWFyZXNfYXR0b21ldHJvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmxpbmVhcmVzX2ZlbXRvbWV0cm9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMubGluZWFyZXNfcGljb21ldHJvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmxpbmVhcmVzX25hbm9tZXRyb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5saW5lYXJlc19taWNyb21ldHJvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmxpbmVhcmVzX21pbGltZXRyb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5saW5lYXJlc19jZW50aW1ldHJvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmxpbmVhcmVzX2RlY2ltZXRyb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5saW5lYXJlc19tZXRyb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5saW5lYXJlc19kZWNhbWV0cm9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMubGluZWFyZXNfaGVjdG9tZXRyb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5saW5lYXJlc19raWxvbWV0cm9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMubGluZWFyZXNfbWVnYW1ldHJvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmxpbmVhcmVzX2dpZ2FtZXRyb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5saW5lYXJlc190ZXJhbWV0cm9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMubGluZWFyZXNfcGV0YW1ldHJvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmxpbmVhcmVzX2V4YW1ldHJvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmxpbmVhcmVzX3pldHRhbWV0cm9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMubGluZWFyZXNfeW90dGFtZXRyb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5saW5lYXJlc19yb25uYW1ldHJvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmxpbmVhcmVzX3F1ZXR0YW1ldHJvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmFyZWFfcXVlY3RvbWV0cm9zX3F1YWRyYWRvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmFyZWFfcm9udG9tZXRyb3NfcXVhZHJhZG9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMuYXJlYV95b2N0b21ldHJvc19xdWFkcmFkb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5hcmVhX3plcHRvbWV0cm9zX3F1YWRyYWRvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmFyZWFfYXR0b21ldHJvc19xdWFkcmFkb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5hcmVhX2ZlbXRvbWV0cm9zX3F1YWRyYWRvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmFyZWFfcGljb21ldHJvc19xdWFkcmFkb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5hcmVhX25hbm9tZXRyb3NfcXVhZHJhZG9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMuYXJlYV9taWNyb21ldHJvc19xdWFkcmFkb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5hcmVhX21pbGltZXRyb3NfcXVhZHJhZG9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMuYXJlYV9jZW50aW1ldHJvc19xdWFkcmFkb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5hcmVhX2RlY2ltZXRyb3NfcXVhZHJhZG9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMuYXJlYV9tZXRyb3NfcXVhZHJhZG9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMuYXJlYV9kZWNhbWV0cm9zX3F1YWRyYWRvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmFyZWFfaGVjdG9tZXRyb3NfcXVhZHJhZG9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMuYXJlYV9raWxvbWV0cm9zX3F1YWRyYWRvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmFyZWFfbWVnYW1ldHJvc19xdWFkcmFkb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5hcmVhX2dpZ2FtZXRyb3NfcXVhZHJhZG9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMuYXJlYV90ZXJhbWV0cm9zX3F1YWRyYWRvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmFyZWFfcGV0YW1ldHJvc19xdWFkcmFkb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5hcmVhX2V4YW1ldHJvc19xdWFkcmFkb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5hcmVhX3pldHRhbWV0cm9zX3F1YWRyYWRvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmFyZWFfeW90dGFtZXRyb3NfcXVhZHJhZG9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMuYXJlYV9yb25uYW1ldHJvc19xdWFkcmFkb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5hcmVhX3F1ZXR0YW1ldHJvc19xdWFkcmFkb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy52b2x1bWVfcXVlY3RvbWV0cm9zX2N1Ymljb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy52b2x1bWVfcm9udG9tZXRyb3NfY3ViaWNvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLnZvbHVtZV95b2N0b21ldHJvc19jdWJpY29zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMudm9sdW1lX3plcHRvbWV0cm9zX2N1Ymljb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy52b2x1bWVfYXR0b21ldHJvc19jdWJpY29zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMudm9sdW1lX2ZlbXRvbWV0cm9zX2N1Ymljb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy52b2x1bWVfcGljb21ldHJvc19jdWJpY29zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMudm9sdW1lX25hbm9tZXRyb3NfY3ViaWNvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLnZvbHVtZV9taWNyb21ldHJvc19jdWJpY29zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMudm9sdW1lX21pbGltZXRyb3NfY3ViaWNvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLnZvbHVtZV9jZW50aW1ldHJvc19jdWJpY29zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMudm9sdW1lX2RlY2ltZXRyb3NfY3ViaWNvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLnZvbHVtZV9tZXRyb3NfY3ViaWNvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLnZvbHVtZV9kZWNhbWV0cm9zX2N1Ymljb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy52b2x1bWVfaGVjdG9tZXRyb3NfY3ViaWNvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLnZvbHVtZV9raWxvbWV0cm9zX2N1Ymljb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy52b2x1bWVfbWVnYW1ldHJvc19jdWJpY29zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMudm9sdW1lX2dpZ2FtZXRyb3NfY3ViaWNvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLnZvbHVtZV90ZXJhbWV0cm9zX2N1Ymljb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy52b2x1bWVfcGV0YW1ldHJvc19jdWJpY29zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMudm9sdW1lX2V4YW1ldHJvc19jdWJpY29zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMudm9sdW1lX3pldHRhbWV0cm9zX2N1Ymljb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy52b2x1bWVfeW90dGFtZXRyb3NfY3ViaWNvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLnZvbHVtZV9yb25uYW1ldHJvc19jdWJpY29zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMudm9sdW1lX3F1ZXR0YW1ldHJvc19jdWJpY29zOlxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVW5rb3duVW5pdENvbnZlcnNvcihnbywgdG8pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBFRGljaW9uYXJpb1VuaWRhZGVzLmNvbXB1dGFjaW9uYWlzX2tpbG9ieXRlczpcclxuICAgICAgICBzd2l0Y2ggKGdvKSB7XHJcbiAgICAgICAgICBjYXNlIEVEaWNpb25hcmlvVW5pZGFkZXMuY29tcHV0YWNpb25haXNfYml0czpcclxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSAqIDggKiAxMDAwO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgRURpY2lvbmFyaW9VbmlkYWRlcy5jb21wdXRhY2lvbmFpc19ieXRlczpcclxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSAqIDEwMDA7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBFRGljaW9uYXJpb1VuaWRhZGVzLmNvbXB1dGFjaW9uYWlzX21lZ2FieXRlczpcclxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSAvIDEwMDA7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBFRGljaW9uYXJpb1VuaWRhZGVzLmNvbXB1dGFjaW9uYWlzX2dpZ2FieXRlczpcclxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSAvIDEwMDAgKiogMjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIEVEaWNpb25hcmlvVW5pZGFkZXMuY29tcHV0YWNpb25haXNfdGVyYWJ5dGVzOlxyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlIC8gMTAwMCAqKiAzO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgRURpY2lvbmFyaW9VbmlkYWRlcy5jb21wdXRhY2lvbmFpc19wZXRhYnl0ZXM6XHJcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgLyAxMDAwICoqIDQ7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBFRGljaW9uYXJpb1VuaWRhZGVzLmNvbXB1dGFjaW9uYWlzX2V4YWJ5dGVzOlxyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlIC8gMTAwMCAqKiA1O1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgRURpY2lvbmFyaW9VbmlkYWRlcy5jb21wdXRhY2lvbmFpc196ZXR0YWJ5dGVzOlxyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlIC8gMTAwMCAqKiA2O1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgRURpY2lvbmFyaW9VbmlkYWRlcy5jb21wdXRhY2lvbmFpc195b3R0YWJ5dGVzOlxyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlIC8gMTAwMCAqKiA3O1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgRURpY2lvbmFyaW9VbmlkYWRlcy5jb21wdXRhY2lvbmFpc19iaW5hcmlvX2J5dGVzOlxyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlICogMTAyNDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIEVEaWNpb25hcmlvVW5pZGFkZXMuY29tcHV0YWNpb25haXNfYmluYXJpb19raWJpYnl0ZXM6XHJcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBFRGljaW9uYXJpb1VuaWRhZGVzLmNvbXB1dGFjaW9uYWlzX2JpbmFyaW9fbWViaWJ5dGVzOlxyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlIC8gMTAyNDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIEVEaWNpb25hcmlvVW5pZGFkZXMuY29tcHV0YWNpb25haXNfYmluYXJpb19naWJpYnl0ZXM6XHJcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgLyAxMDI0ICoqIDI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBFRGljaW9uYXJpb1VuaWRhZGVzLmNvbXB1dGFjaW9uYWlzX2JpbmFyaW9fdGViaWJ5dGVzOlxyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlIC8gMTAyNCAqKiAzO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgRURpY2lvbmFyaW9VbmlkYWRlcy5jb21wdXRhY2lvbmFpc19iaW5hcmlvX3BlYmlieXRlczpcclxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSAvIDEwMjQgKiogNDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIEVEaWNpb25hcmlvVW5pZGFkZXMuY29tcHV0YWNpb25haXNfYmluYXJpb19leGJpYnl0ZXM6XHJcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgLyAxMDI0ICoqIDU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBFRGljaW9uYXJpb1VuaWRhZGVzLmNvbXB1dGFjaW9uYWlzX2JpbmFyaW9femViaWJ5dGVzOlxyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlIC8gMTAyNCAqKiA2O1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgRURpY2lvbmFyaW9VbmlkYWRlcy5jb21wdXRhY2lvbmFpc19iaW5hcmlvX3lvYmlieXRlczpcclxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSAvIDEwMjQgKiogNztcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIEVEaWNpb25hcmlvVW5pZGFkZXMubGluZWFyZXNfcXVlY3RvbWV0cm9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMubGluZWFyZXNfcm9udG9tZXRyb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5saW5lYXJlc195b2N0b21ldHJvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmxpbmVhcmVzX3plcHRvbWV0cm9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMubGluZWFyZXNfYXR0b21ldHJvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmxpbmVhcmVzX2ZlbXRvbWV0cm9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMubGluZWFyZXNfcGljb21ldHJvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmxpbmVhcmVzX25hbm9tZXRyb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5saW5lYXJlc19taWNyb21ldHJvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmxpbmVhcmVzX21pbGltZXRyb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5saW5lYXJlc19jZW50aW1ldHJvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmxpbmVhcmVzX2RlY2ltZXRyb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5saW5lYXJlc19tZXRyb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5saW5lYXJlc19kZWNhbWV0cm9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMubGluZWFyZXNfaGVjdG9tZXRyb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5saW5lYXJlc19raWxvbWV0cm9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMubGluZWFyZXNfbWVnYW1ldHJvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmxpbmVhcmVzX2dpZ2FtZXRyb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5saW5lYXJlc190ZXJhbWV0cm9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMubGluZWFyZXNfcGV0YW1ldHJvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmxpbmVhcmVzX2V4YW1ldHJvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmxpbmVhcmVzX3pldHRhbWV0cm9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMubGluZWFyZXNfeW90dGFtZXRyb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5saW5lYXJlc19yb25uYW1ldHJvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmxpbmVhcmVzX3F1ZXR0YW1ldHJvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmFyZWFfcXVlY3RvbWV0cm9zX3F1YWRyYWRvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmFyZWFfcm9udG9tZXRyb3NfcXVhZHJhZG9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMuYXJlYV95b2N0b21ldHJvc19xdWFkcmFkb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5hcmVhX3plcHRvbWV0cm9zX3F1YWRyYWRvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmFyZWFfYXR0b21ldHJvc19xdWFkcmFkb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5hcmVhX2ZlbXRvbWV0cm9zX3F1YWRyYWRvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmFyZWFfcGljb21ldHJvc19xdWFkcmFkb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5hcmVhX25hbm9tZXRyb3NfcXVhZHJhZG9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMuYXJlYV9taWNyb21ldHJvc19xdWFkcmFkb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5hcmVhX21pbGltZXRyb3NfcXVhZHJhZG9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMuYXJlYV9jZW50aW1ldHJvc19xdWFkcmFkb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5hcmVhX2RlY2ltZXRyb3NfcXVhZHJhZG9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMuYXJlYV9tZXRyb3NfcXVhZHJhZG9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMuYXJlYV9kZWNhbWV0cm9zX3F1YWRyYWRvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmFyZWFfaGVjdG9tZXRyb3NfcXVhZHJhZG9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMuYXJlYV9raWxvbWV0cm9zX3F1YWRyYWRvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmFyZWFfbWVnYW1ldHJvc19xdWFkcmFkb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5hcmVhX2dpZ2FtZXRyb3NfcXVhZHJhZG9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMuYXJlYV90ZXJhbWV0cm9zX3F1YWRyYWRvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmFyZWFfcGV0YW1ldHJvc19xdWFkcmFkb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5hcmVhX2V4YW1ldHJvc19xdWFkcmFkb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5hcmVhX3pldHRhbWV0cm9zX3F1YWRyYWRvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmFyZWFfeW90dGFtZXRyb3NfcXVhZHJhZG9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMuYXJlYV9yb25uYW1ldHJvc19xdWFkcmFkb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5hcmVhX3F1ZXR0YW1ldHJvc19xdWFkcmFkb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy52b2x1bWVfcXVlY3RvbWV0cm9zX2N1Ymljb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy52b2x1bWVfcm9udG9tZXRyb3NfY3ViaWNvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLnZvbHVtZV95b2N0b21ldHJvc19jdWJpY29zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMudm9sdW1lX3plcHRvbWV0cm9zX2N1Ymljb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy52b2x1bWVfYXR0b21ldHJvc19jdWJpY29zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMudm9sdW1lX2ZlbXRvbWV0cm9zX2N1Ymljb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy52b2x1bWVfcGljb21ldHJvc19jdWJpY29zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMudm9sdW1lX25hbm9tZXRyb3NfY3ViaWNvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLnZvbHVtZV9taWNyb21ldHJvc19jdWJpY29zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMudm9sdW1lX21pbGltZXRyb3NfY3ViaWNvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLnZvbHVtZV9jZW50aW1ldHJvc19jdWJpY29zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMudm9sdW1lX2RlY2ltZXRyb3NfY3ViaWNvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLnZvbHVtZV9tZXRyb3NfY3ViaWNvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLnZvbHVtZV9kZWNhbWV0cm9zX2N1Ymljb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy52b2x1bWVfaGVjdG9tZXRyb3NfY3ViaWNvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLnZvbHVtZV9raWxvbWV0cm9zX2N1Ymljb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy52b2x1bWVfbWVnYW1ldHJvc19jdWJpY29zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMudm9sdW1lX2dpZ2FtZXRyb3NfY3ViaWNvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLnZvbHVtZV90ZXJhbWV0cm9zX2N1Ymljb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy52b2x1bWVfcGV0YW1ldHJvc19jdWJpY29zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMudm9sdW1lX2V4YW1ldHJvc19jdWJpY29zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMudm9sdW1lX3pldHRhbWV0cm9zX2N1Ymljb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy52b2x1bWVfeW90dGFtZXRyb3NfY3ViaWNvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLnZvbHVtZV9yb25uYW1ldHJvc19jdWJpY29zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMudm9sdW1lX3F1ZXR0YW1ldHJvc19jdWJpY29zOlxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVW5rb3duVW5pdENvbnZlcnNvcihnbywgdG8pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBFRGljaW9uYXJpb1VuaWRhZGVzLmNvbXB1dGFjaW9uYWlzX21lZ2FieXRlczpcclxuICAgICAgICBzd2l0Y2ggKGdvKSB7XHJcbiAgICAgICAgICBjYXNlIEVEaWNpb25hcmlvVW5pZGFkZXMuY29tcHV0YWNpb25haXNfYml0czpcclxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSAqIDggKiAxMDAwICoqIDI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBFRGljaW9uYXJpb1VuaWRhZGVzLmNvbXB1dGFjaW9uYWlzX2J5dGVzOlxyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlICogMTAwMCAqKiAyO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgRURpY2lvbmFyaW9VbmlkYWRlcy5jb21wdXRhY2lvbmFpc19raWxvYnl0ZXM6XHJcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgKiAxMDAwO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgRURpY2lvbmFyaW9VbmlkYWRlcy5jb21wdXRhY2lvbmFpc19naWdhYnl0ZXM6XHJcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgLyAxMDAwO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgRURpY2lvbmFyaW9VbmlkYWRlcy5jb21wdXRhY2lvbmFpc190ZXJhYnl0ZXM6XHJcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgLyAxMDAwICoqIDI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBFRGljaW9uYXJpb1VuaWRhZGVzLmNvbXB1dGFjaW9uYWlzX3BldGFieXRlczpcclxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSAvIDEwMDAgKiogMztcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIEVEaWNpb25hcmlvVW5pZGFkZXMuY29tcHV0YWNpb25haXNfZXhhYnl0ZXM6XHJcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgLyAxMDAwICoqIDQ7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBFRGljaW9uYXJpb1VuaWRhZGVzLmNvbXB1dGFjaW9uYWlzX3pldHRhYnl0ZXM6XHJcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgLyAxMDAwICoqIDU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBFRGljaW9uYXJpb1VuaWRhZGVzLmNvbXB1dGFjaW9uYWlzX3lvdHRhYnl0ZXM6XHJcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgLyAxMDAwICoqIDY7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBFRGljaW9uYXJpb1VuaWRhZGVzLmNvbXB1dGFjaW9uYWlzX2JpbmFyaW9fYnl0ZXM6XHJcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgKiAxMDI0ICoqIDI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBFRGljaW9uYXJpb1VuaWRhZGVzLmNvbXB1dGFjaW9uYWlzX2JpbmFyaW9fa2liaWJ5dGVzOlxyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlICogMTAyNDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIEVEaWNpb25hcmlvVW5pZGFkZXMuY29tcHV0YWNpb25haXNfYmluYXJpb19tZWJpYnl0ZXM6XHJcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBFRGljaW9uYXJpb1VuaWRhZGVzLmNvbXB1dGFjaW9uYWlzX2JpbmFyaW9fZ2liaWJ5dGVzOlxyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlIC8gMTAyNDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIEVEaWNpb25hcmlvVW5pZGFkZXMuY29tcHV0YWNpb25haXNfYmluYXJpb190ZWJpYnl0ZXM6XHJcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgLyAxMDI0ICoqIDI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBFRGljaW9uYXJpb1VuaWRhZGVzLmNvbXB1dGFjaW9uYWlzX2JpbmFyaW9fcGViaWJ5dGVzOlxyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlIC8gMTAyNCAqKiAzO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgRURpY2lvbmFyaW9VbmlkYWRlcy5jb21wdXRhY2lvbmFpc19iaW5hcmlvX2V4YmlieXRlczpcclxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSAvIDEwMjQgKiogNDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIEVEaWNpb25hcmlvVW5pZGFkZXMuY29tcHV0YWNpb25haXNfYmluYXJpb196ZWJpYnl0ZXM6XHJcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgLyAxMDI0ICoqIDU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBFRGljaW9uYXJpb1VuaWRhZGVzLmNvbXB1dGFjaW9uYWlzX2JpbmFyaW9feW9iaWJ5dGVzOlxyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlIC8gMTAyNCAqKiA2O1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgRURpY2lvbmFyaW9VbmlkYWRlcy5saW5lYXJlc19xdWVjdG9tZXRyb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5saW5lYXJlc19yb250b21ldHJvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmxpbmVhcmVzX3lvY3RvbWV0cm9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMubGluZWFyZXNfemVwdG9tZXRyb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5saW5lYXJlc19hdHRvbWV0cm9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMubGluZWFyZXNfZmVtdG9tZXRyb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5saW5lYXJlc19waWNvbWV0cm9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMubGluZWFyZXNfbmFub21ldHJvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmxpbmVhcmVzX21pY3JvbWV0cm9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMubGluZWFyZXNfbWlsaW1ldHJvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmxpbmVhcmVzX2NlbnRpbWV0cm9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMubGluZWFyZXNfZGVjaW1ldHJvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmxpbmVhcmVzX21ldHJvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmxpbmVhcmVzX2RlY2FtZXRyb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5saW5lYXJlc19oZWN0b21ldHJvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmxpbmVhcmVzX2tpbG9tZXRyb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5saW5lYXJlc19tZWdhbWV0cm9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMubGluZWFyZXNfZ2lnYW1ldHJvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmxpbmVhcmVzX3RlcmFtZXRyb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5saW5lYXJlc19wZXRhbWV0cm9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMubGluZWFyZXNfZXhhbWV0cm9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMubGluZWFyZXNfemV0dGFtZXRyb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5saW5lYXJlc195b3R0YW1ldHJvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmxpbmVhcmVzX3Jvbm5hbWV0cm9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMubGluZWFyZXNfcXVldHRhbWV0cm9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMuYXJlYV9xdWVjdG9tZXRyb3NfcXVhZHJhZG9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMuYXJlYV9yb250b21ldHJvc19xdWFkcmFkb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5hcmVhX3lvY3RvbWV0cm9zX3F1YWRyYWRvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmFyZWFfemVwdG9tZXRyb3NfcXVhZHJhZG9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMuYXJlYV9hdHRvbWV0cm9zX3F1YWRyYWRvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmFyZWFfZmVtdG9tZXRyb3NfcXVhZHJhZG9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMuYXJlYV9waWNvbWV0cm9zX3F1YWRyYWRvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmFyZWFfbmFub21ldHJvc19xdWFkcmFkb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5hcmVhX21pY3JvbWV0cm9zX3F1YWRyYWRvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmFyZWFfbWlsaW1ldHJvc19xdWFkcmFkb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5hcmVhX2NlbnRpbWV0cm9zX3F1YWRyYWRvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmFyZWFfZGVjaW1ldHJvc19xdWFkcmFkb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5hcmVhX21ldHJvc19xdWFkcmFkb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5hcmVhX2RlY2FtZXRyb3NfcXVhZHJhZG9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMuYXJlYV9oZWN0b21ldHJvc19xdWFkcmFkb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5hcmVhX2tpbG9tZXRyb3NfcXVhZHJhZG9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMuYXJlYV9tZWdhbWV0cm9zX3F1YWRyYWRvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmFyZWFfZ2lnYW1ldHJvc19xdWFkcmFkb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5hcmVhX3RlcmFtZXRyb3NfcXVhZHJhZG9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMuYXJlYV9wZXRhbWV0cm9zX3F1YWRyYWRvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmFyZWFfZXhhbWV0cm9zX3F1YWRyYWRvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmFyZWFfemV0dGFtZXRyb3NfcXVhZHJhZG9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMuYXJlYV95b3R0YW1ldHJvc19xdWFkcmFkb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5hcmVhX3Jvbm5hbWV0cm9zX3F1YWRyYWRvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmFyZWFfcXVldHRhbWV0cm9zX3F1YWRyYWRvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLnZvbHVtZV9xdWVjdG9tZXRyb3NfY3ViaWNvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLnZvbHVtZV9yb250b21ldHJvc19jdWJpY29zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMudm9sdW1lX3lvY3RvbWV0cm9zX2N1Ymljb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy52b2x1bWVfemVwdG9tZXRyb3NfY3ViaWNvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLnZvbHVtZV9hdHRvbWV0cm9zX2N1Ymljb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy52b2x1bWVfZmVtdG9tZXRyb3NfY3ViaWNvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLnZvbHVtZV9waWNvbWV0cm9zX2N1Ymljb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy52b2x1bWVfbmFub21ldHJvc19jdWJpY29zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMudm9sdW1lX21pY3JvbWV0cm9zX2N1Ymljb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy52b2x1bWVfbWlsaW1ldHJvc19jdWJpY29zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMudm9sdW1lX2NlbnRpbWV0cm9zX2N1Ymljb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy52b2x1bWVfZGVjaW1ldHJvc19jdWJpY29zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMudm9sdW1lX21ldHJvc19jdWJpY29zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMudm9sdW1lX2RlY2FtZXRyb3NfY3ViaWNvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLnZvbHVtZV9oZWN0b21ldHJvc19jdWJpY29zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMudm9sdW1lX2tpbG9tZXRyb3NfY3ViaWNvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLnZvbHVtZV9tZWdhbWV0cm9zX2N1Ymljb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy52b2x1bWVfZ2lnYW1ldHJvc19jdWJpY29zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMudm9sdW1lX3RlcmFtZXRyb3NfY3ViaWNvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLnZvbHVtZV9wZXRhbWV0cm9zX2N1Ymljb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy52b2x1bWVfZXhhbWV0cm9zX2N1Ymljb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy52b2x1bWVfemV0dGFtZXRyb3NfY3ViaWNvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLnZvbHVtZV95b3R0YW1ldHJvc19jdWJpY29zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMudm9sdW1lX3Jvbm5hbWV0cm9zX2N1Ymljb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy52b2x1bWVfcXVldHRhbWV0cm9zX2N1Ymljb3M6XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBVbmtvd25Vbml0Q29udmVyc29yKGdvLCB0byk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEVEaWNpb25hcmlvVW5pZGFkZXMuY29tcHV0YWNpb25haXNfZ2lnYWJ5dGVzOlxyXG4gICAgICAgIHN3aXRjaCAoZ28pIHtcclxuICAgICAgICAgIGNhc2UgRURpY2lvbmFyaW9VbmlkYWRlcy5jb21wdXRhY2lvbmFpc19iaXRzOlxyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlICogOCAqIDEwMDAgKiogMztcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIEVEaWNpb25hcmlvVW5pZGFkZXMuY29tcHV0YWNpb25haXNfYnl0ZXM6XHJcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgKiAxMDAwICoqIDM7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBFRGljaW9uYXJpb1VuaWRhZGVzLmNvbXB1dGFjaW9uYWlzX2tpbG9ieXRlczpcclxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSAqIDEwMDAgKiogMjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIEVEaWNpb25hcmlvVW5pZGFkZXMuY29tcHV0YWNpb25haXNfbWVnYWJ5dGVzOlxyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlICogMTAwMDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIEVEaWNpb25hcmlvVW5pZGFkZXMuY29tcHV0YWNpb25haXNfdGVyYWJ5dGVzOlxyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlIC8gMTAwMDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIEVEaWNpb25hcmlvVW5pZGFkZXMuY29tcHV0YWNpb25haXNfcGV0YWJ5dGVzOlxyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlIC8gMTAwMCAqKiAyO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgRURpY2lvbmFyaW9VbmlkYWRlcy5jb21wdXRhY2lvbmFpc19leGFieXRlczpcclxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSAvIDEwMDAgKiogMztcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIEVEaWNpb25hcmlvVW5pZGFkZXMuY29tcHV0YWNpb25haXNfemV0dGFieXRlczpcclxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSAvIDEwMDAgKiogNDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIEVEaWNpb25hcmlvVW5pZGFkZXMuY29tcHV0YWNpb25haXNfeW90dGFieXRlczpcclxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSAvIDEwMDAgKiogNTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIEVEaWNpb25hcmlvVW5pZGFkZXMuY29tcHV0YWNpb25haXNfYmluYXJpb19ieXRlczpcclxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSAqIDEwMjQgKiogMztcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIEVEaWNpb25hcmlvVW5pZGFkZXMuY29tcHV0YWNpb25haXNfYmluYXJpb19raWJpYnl0ZXM6XHJcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgKiAxMDI0ICoqIDI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBFRGljaW9uYXJpb1VuaWRhZGVzLmNvbXB1dGFjaW9uYWlzX2JpbmFyaW9fbWViaWJ5dGVzOlxyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlICogMTAyNDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIEVEaWNpb25hcmlvVW5pZGFkZXMuY29tcHV0YWNpb25haXNfYmluYXJpb19naWJpYnl0ZXM6XHJcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBFRGljaW9uYXJpb1VuaWRhZGVzLmNvbXB1dGFjaW9uYWlzX2JpbmFyaW9fdGViaWJ5dGVzOlxyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlIC8gMTAyNDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIEVEaWNpb25hcmlvVW5pZGFkZXMuY29tcHV0YWNpb25haXNfYmluYXJpb19wZWJpYnl0ZXM6XHJcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgLyAxMDI0ICoqIDI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBFRGljaW9uYXJpb1VuaWRhZGVzLmNvbXB1dGFjaW9uYWlzX2JpbmFyaW9fZXhiaWJ5dGVzOlxyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlIC8gMTAyNCAqKiAzO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgRURpY2lvbmFyaW9VbmlkYWRlcy5jb21wdXRhY2lvbmFpc19iaW5hcmlvX3plYmlieXRlczpcclxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSAvIDEwMjQgKiogNDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIEVEaWNpb25hcmlvVW5pZGFkZXMuY29tcHV0YWNpb25haXNfYmluYXJpb195b2JpYnl0ZXM6XHJcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgLyAxMDI0ICoqIDU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBFRGljaW9uYXJpb1VuaWRhZGVzLmxpbmVhcmVzX3F1ZWN0b21ldHJvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmxpbmVhcmVzX3JvbnRvbWV0cm9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMubGluZWFyZXNfeW9jdG9tZXRyb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5saW5lYXJlc196ZXB0b21ldHJvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmxpbmVhcmVzX2F0dG9tZXRyb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5saW5lYXJlc19mZW10b21ldHJvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmxpbmVhcmVzX3BpY29tZXRyb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5saW5lYXJlc19uYW5vbWV0cm9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMubGluZWFyZXNfbWljcm9tZXRyb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5saW5lYXJlc19taWxpbWV0cm9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMubGluZWFyZXNfY2VudGltZXRyb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5saW5lYXJlc19kZWNpbWV0cm9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMubGluZWFyZXNfbWV0cm9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMubGluZWFyZXNfZGVjYW1ldHJvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmxpbmVhcmVzX2hlY3RvbWV0cm9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMubGluZWFyZXNfa2lsb21ldHJvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmxpbmVhcmVzX21lZ2FtZXRyb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5saW5lYXJlc19naWdhbWV0cm9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMubGluZWFyZXNfdGVyYW1ldHJvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmxpbmVhcmVzX3BldGFtZXRyb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5saW5lYXJlc19leGFtZXRyb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5saW5lYXJlc196ZXR0YW1ldHJvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmxpbmVhcmVzX3lvdHRhbWV0cm9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMubGluZWFyZXNfcm9ubmFtZXRyb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5saW5lYXJlc19xdWV0dGFtZXRyb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5hcmVhX3F1ZWN0b21ldHJvc19xdWFkcmFkb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5hcmVhX3JvbnRvbWV0cm9zX3F1YWRyYWRvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmFyZWFfeW9jdG9tZXRyb3NfcXVhZHJhZG9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMuYXJlYV96ZXB0b21ldHJvc19xdWFkcmFkb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5hcmVhX2F0dG9tZXRyb3NfcXVhZHJhZG9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMuYXJlYV9mZW10b21ldHJvc19xdWFkcmFkb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5hcmVhX3BpY29tZXRyb3NfcXVhZHJhZG9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMuYXJlYV9uYW5vbWV0cm9zX3F1YWRyYWRvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmFyZWFfbWljcm9tZXRyb3NfcXVhZHJhZG9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMuYXJlYV9taWxpbWV0cm9zX3F1YWRyYWRvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmFyZWFfY2VudGltZXRyb3NfcXVhZHJhZG9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMuYXJlYV9kZWNpbWV0cm9zX3F1YWRyYWRvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmFyZWFfbWV0cm9zX3F1YWRyYWRvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmFyZWFfZGVjYW1ldHJvc19xdWFkcmFkb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5hcmVhX2hlY3RvbWV0cm9zX3F1YWRyYWRvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmFyZWFfa2lsb21ldHJvc19xdWFkcmFkb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5hcmVhX21lZ2FtZXRyb3NfcXVhZHJhZG9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMuYXJlYV9naWdhbWV0cm9zX3F1YWRyYWRvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmFyZWFfdGVyYW1ldHJvc19xdWFkcmFkb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5hcmVhX3BldGFtZXRyb3NfcXVhZHJhZG9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMuYXJlYV9leGFtZXRyb3NfcXVhZHJhZG9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMuYXJlYV96ZXR0YW1ldHJvc19xdWFkcmFkb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5hcmVhX3lvdHRhbWV0cm9zX3F1YWRyYWRvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmFyZWFfcm9ubmFtZXRyb3NfcXVhZHJhZG9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMuYXJlYV9xdWV0dGFtZXRyb3NfcXVhZHJhZG9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMudm9sdW1lX3F1ZWN0b21ldHJvc19jdWJpY29zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMudm9sdW1lX3JvbnRvbWV0cm9zX2N1Ymljb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy52b2x1bWVfeW9jdG9tZXRyb3NfY3ViaWNvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLnZvbHVtZV96ZXB0b21ldHJvc19jdWJpY29zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMudm9sdW1lX2F0dG9tZXRyb3NfY3ViaWNvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLnZvbHVtZV9mZW10b21ldHJvc19jdWJpY29zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMudm9sdW1lX3BpY29tZXRyb3NfY3ViaWNvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLnZvbHVtZV9uYW5vbWV0cm9zX2N1Ymljb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy52b2x1bWVfbWljcm9tZXRyb3NfY3ViaWNvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLnZvbHVtZV9taWxpbWV0cm9zX2N1Ymljb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy52b2x1bWVfY2VudGltZXRyb3NfY3ViaWNvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLnZvbHVtZV9kZWNpbWV0cm9zX2N1Ymljb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy52b2x1bWVfbWV0cm9zX2N1Ymljb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy52b2x1bWVfZGVjYW1ldHJvc19jdWJpY29zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMudm9sdW1lX2hlY3RvbWV0cm9zX2N1Ymljb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy52b2x1bWVfa2lsb21ldHJvc19jdWJpY29zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMudm9sdW1lX21lZ2FtZXRyb3NfY3ViaWNvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLnZvbHVtZV9naWdhbWV0cm9zX2N1Ymljb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy52b2x1bWVfdGVyYW1ldHJvc19jdWJpY29zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMudm9sdW1lX3BldGFtZXRyb3NfY3ViaWNvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLnZvbHVtZV9leGFtZXRyb3NfY3ViaWNvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLnZvbHVtZV96ZXR0YW1ldHJvc19jdWJpY29zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMudm9sdW1lX3lvdHRhbWV0cm9zX2N1Ymljb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy52b2x1bWVfcm9ubmFtZXRyb3NfY3ViaWNvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLnZvbHVtZV9xdWV0dGFtZXRyb3NfY3ViaWNvczpcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFVua293blVuaXRDb252ZXJzb3IoZ28sIHRvKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgRURpY2lvbmFyaW9VbmlkYWRlcy5jb21wdXRhY2lvbmFpc190ZXJhYnl0ZXM6XHJcbiAgICAgICAgc3dpdGNoIChnbykge1xyXG4gICAgICAgICAgY2FzZSBFRGljaW9uYXJpb1VuaWRhZGVzLmNvbXB1dGFjaW9uYWlzX2JpdHM6XHJcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgKiA4ICogMTAwMCAqKiA0O1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgRURpY2lvbmFyaW9VbmlkYWRlcy5jb21wdXRhY2lvbmFpc19ieXRlczpcclxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSAqIDEwMDAgKiogNDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIEVEaWNpb25hcmlvVW5pZGFkZXMuY29tcHV0YWNpb25haXNfa2lsb2J5dGVzOlxyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlICogMTAwMCAqKiAzO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgRURpY2lvbmFyaW9VbmlkYWRlcy5jb21wdXRhY2lvbmFpc19tZWdhYnl0ZXM6XHJcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgKiAxMDAwICoqIDI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBFRGljaW9uYXJpb1VuaWRhZGVzLmNvbXB1dGFjaW9uYWlzX2dpZ2FieXRlczpcclxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSAqIDEwMDA7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBFRGljaW9uYXJpb1VuaWRhZGVzLmNvbXB1dGFjaW9uYWlzX3BldGFieXRlczpcclxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSAvIDEwMDA7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBFRGljaW9uYXJpb1VuaWRhZGVzLmNvbXB1dGFjaW9uYWlzX2V4YWJ5dGVzOlxyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlIC8gMTAwMCAqKiAyO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgRURpY2lvbmFyaW9VbmlkYWRlcy5jb21wdXRhY2lvbmFpc196ZXR0YWJ5dGVzOlxyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlIC8gMTAwMCAqKiAzO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgRURpY2lvbmFyaW9VbmlkYWRlcy5jb21wdXRhY2lvbmFpc195b3R0YWJ5dGVzOlxyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlIC8gMTAwMCAqKiA0O1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgRURpY2lvbmFyaW9VbmlkYWRlcy5jb21wdXRhY2lvbmFpc19iaW5hcmlvX2J5dGVzOlxyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlICogMTAyNCAqKiA0O1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgRURpY2lvbmFyaW9VbmlkYWRlcy5jb21wdXRhY2lvbmFpc19iaW5hcmlvX2tpYmlieXRlczpcclxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSAqIDEwMjQgKiogMztcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIEVEaWNpb25hcmlvVW5pZGFkZXMuY29tcHV0YWNpb25haXNfYmluYXJpb19tZWJpYnl0ZXM6XHJcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgKiAxMDI0ICoqIDI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBFRGljaW9uYXJpb1VuaWRhZGVzLmNvbXB1dGFjaW9uYWlzX2JpbmFyaW9fZ2liaWJ5dGVzOlxyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlICogMTAyNDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIEVEaWNpb25hcmlvVW5pZGFkZXMuY29tcHV0YWNpb25haXNfYmluYXJpb190ZWJpYnl0ZXM6XHJcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBFRGljaW9uYXJpb1VuaWRhZGVzLmNvbXB1dGFjaW9uYWlzX2JpbmFyaW9fcGViaWJ5dGVzOlxyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlIC8gMTAyNDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIEVEaWNpb25hcmlvVW5pZGFkZXMuY29tcHV0YWNpb25haXNfYmluYXJpb19leGJpYnl0ZXM6XHJcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgLyAxMDI0ICoqIDI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBFRGljaW9uYXJpb1VuaWRhZGVzLmNvbXB1dGFjaW9uYWlzX2JpbmFyaW9femViaWJ5dGVzOlxyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlIC8gMTAyNCAqKiAzO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgRURpY2lvbmFyaW9VbmlkYWRlcy5jb21wdXRhY2lvbmFpc19iaW5hcmlvX3lvYmlieXRlczpcclxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSAvIDEwMjQgKiogNDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIEVEaWNpb25hcmlvVW5pZGFkZXMubGluZWFyZXNfcXVlY3RvbWV0cm9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMubGluZWFyZXNfcm9udG9tZXRyb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5saW5lYXJlc195b2N0b21ldHJvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmxpbmVhcmVzX3plcHRvbWV0cm9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMubGluZWFyZXNfYXR0b21ldHJvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmxpbmVhcmVzX2ZlbXRvbWV0cm9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMubGluZWFyZXNfcGljb21ldHJvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmxpbmVhcmVzX25hbm9tZXRyb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5saW5lYXJlc19taWNyb21ldHJvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmxpbmVhcmVzX21pbGltZXRyb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5saW5lYXJlc19jZW50aW1ldHJvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmxpbmVhcmVzX2RlY2ltZXRyb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5saW5lYXJlc19tZXRyb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5saW5lYXJlc19kZWNhbWV0cm9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMubGluZWFyZXNfaGVjdG9tZXRyb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5saW5lYXJlc19raWxvbWV0cm9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMubGluZWFyZXNfbWVnYW1ldHJvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmxpbmVhcmVzX2dpZ2FtZXRyb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5saW5lYXJlc190ZXJhbWV0cm9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMubGluZWFyZXNfcGV0YW1ldHJvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmxpbmVhcmVzX2V4YW1ldHJvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmxpbmVhcmVzX3pldHRhbWV0cm9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMubGluZWFyZXNfeW90dGFtZXRyb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5saW5lYXJlc19yb25uYW1ldHJvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmxpbmVhcmVzX3F1ZXR0YW1ldHJvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmFyZWFfcXVlY3RvbWV0cm9zX3F1YWRyYWRvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmFyZWFfcm9udG9tZXRyb3NfcXVhZHJhZG9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMuYXJlYV95b2N0b21ldHJvc19xdWFkcmFkb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5hcmVhX3plcHRvbWV0cm9zX3F1YWRyYWRvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmFyZWFfYXR0b21ldHJvc19xdWFkcmFkb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5hcmVhX2ZlbXRvbWV0cm9zX3F1YWRyYWRvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmFyZWFfcGljb21ldHJvc19xdWFkcmFkb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5hcmVhX25hbm9tZXRyb3NfcXVhZHJhZG9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMuYXJlYV9taWNyb21ldHJvc19xdWFkcmFkb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5hcmVhX21pbGltZXRyb3NfcXVhZHJhZG9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMuYXJlYV9jZW50aW1ldHJvc19xdWFkcmFkb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5hcmVhX2RlY2ltZXRyb3NfcXVhZHJhZG9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMuYXJlYV9tZXRyb3NfcXVhZHJhZG9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMuYXJlYV9kZWNhbWV0cm9zX3F1YWRyYWRvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmFyZWFfaGVjdG9tZXRyb3NfcXVhZHJhZG9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMuYXJlYV9raWxvbWV0cm9zX3F1YWRyYWRvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmFyZWFfbWVnYW1ldHJvc19xdWFkcmFkb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5hcmVhX2dpZ2FtZXRyb3NfcXVhZHJhZG9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMuYXJlYV90ZXJhbWV0cm9zX3F1YWRyYWRvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmFyZWFfcGV0YW1ldHJvc19xdWFkcmFkb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5hcmVhX2V4YW1ldHJvc19xdWFkcmFkb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5hcmVhX3pldHRhbWV0cm9zX3F1YWRyYWRvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmFyZWFfeW90dGFtZXRyb3NfcXVhZHJhZG9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMuYXJlYV9yb25uYW1ldHJvc19xdWFkcmFkb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5hcmVhX3F1ZXR0YW1ldHJvc19xdWFkcmFkb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy52b2x1bWVfcXVlY3RvbWV0cm9zX2N1Ymljb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy52b2x1bWVfcm9udG9tZXRyb3NfY3ViaWNvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLnZvbHVtZV95b2N0b21ldHJvc19jdWJpY29zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMudm9sdW1lX3plcHRvbWV0cm9zX2N1Ymljb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy52b2x1bWVfYXR0b21ldHJvc19jdWJpY29zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMudm9sdW1lX2ZlbXRvbWV0cm9zX2N1Ymljb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy52b2x1bWVfcGljb21ldHJvc19jdWJpY29zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMudm9sdW1lX25hbm9tZXRyb3NfY3ViaWNvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLnZvbHVtZV9taWNyb21ldHJvc19jdWJpY29zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMudm9sdW1lX21pbGltZXRyb3NfY3ViaWNvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLnZvbHVtZV9jZW50aW1ldHJvc19jdWJpY29zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMudm9sdW1lX2RlY2ltZXRyb3NfY3ViaWNvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLnZvbHVtZV9tZXRyb3NfY3ViaWNvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLnZvbHVtZV9kZWNhbWV0cm9zX2N1Ymljb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy52b2x1bWVfaGVjdG9tZXRyb3NfY3ViaWNvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLnZvbHVtZV9raWxvbWV0cm9zX2N1Ymljb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy52b2x1bWVfbWVnYW1ldHJvc19jdWJpY29zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMudm9sdW1lX2dpZ2FtZXRyb3NfY3ViaWNvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLnZvbHVtZV90ZXJhbWV0cm9zX2N1Ymljb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy52b2x1bWVfcGV0YW1ldHJvc19jdWJpY29zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMudm9sdW1lX2V4YW1ldHJvc19jdWJpY29zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMudm9sdW1lX3pldHRhbWV0cm9zX2N1Ymljb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy52b2x1bWVfeW90dGFtZXRyb3NfY3ViaWNvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLnZvbHVtZV9yb25uYW1ldHJvc19jdWJpY29zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMudm9sdW1lX3F1ZXR0YW1ldHJvc19jdWJpY29zOlxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVW5rb3duVW5pdENvbnZlcnNvcihnbywgdG8pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBFRGljaW9uYXJpb1VuaWRhZGVzLmNvbXB1dGFjaW9uYWlzX3BldGFieXRlczpcclxuICAgICAgICBzd2l0Y2ggKGdvKSB7XHJcbiAgICAgICAgICBjYXNlIEVEaWNpb25hcmlvVW5pZGFkZXMuY29tcHV0YWNpb25haXNfYml0czpcclxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSAqIDggKiAxMDAwICoqIDU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBFRGljaW9uYXJpb1VuaWRhZGVzLmNvbXB1dGFjaW9uYWlzX2J5dGVzOlxyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlICogMTAwMCAqKiA1O1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgRURpY2lvbmFyaW9VbmlkYWRlcy5jb21wdXRhY2lvbmFpc19raWxvYnl0ZXM6XHJcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgKiAxMDAwICoqIDQ7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBFRGljaW9uYXJpb1VuaWRhZGVzLmNvbXB1dGFjaW9uYWlzX21lZ2FieXRlczpcclxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSAqIDEwMDAgKiogMztcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIEVEaWNpb25hcmlvVW5pZGFkZXMuY29tcHV0YWNpb25haXNfZ2lnYWJ5dGVzOlxyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlICogMTAwMCAqKiAyO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgRURpY2lvbmFyaW9VbmlkYWRlcy5jb21wdXRhY2lvbmFpc190ZXJhYnl0ZXM6XHJcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgKiAxMDAwO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgRURpY2lvbmFyaW9VbmlkYWRlcy5jb21wdXRhY2lvbmFpc19leGFieXRlczpcclxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSAvIDEwMDA7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBFRGljaW9uYXJpb1VuaWRhZGVzLmNvbXB1dGFjaW9uYWlzX3pldHRhYnl0ZXM6XHJcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgLyAxMDAwICoqIDI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBFRGljaW9uYXJpb1VuaWRhZGVzLmNvbXB1dGFjaW9uYWlzX3lvdHRhYnl0ZXM6XHJcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgLyAxMDAwICoqIDM7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBFRGljaW9uYXJpb1VuaWRhZGVzLmNvbXB1dGFjaW9uYWlzX2JpbmFyaW9fYnl0ZXM6XHJcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgKiAxMDI0ICoqIDU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBFRGljaW9uYXJpb1VuaWRhZGVzLmNvbXB1dGFjaW9uYWlzX2JpbmFyaW9fa2liaWJ5dGVzOlxyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlICogMTAyNCAqKiA0O1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgRURpY2lvbmFyaW9VbmlkYWRlcy5jb21wdXRhY2lvbmFpc19iaW5hcmlvX21lYmlieXRlczpcclxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSAqIDEwMjQgKiogMztcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIEVEaWNpb25hcmlvVW5pZGFkZXMuY29tcHV0YWNpb25haXNfYmluYXJpb19naWJpYnl0ZXM6XHJcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgKiAxMDI0ICoqIDI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBFRGljaW9uYXJpb1VuaWRhZGVzLmNvbXB1dGFjaW9uYWlzX2JpbmFyaW9fdGViaWJ5dGVzOlxyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlICogMTAyNDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIEVEaWNpb25hcmlvVW5pZGFkZXMuY29tcHV0YWNpb25haXNfYmluYXJpb19wZWJpYnl0ZXM6XHJcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBFRGljaW9uYXJpb1VuaWRhZGVzLmNvbXB1dGFjaW9uYWlzX2JpbmFyaW9fZXhiaWJ5dGVzOlxyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlIC8gMTAyNDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIEVEaWNpb25hcmlvVW5pZGFkZXMuY29tcHV0YWNpb25haXNfYmluYXJpb196ZWJpYnl0ZXM6XHJcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgLyAxMDI0ICoqIDI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBFRGljaW9uYXJpb1VuaWRhZGVzLmNvbXB1dGFjaW9uYWlzX2JpbmFyaW9feW9iaWJ5dGVzOlxyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlIC8gMTAyNCAqKiAzO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgRURpY2lvbmFyaW9VbmlkYWRlcy5saW5lYXJlc19xdWVjdG9tZXRyb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5saW5lYXJlc19yb250b21ldHJvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmxpbmVhcmVzX3lvY3RvbWV0cm9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMubGluZWFyZXNfemVwdG9tZXRyb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5saW5lYXJlc19hdHRvbWV0cm9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMubGluZWFyZXNfZmVtdG9tZXRyb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5saW5lYXJlc19waWNvbWV0cm9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMubGluZWFyZXNfbmFub21ldHJvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmxpbmVhcmVzX21pY3JvbWV0cm9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMubGluZWFyZXNfbWlsaW1ldHJvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmxpbmVhcmVzX2NlbnRpbWV0cm9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMubGluZWFyZXNfZGVjaW1ldHJvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmxpbmVhcmVzX21ldHJvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmxpbmVhcmVzX2RlY2FtZXRyb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5saW5lYXJlc19oZWN0b21ldHJvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmxpbmVhcmVzX2tpbG9tZXRyb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5saW5lYXJlc19tZWdhbWV0cm9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMubGluZWFyZXNfZ2lnYW1ldHJvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmxpbmVhcmVzX3RlcmFtZXRyb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5saW5lYXJlc19wZXRhbWV0cm9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMubGluZWFyZXNfZXhhbWV0cm9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMubGluZWFyZXNfemV0dGFtZXRyb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5saW5lYXJlc195b3R0YW1ldHJvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmxpbmVhcmVzX3Jvbm5hbWV0cm9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMubGluZWFyZXNfcXVldHRhbWV0cm9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMuYXJlYV9xdWVjdG9tZXRyb3NfcXVhZHJhZG9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMuYXJlYV9yb250b21ldHJvc19xdWFkcmFkb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5hcmVhX3lvY3RvbWV0cm9zX3F1YWRyYWRvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmFyZWFfemVwdG9tZXRyb3NfcXVhZHJhZG9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMuYXJlYV9hdHRvbWV0cm9zX3F1YWRyYWRvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmFyZWFfZmVtdG9tZXRyb3NfcXVhZHJhZG9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMuYXJlYV9waWNvbWV0cm9zX3F1YWRyYWRvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmFyZWFfbmFub21ldHJvc19xdWFkcmFkb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5hcmVhX21pY3JvbWV0cm9zX3F1YWRyYWRvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmFyZWFfbWlsaW1ldHJvc19xdWFkcmFkb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5hcmVhX2NlbnRpbWV0cm9zX3F1YWRyYWRvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmFyZWFfZGVjaW1ldHJvc19xdWFkcmFkb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5hcmVhX21ldHJvc19xdWFkcmFkb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5hcmVhX2RlY2FtZXRyb3NfcXVhZHJhZG9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMuYXJlYV9oZWN0b21ldHJvc19xdWFkcmFkb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5hcmVhX2tpbG9tZXRyb3NfcXVhZHJhZG9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMuYXJlYV9tZWdhbWV0cm9zX3F1YWRyYWRvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmFyZWFfZ2lnYW1ldHJvc19xdWFkcmFkb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5hcmVhX3RlcmFtZXRyb3NfcXVhZHJhZG9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMuYXJlYV9wZXRhbWV0cm9zX3F1YWRyYWRvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmFyZWFfZXhhbWV0cm9zX3F1YWRyYWRvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmFyZWFfemV0dGFtZXRyb3NfcXVhZHJhZG9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMuYXJlYV95b3R0YW1ldHJvc19xdWFkcmFkb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5hcmVhX3Jvbm5hbWV0cm9zX3F1YWRyYWRvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmFyZWFfcXVldHRhbWV0cm9zX3F1YWRyYWRvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLnZvbHVtZV9xdWVjdG9tZXRyb3NfY3ViaWNvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLnZvbHVtZV9yb250b21ldHJvc19jdWJpY29zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMudm9sdW1lX3lvY3RvbWV0cm9zX2N1Ymljb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy52b2x1bWVfemVwdG9tZXRyb3NfY3ViaWNvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLnZvbHVtZV9hdHRvbWV0cm9zX2N1Ymljb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy52b2x1bWVfZmVtdG9tZXRyb3NfY3ViaWNvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLnZvbHVtZV9waWNvbWV0cm9zX2N1Ymljb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy52b2x1bWVfbmFub21ldHJvc19jdWJpY29zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMudm9sdW1lX21pY3JvbWV0cm9zX2N1Ymljb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy52b2x1bWVfbWlsaW1ldHJvc19jdWJpY29zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMudm9sdW1lX2NlbnRpbWV0cm9zX2N1Ymljb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy52b2x1bWVfZGVjaW1ldHJvc19jdWJpY29zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMudm9sdW1lX21ldHJvc19jdWJpY29zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMudm9sdW1lX2RlY2FtZXRyb3NfY3ViaWNvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLnZvbHVtZV9oZWN0b21ldHJvc19jdWJpY29zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMudm9sdW1lX2tpbG9tZXRyb3NfY3ViaWNvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLnZvbHVtZV9tZWdhbWV0cm9zX2N1Ymljb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy52b2x1bWVfZ2lnYW1ldHJvc19jdWJpY29zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMudm9sdW1lX3RlcmFtZXRyb3NfY3ViaWNvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLnZvbHVtZV9wZXRhbWV0cm9zX2N1Ymljb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy52b2x1bWVfZXhhbWV0cm9zX2N1Ymljb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy52b2x1bWVfemV0dGFtZXRyb3NfY3ViaWNvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLnZvbHVtZV95b3R0YW1ldHJvc19jdWJpY29zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMudm9sdW1lX3Jvbm5hbWV0cm9zX2N1Ymljb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy52b2x1bWVfcXVldHRhbWV0cm9zX2N1Ymljb3M6XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBVbmtvd25Vbml0Q29udmVyc29yKGdvLCB0byk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEVEaWNpb25hcmlvVW5pZGFkZXMuY29tcHV0YWNpb25haXNfZXhhYnl0ZXM6XHJcbiAgICAgICAgc3dpdGNoIChnbykge1xyXG4gICAgICAgICAgY2FzZSBFRGljaW9uYXJpb1VuaWRhZGVzLmNvbXB1dGFjaW9uYWlzX2JpdHM6XHJcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgKiA4ICogMTAwMCAqKiA2O1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgRURpY2lvbmFyaW9VbmlkYWRlcy5jb21wdXRhY2lvbmFpc19ieXRlczpcclxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSAqIDEwMDAgKiogNjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIEVEaWNpb25hcmlvVW5pZGFkZXMuY29tcHV0YWNpb25haXNfa2lsb2J5dGVzOlxyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlICogMTAwMCAqKiA1O1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgRURpY2lvbmFyaW9VbmlkYWRlcy5jb21wdXRhY2lvbmFpc19tZWdhYnl0ZXM6XHJcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgKiAxMDAwICoqIDQ7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBFRGljaW9uYXJpb1VuaWRhZGVzLmNvbXB1dGFjaW9uYWlzX2dpZ2FieXRlczpcclxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSAqIDEwMDAgKiogMztcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIEVEaWNpb25hcmlvVW5pZGFkZXMuY29tcHV0YWNpb25haXNfdGVyYWJ5dGVzOlxyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlICogMTAwMCAqKiAyO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgRURpY2lvbmFyaW9VbmlkYWRlcy5jb21wdXRhY2lvbmFpc19wZXRhYnl0ZXM6XHJcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgKiAxMDAwO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgRURpY2lvbmFyaW9VbmlkYWRlcy5jb21wdXRhY2lvbmFpc196ZXR0YWJ5dGVzOlxyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlIC8gMTAwMDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIEVEaWNpb25hcmlvVW5pZGFkZXMuY29tcHV0YWNpb25haXNfeW90dGFieXRlczpcclxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSAvIDEwMDAgKiogMjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIEVEaWNpb25hcmlvVW5pZGFkZXMuY29tcHV0YWNpb25haXNfYmluYXJpb19ieXRlczpcclxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSAqIDEwMjQgKiogNjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIEVEaWNpb25hcmlvVW5pZGFkZXMuY29tcHV0YWNpb25haXNfYmluYXJpb19raWJpYnl0ZXM6XHJcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgKiAxMDI0ICoqIDU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBFRGljaW9uYXJpb1VuaWRhZGVzLmNvbXB1dGFjaW9uYWlzX2JpbmFyaW9fbWViaWJ5dGVzOlxyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlICogMTAyNCAqKiA0O1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgRURpY2lvbmFyaW9VbmlkYWRlcy5jb21wdXRhY2lvbmFpc19iaW5hcmlvX2dpYmlieXRlczpcclxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSAqIDEwMjQgKiogMztcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIEVEaWNpb25hcmlvVW5pZGFkZXMuY29tcHV0YWNpb25haXNfYmluYXJpb190ZWJpYnl0ZXM6XHJcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgKiAxMDI0ICoqIDI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBFRGljaW9uYXJpb1VuaWRhZGVzLmNvbXB1dGFjaW9uYWlzX2JpbmFyaW9fcGViaWJ5dGVzOlxyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlICogMTAyNDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIEVEaWNpb25hcmlvVW5pZGFkZXMuY29tcHV0YWNpb25haXNfYmluYXJpb19leGJpYnl0ZXM6XHJcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBFRGljaW9uYXJpb1VuaWRhZGVzLmNvbXB1dGFjaW9uYWlzX2JpbmFyaW9femViaWJ5dGVzOlxyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlIC8gMTAyNDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIEVEaWNpb25hcmlvVW5pZGFkZXMuY29tcHV0YWNpb25haXNfYmluYXJpb195b2JpYnl0ZXM6XHJcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgLyAxMDI0ICoqIDI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBFRGljaW9uYXJpb1VuaWRhZGVzLmxpbmVhcmVzX3F1ZWN0b21ldHJvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmxpbmVhcmVzX3JvbnRvbWV0cm9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMubGluZWFyZXNfeW9jdG9tZXRyb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5saW5lYXJlc196ZXB0b21ldHJvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmxpbmVhcmVzX2F0dG9tZXRyb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5saW5lYXJlc19mZW10b21ldHJvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmxpbmVhcmVzX3BpY29tZXRyb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5saW5lYXJlc19uYW5vbWV0cm9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMubGluZWFyZXNfbWljcm9tZXRyb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5saW5lYXJlc19taWxpbWV0cm9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMubGluZWFyZXNfY2VudGltZXRyb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5saW5lYXJlc19kZWNpbWV0cm9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMubGluZWFyZXNfbWV0cm9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMubGluZWFyZXNfZGVjYW1ldHJvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmxpbmVhcmVzX2hlY3RvbWV0cm9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMubGluZWFyZXNfa2lsb21ldHJvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmxpbmVhcmVzX21lZ2FtZXRyb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5saW5lYXJlc19naWdhbWV0cm9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMubGluZWFyZXNfdGVyYW1ldHJvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmxpbmVhcmVzX3BldGFtZXRyb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5saW5lYXJlc19leGFtZXRyb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5saW5lYXJlc196ZXR0YW1ldHJvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmxpbmVhcmVzX3lvdHRhbWV0cm9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMubGluZWFyZXNfcm9ubmFtZXRyb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5saW5lYXJlc19xdWV0dGFtZXRyb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5hcmVhX3F1ZWN0b21ldHJvc19xdWFkcmFkb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5hcmVhX3JvbnRvbWV0cm9zX3F1YWRyYWRvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmFyZWFfeW9jdG9tZXRyb3NfcXVhZHJhZG9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMuYXJlYV96ZXB0b21ldHJvc19xdWFkcmFkb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5hcmVhX2F0dG9tZXRyb3NfcXVhZHJhZG9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMuYXJlYV9mZW10b21ldHJvc19xdWFkcmFkb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5hcmVhX3BpY29tZXRyb3NfcXVhZHJhZG9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMuYXJlYV9uYW5vbWV0cm9zX3F1YWRyYWRvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmFyZWFfbWljcm9tZXRyb3NfcXVhZHJhZG9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMuYXJlYV9taWxpbWV0cm9zX3F1YWRyYWRvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmFyZWFfY2VudGltZXRyb3NfcXVhZHJhZG9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMuYXJlYV9kZWNpbWV0cm9zX3F1YWRyYWRvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmFyZWFfbWV0cm9zX3F1YWRyYWRvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmFyZWFfZGVjYW1ldHJvc19xdWFkcmFkb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5hcmVhX2hlY3RvbWV0cm9zX3F1YWRyYWRvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmFyZWFfa2lsb21ldHJvc19xdWFkcmFkb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5hcmVhX21lZ2FtZXRyb3NfcXVhZHJhZG9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMuYXJlYV9naWdhbWV0cm9zX3F1YWRyYWRvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmFyZWFfdGVyYW1ldHJvc19xdWFkcmFkb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5hcmVhX3BldGFtZXRyb3NfcXVhZHJhZG9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMuYXJlYV9leGFtZXRyb3NfcXVhZHJhZG9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMuYXJlYV96ZXR0YW1ldHJvc19xdWFkcmFkb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5hcmVhX3lvdHRhbWV0cm9zX3F1YWRyYWRvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmFyZWFfcm9ubmFtZXRyb3NfcXVhZHJhZG9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMuYXJlYV9xdWV0dGFtZXRyb3NfcXVhZHJhZG9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMudm9sdW1lX3F1ZWN0b21ldHJvc19jdWJpY29zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMudm9sdW1lX3JvbnRvbWV0cm9zX2N1Ymljb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy52b2x1bWVfeW9jdG9tZXRyb3NfY3ViaWNvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLnZvbHVtZV96ZXB0b21ldHJvc19jdWJpY29zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMudm9sdW1lX2F0dG9tZXRyb3NfY3ViaWNvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLnZvbHVtZV9mZW10b21ldHJvc19jdWJpY29zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMudm9sdW1lX3BpY29tZXRyb3NfY3ViaWNvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLnZvbHVtZV9uYW5vbWV0cm9zX2N1Ymljb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy52b2x1bWVfbWljcm9tZXRyb3NfY3ViaWNvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLnZvbHVtZV9taWxpbWV0cm9zX2N1Ymljb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy52b2x1bWVfY2VudGltZXRyb3NfY3ViaWNvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLnZvbHVtZV9kZWNpbWV0cm9zX2N1Ymljb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy52b2x1bWVfbWV0cm9zX2N1Ymljb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy52b2x1bWVfZGVjYW1ldHJvc19jdWJpY29zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMudm9sdW1lX2hlY3RvbWV0cm9zX2N1Ymljb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy52b2x1bWVfa2lsb21ldHJvc19jdWJpY29zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMudm9sdW1lX21lZ2FtZXRyb3NfY3ViaWNvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLnZvbHVtZV9naWdhbWV0cm9zX2N1Ymljb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy52b2x1bWVfdGVyYW1ldHJvc19jdWJpY29zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMudm9sdW1lX3BldGFtZXRyb3NfY3ViaWNvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLnZvbHVtZV9leGFtZXRyb3NfY3ViaWNvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLnZvbHVtZV96ZXR0YW1ldHJvc19jdWJpY29zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMudm9sdW1lX3lvdHRhbWV0cm9zX2N1Ymljb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy52b2x1bWVfcm9ubmFtZXRyb3NfY3ViaWNvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLnZvbHVtZV9xdWV0dGFtZXRyb3NfY3ViaWNvczpcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFVua293blVuaXRDb252ZXJzb3IoZ28sIHRvKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgRURpY2lvbmFyaW9VbmlkYWRlcy5jb21wdXRhY2lvbmFpc196ZXR0YWJ5dGVzOlxyXG4gICAgICAgIHN3aXRjaCAoZ28pIHtcclxuICAgICAgICAgIGNhc2UgRURpY2lvbmFyaW9VbmlkYWRlcy5jb21wdXRhY2lvbmFpc19iaXRzOlxyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlICogOCAqIDEwMDAgKiogNztcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIEVEaWNpb25hcmlvVW5pZGFkZXMuY29tcHV0YWNpb25haXNfYnl0ZXM6XHJcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgKiAxMDAwICoqIDc7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBFRGljaW9uYXJpb1VuaWRhZGVzLmNvbXB1dGFjaW9uYWlzX2tpbG9ieXRlczpcclxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSAqIDEwMDAgKiogNjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIEVEaWNpb25hcmlvVW5pZGFkZXMuY29tcHV0YWNpb25haXNfbWVnYWJ5dGVzOlxyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlICogMTAwMCAqKiA1O1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgRURpY2lvbmFyaW9VbmlkYWRlcy5jb21wdXRhY2lvbmFpc19naWdhYnl0ZXM6XHJcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgKiAxMDAwICoqIDQ7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBFRGljaW9uYXJpb1VuaWRhZGVzLmNvbXB1dGFjaW9uYWlzX3RlcmFieXRlczpcclxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSAqIDEwMDAgKiogMztcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIEVEaWNpb25hcmlvVW5pZGFkZXMuY29tcHV0YWNpb25haXNfcGV0YWJ5dGVzOlxyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlICogMTAwMCAqKiAyO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgRURpY2lvbmFyaW9VbmlkYWRlcy5jb21wdXRhY2lvbmFpc19leGFieXRlczpcclxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSAqIDEwMDA7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBFRGljaW9uYXJpb1VuaWRhZGVzLmNvbXB1dGFjaW9uYWlzX3lvdHRhYnl0ZXM6XHJcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgLyAxMDAwO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgRURpY2lvbmFyaW9VbmlkYWRlcy5jb21wdXRhY2lvbmFpc19iaW5hcmlvX2J5dGVzOlxyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlICogMTAyNCAqKiA3O1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgRURpY2lvbmFyaW9VbmlkYWRlcy5jb21wdXRhY2lvbmFpc19iaW5hcmlvX2tpYmlieXRlczpcclxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSAqIDEwMjQgKiogNjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIEVEaWNpb25hcmlvVW5pZGFkZXMuY29tcHV0YWNpb25haXNfYmluYXJpb19tZWJpYnl0ZXM6XHJcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgKiAxMDI0ICoqIDU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBFRGljaW9uYXJpb1VuaWRhZGVzLmNvbXB1dGFjaW9uYWlzX2JpbmFyaW9fZ2liaWJ5dGVzOlxyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlICogMTAyNCAqKiA0O1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgRURpY2lvbmFyaW9VbmlkYWRlcy5jb21wdXRhY2lvbmFpc19iaW5hcmlvX3RlYmlieXRlczpcclxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSAqIDEwMjQgKiogMztcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIEVEaWNpb25hcmlvVW5pZGFkZXMuY29tcHV0YWNpb25haXNfYmluYXJpb19wZWJpYnl0ZXM6XHJcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgKiAxMDI0ICoqIDI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBFRGljaW9uYXJpb1VuaWRhZGVzLmNvbXB1dGFjaW9uYWlzX2JpbmFyaW9fZXhiaWJ5dGVzOlxyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlICogMTAyNDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIEVEaWNpb25hcmlvVW5pZGFkZXMuY29tcHV0YWNpb25haXNfYmluYXJpb196ZWJpYnl0ZXM6XHJcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBFRGljaW9uYXJpb1VuaWRhZGVzLmNvbXB1dGFjaW9uYWlzX2JpbmFyaW9feW9iaWJ5dGVzOlxyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlIC8gMTAyNDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIEVEaWNpb25hcmlvVW5pZGFkZXMubGluZWFyZXNfcXVlY3RvbWV0cm9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMubGluZWFyZXNfcm9udG9tZXRyb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5saW5lYXJlc195b2N0b21ldHJvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmxpbmVhcmVzX3plcHRvbWV0cm9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMubGluZWFyZXNfYXR0b21ldHJvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmxpbmVhcmVzX2ZlbXRvbWV0cm9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMubGluZWFyZXNfcGljb21ldHJvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmxpbmVhcmVzX25hbm9tZXRyb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5saW5lYXJlc19taWNyb21ldHJvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmxpbmVhcmVzX21pbGltZXRyb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5saW5lYXJlc19jZW50aW1ldHJvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmxpbmVhcmVzX2RlY2ltZXRyb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5saW5lYXJlc19tZXRyb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5saW5lYXJlc19kZWNhbWV0cm9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMubGluZWFyZXNfaGVjdG9tZXRyb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5saW5lYXJlc19raWxvbWV0cm9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMubGluZWFyZXNfbWVnYW1ldHJvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmxpbmVhcmVzX2dpZ2FtZXRyb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5saW5lYXJlc190ZXJhbWV0cm9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMubGluZWFyZXNfcGV0YW1ldHJvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmxpbmVhcmVzX2V4YW1ldHJvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmxpbmVhcmVzX3pldHRhbWV0cm9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMubGluZWFyZXNfeW90dGFtZXRyb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5saW5lYXJlc19yb25uYW1ldHJvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmxpbmVhcmVzX3F1ZXR0YW1ldHJvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmFyZWFfcXVlY3RvbWV0cm9zX3F1YWRyYWRvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmFyZWFfcm9udG9tZXRyb3NfcXVhZHJhZG9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMuYXJlYV95b2N0b21ldHJvc19xdWFkcmFkb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5hcmVhX3plcHRvbWV0cm9zX3F1YWRyYWRvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmFyZWFfYXR0b21ldHJvc19xdWFkcmFkb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5hcmVhX2ZlbXRvbWV0cm9zX3F1YWRyYWRvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmFyZWFfcGljb21ldHJvc19xdWFkcmFkb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5hcmVhX25hbm9tZXRyb3NfcXVhZHJhZG9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMuYXJlYV9taWNyb21ldHJvc19xdWFkcmFkb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5hcmVhX21pbGltZXRyb3NfcXVhZHJhZG9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMuYXJlYV9jZW50aW1ldHJvc19xdWFkcmFkb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5hcmVhX2RlY2ltZXRyb3NfcXVhZHJhZG9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMuYXJlYV9tZXRyb3NfcXVhZHJhZG9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMuYXJlYV9kZWNhbWV0cm9zX3F1YWRyYWRvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmFyZWFfaGVjdG9tZXRyb3NfcXVhZHJhZG9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMuYXJlYV9raWxvbWV0cm9zX3F1YWRyYWRvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmFyZWFfbWVnYW1ldHJvc19xdWFkcmFkb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5hcmVhX2dpZ2FtZXRyb3NfcXVhZHJhZG9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMuYXJlYV90ZXJhbWV0cm9zX3F1YWRyYWRvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmFyZWFfcGV0YW1ldHJvc19xdWFkcmFkb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5hcmVhX2V4YW1ldHJvc19xdWFkcmFkb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5hcmVhX3pldHRhbWV0cm9zX3F1YWRyYWRvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmFyZWFfeW90dGFtZXRyb3NfcXVhZHJhZG9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMuYXJlYV9yb25uYW1ldHJvc19xdWFkcmFkb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5hcmVhX3F1ZXR0YW1ldHJvc19xdWFkcmFkb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy52b2x1bWVfcXVlY3RvbWV0cm9zX2N1Ymljb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy52b2x1bWVfcm9udG9tZXRyb3NfY3ViaWNvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLnZvbHVtZV95b2N0b21ldHJvc19jdWJpY29zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMudm9sdW1lX3plcHRvbWV0cm9zX2N1Ymljb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy52b2x1bWVfYXR0b21ldHJvc19jdWJpY29zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMudm9sdW1lX2ZlbXRvbWV0cm9zX2N1Ymljb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy52b2x1bWVfcGljb21ldHJvc19jdWJpY29zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMudm9sdW1lX25hbm9tZXRyb3NfY3ViaWNvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLnZvbHVtZV9taWNyb21ldHJvc19jdWJpY29zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMudm9sdW1lX21pbGltZXRyb3NfY3ViaWNvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLnZvbHVtZV9jZW50aW1ldHJvc19jdWJpY29zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMudm9sdW1lX2RlY2ltZXRyb3NfY3ViaWNvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLnZvbHVtZV9tZXRyb3NfY3ViaWNvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLnZvbHVtZV9kZWNhbWV0cm9zX2N1Ymljb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy52b2x1bWVfaGVjdG9tZXRyb3NfY3ViaWNvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLnZvbHVtZV9raWxvbWV0cm9zX2N1Ymljb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy52b2x1bWVfbWVnYW1ldHJvc19jdWJpY29zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMudm9sdW1lX2dpZ2FtZXRyb3NfY3ViaWNvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLnZvbHVtZV90ZXJhbWV0cm9zX2N1Ymljb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy52b2x1bWVfcGV0YW1ldHJvc19jdWJpY29zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMudm9sdW1lX2V4YW1ldHJvc19jdWJpY29zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMudm9sdW1lX3pldHRhbWV0cm9zX2N1Ymljb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy52b2x1bWVfeW90dGFtZXRyb3NfY3ViaWNvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLnZvbHVtZV9yb25uYW1ldHJvc19jdWJpY29zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMudm9sdW1lX3F1ZXR0YW1ldHJvc19jdWJpY29zOlxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVW5rb3duVW5pdENvbnZlcnNvcihnbywgdG8pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBFRGljaW9uYXJpb1VuaWRhZGVzLmNvbXB1dGFjaW9uYWlzX3lvdHRhYnl0ZXM6XHJcbiAgICAgICAgc3dpdGNoIChnbykge1xyXG4gICAgICAgICAgY2FzZSBFRGljaW9uYXJpb1VuaWRhZGVzLmNvbXB1dGFjaW9uYWlzX2JpdHM6XHJcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgKiA4ICogMTAwMCAqKiA4O1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgRURpY2lvbmFyaW9VbmlkYWRlcy5jb21wdXRhY2lvbmFpc19ieXRlczpcclxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSAqIDEwMDAgKiogODtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIEVEaWNpb25hcmlvVW5pZGFkZXMuY29tcHV0YWNpb25haXNfa2lsb2J5dGVzOlxyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlICogMTAwMCAqKiA3O1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgRURpY2lvbmFyaW9VbmlkYWRlcy5jb21wdXRhY2lvbmFpc19tZWdhYnl0ZXM6XHJcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgKiAxMDAwICoqIDY7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBFRGljaW9uYXJpb1VuaWRhZGVzLmNvbXB1dGFjaW9uYWlzX2dpZ2FieXRlczpcclxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSAqIDEwMDAgKiogNTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIEVEaWNpb25hcmlvVW5pZGFkZXMuY29tcHV0YWNpb25haXNfdGVyYWJ5dGVzOlxyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlICogMTAwMCAqKiA0O1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgRURpY2lvbmFyaW9VbmlkYWRlcy5jb21wdXRhY2lvbmFpc19wZXRhYnl0ZXM6XHJcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgKiAxMDAwICoqIDM7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBFRGljaW9uYXJpb1VuaWRhZGVzLmNvbXB1dGFjaW9uYWlzX2V4YWJ5dGVzOlxyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlICogMTAwMCAqKiAyO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgRURpY2lvbmFyaW9VbmlkYWRlcy5jb21wdXRhY2lvbmFpc196ZXR0YWJ5dGVzOlxyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlICogMTAwMDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIEVEaWNpb25hcmlvVW5pZGFkZXMuY29tcHV0YWNpb25haXNfYmluYXJpb19ieXRlczpcclxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSAqIDEwMjQgKiogODtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIEVEaWNpb25hcmlvVW5pZGFkZXMuY29tcHV0YWNpb25haXNfYmluYXJpb19raWJpYnl0ZXM6XHJcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgKiAxMDI0ICoqIDc7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBFRGljaW9uYXJpb1VuaWRhZGVzLmNvbXB1dGFjaW9uYWlzX2JpbmFyaW9fbWViaWJ5dGVzOlxyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlICogMTAyNCAqKiA2O1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgRURpY2lvbmFyaW9VbmlkYWRlcy5jb21wdXRhY2lvbmFpc19iaW5hcmlvX2dpYmlieXRlczpcclxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSAqIDEwMjQgKiogNTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIEVEaWNpb25hcmlvVW5pZGFkZXMuY29tcHV0YWNpb25haXNfYmluYXJpb190ZWJpYnl0ZXM6XHJcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgKiAxMDI0ICoqIDQ7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBFRGljaW9uYXJpb1VuaWRhZGVzLmNvbXB1dGFjaW9uYWlzX2JpbmFyaW9fcGViaWJ5dGVzOlxyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlICogMTAyNCAqKiAzO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgRURpY2lvbmFyaW9VbmlkYWRlcy5jb21wdXRhY2lvbmFpc19iaW5hcmlvX2V4YmlieXRlczpcclxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSAqIDEwMjQgKiogMjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIEVEaWNpb25hcmlvVW5pZGFkZXMuY29tcHV0YWNpb25haXNfYmluYXJpb196ZWJpYnl0ZXM6XHJcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgKiAxMDI0O1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgRURpY2lvbmFyaW9VbmlkYWRlcy5jb21wdXRhY2lvbmFpc19iaW5hcmlvX3lvYmlieXRlczpcclxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIEVEaWNpb25hcmlvVW5pZGFkZXMubGluZWFyZXNfcXVlY3RvbWV0cm9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMubGluZWFyZXNfcm9udG9tZXRyb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5saW5lYXJlc195b2N0b21ldHJvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmxpbmVhcmVzX3plcHRvbWV0cm9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMubGluZWFyZXNfYXR0b21ldHJvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmxpbmVhcmVzX2ZlbXRvbWV0cm9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMubGluZWFyZXNfcGljb21ldHJvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmxpbmVhcmVzX25hbm9tZXRyb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5saW5lYXJlc19taWNyb21ldHJvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmxpbmVhcmVzX21pbGltZXRyb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5saW5lYXJlc19jZW50aW1ldHJvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmxpbmVhcmVzX2RlY2ltZXRyb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5saW5lYXJlc19tZXRyb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5saW5lYXJlc19kZWNhbWV0cm9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMubGluZWFyZXNfaGVjdG9tZXRyb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5saW5lYXJlc19raWxvbWV0cm9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMubGluZWFyZXNfbWVnYW1ldHJvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmxpbmVhcmVzX2dpZ2FtZXRyb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5saW5lYXJlc190ZXJhbWV0cm9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMubGluZWFyZXNfcGV0YW1ldHJvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmxpbmVhcmVzX2V4YW1ldHJvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmxpbmVhcmVzX3pldHRhbWV0cm9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMubGluZWFyZXNfeW90dGFtZXRyb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5saW5lYXJlc19yb25uYW1ldHJvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmxpbmVhcmVzX3F1ZXR0YW1ldHJvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmFyZWFfcXVlY3RvbWV0cm9zX3F1YWRyYWRvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmFyZWFfcm9udG9tZXRyb3NfcXVhZHJhZG9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMuYXJlYV95b2N0b21ldHJvc19xdWFkcmFkb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5hcmVhX3plcHRvbWV0cm9zX3F1YWRyYWRvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmFyZWFfYXR0b21ldHJvc19xdWFkcmFkb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5hcmVhX2ZlbXRvbWV0cm9zX3F1YWRyYWRvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmFyZWFfcGljb21ldHJvc19xdWFkcmFkb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5hcmVhX25hbm9tZXRyb3NfcXVhZHJhZG9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMuYXJlYV9taWNyb21ldHJvc19xdWFkcmFkb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5hcmVhX21pbGltZXRyb3NfcXVhZHJhZG9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMuYXJlYV9jZW50aW1ldHJvc19xdWFkcmFkb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5hcmVhX2RlY2ltZXRyb3NfcXVhZHJhZG9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMuYXJlYV9tZXRyb3NfcXVhZHJhZG9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMuYXJlYV9kZWNhbWV0cm9zX3F1YWRyYWRvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmFyZWFfaGVjdG9tZXRyb3NfcXVhZHJhZG9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMuYXJlYV9raWxvbWV0cm9zX3F1YWRyYWRvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmFyZWFfbWVnYW1ldHJvc19xdWFkcmFkb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5hcmVhX2dpZ2FtZXRyb3NfcXVhZHJhZG9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMuYXJlYV90ZXJhbWV0cm9zX3F1YWRyYWRvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmFyZWFfcGV0YW1ldHJvc19xdWFkcmFkb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5hcmVhX2V4YW1ldHJvc19xdWFkcmFkb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5hcmVhX3pldHRhbWV0cm9zX3F1YWRyYWRvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLmFyZWFfeW90dGFtZXRyb3NfcXVhZHJhZG9zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMuYXJlYV9yb25uYW1ldHJvc19xdWFkcmFkb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy5hcmVhX3F1ZXR0YW1ldHJvc19xdWFkcmFkb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy52b2x1bWVfcXVlY3RvbWV0cm9zX2N1Ymljb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy52b2x1bWVfcm9udG9tZXRyb3NfY3ViaWNvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLnZvbHVtZV95b2N0b21ldHJvc19jdWJpY29zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMudm9sdW1lX3plcHRvbWV0cm9zX2N1Ymljb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy52b2x1bWVfYXR0b21ldHJvc19jdWJpY29zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMudm9sdW1lX2ZlbXRvbWV0cm9zX2N1Ymljb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy52b2x1bWVfcGljb21ldHJvc19jdWJpY29zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMudm9sdW1lX25hbm9tZXRyb3NfY3ViaWNvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLnZvbHVtZV9taWNyb21ldHJvc19jdWJpY29zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMudm9sdW1lX21pbGltZXRyb3NfY3ViaWNvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLnZvbHVtZV9jZW50aW1ldHJvc19jdWJpY29zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMudm9sdW1lX2RlY2ltZXRyb3NfY3ViaWNvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLnZvbHVtZV9tZXRyb3NfY3ViaWNvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLnZvbHVtZV9kZWNhbWV0cm9zX2N1Ymljb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy52b2x1bWVfaGVjdG9tZXRyb3NfY3ViaWNvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLnZvbHVtZV9raWxvbWV0cm9zX2N1Ymljb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy52b2x1bWVfbWVnYW1ldHJvc19jdWJpY29zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMudm9sdW1lX2dpZ2FtZXRyb3NfY3ViaWNvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLnZvbHVtZV90ZXJhbWV0cm9zX2N1Ymljb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy52b2x1bWVfcGV0YW1ldHJvc19jdWJpY29zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMudm9sdW1lX2V4YW1ldHJvc19jdWJpY29zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMudm9sdW1lX3pldHRhbWV0cm9zX2N1Ymljb3MgfHxcclxuICAgICAgICAgICAgRURpY2lvbmFyaW9VbmlkYWRlcy52b2x1bWVfeW90dGFtZXRyb3NfY3ViaWNvcyB8fFxyXG4gICAgICAgICAgICBFRGljaW9uYXJpb1VuaWRhZGVzLnZvbHVtZV9yb25uYW1ldHJvc19jdWJpY29zIHx8XHJcbiAgICAgICAgICAgIEVEaWNpb25hcmlvVW5pZGFkZXMudm9sdW1lX3F1ZXR0YW1ldHJvc19jdWJpY29zOlxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVW5rb3duVW5pdENvbnZlcnNvcihnbywgdG8pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19