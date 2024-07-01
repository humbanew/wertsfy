enum EDicionarioUnidades 
{
  computacionais_bits = "01t01",
  computacionais_bytes = "01t02", // 10^0
  computacionais_kilobytes = "01t03", // 10^3
  computacionais_megabytes = "01t04", // 10^6
  computacionais_gigabytes = "01t05", // 10^9
  computacionais_terabytes = "01t06", // 10^12
  computacionais_petabytes = "01t07", // 10^15
  computacionais_exabytes = "01t08", // 10^18
  computacionais_zettabytes = "01t09", // 10^21
  computacionais_yottabytes = "01t10", // 10^24
  computacionais_binario_bytes = "02t01", // 2^0
  computacionais_binario_kibibytes = "02t02", // 2^10
  computacionais_binario_mebibytes = "02t03", // 2^20
  computacionais_binario_gibibytes = "02t04", // 2^30
  computacionais_binario_tebibytes = "02t05", // 2^40
  computacionais_binario_pebibytes = "02t06", // 2^50
  computacionais_binario_exbibytes = "02t07", // 2^60
  computacionais_binario_zebibytes = "02t08", // 2^70
  computacionais_binario_yobibytes = "02t09", // 2^80
  lineares_quectometros = "03t01",
  lineares_rontometros = "03t02",
  lineares_yoctometros = "03t03",
  lineares_zeptometros = "03t04",
  lineares_attometros = "03t05",
  lineares_femtometros = "03t06",
  lineares_picometros = "03t07",
  lineares_nanometros = "03t08",
  lineares_micrometros = "03t09",
  lineares_milimetros = "03t10",
  lineares_centimetros = "03t11",
  lineares_decimetros = "03t12",
  lineares_metros = "03t13",
  lineares_decametros = "03t14",
  lineares_hectometros = "03t15",
  lineares_kilometros = "03t16",
  lineares_megametros = "03t17",
  lineares_gigametros = "03t18",
  lineares_terametros = "03t19",
  lineares_petametros = "03t20",
  lineares_exametros = "03t21",
  lineares_zettametros = "03t22",
  lineares_yottametros = "03t23",
  lineares_ronnametros = "03t24",
  lineares_quettametros = "03t25",
  area_quectometros_quadrados = "04t01",
  area_rontometros_quadrados = "04t02",
  area_yoctometros_quadrados = "04t03",
  area_zeptometros_quadrados = "04t04",
  area_attometros_quadrados = "04t05",
  area_femtometros_quadrados = "04t06",
  area_picometros_quadrados = "04t07",
  area_nanometros_quadrados = "04t08",
  area_micrometros_quadrados = "04t09",
  area_milimetros_quadrados = "04t10",
  area_centimetros_quadrados = "04t11",
  area_decimetros_quadrados = "04t12",
  area_metros_quadrados = "04t13",
  area_decametros_quadrados = "04t14",
  area_hectometros_quadrados = "04t15",
  area_kilometros_quadrados = "04t16",
  area_megametros_quadrados = "04t17",
  area_gigametros_quadrados = "04t18",
  area_terametros_quadrados = "04t19",
  area_petametros_quadrados = "04t20",
  area_exametros_quadrados = "04t21",
  area_zettametros_quadrados = "04t22",
  area_yottametros_quadrados = "04t23",
  area_ronnametros_quadrados = "04t24",
  area_quettametros_quadrados = "04t25",
  volume_quectometros_cubicos = "05t01",
  volume_rontometros_cubicos = "05t02",
  volume_yoctometros_cubicos = "05t03",
  volume_zeptometros_cubicos = "05t04",
  volume_attometros_cubicos = "05t05",
  volume_femtometros_cubicos = "05t06",
  volume_picometros_cubicos = "05t07",
  volume_nanometros_cubicos = "05t08",
  volume_micrometros_cubicos = "05t09",
  volume_milimetros_cubicos = "05t10",
  volume_centimetros_cubicos = "05t11",
  volume_decimetros_cubicos = "05t12",
  volume_metros_cubicos = "05t13",
  volume_decametros_cubicos = "05t14",
  volume_hectometros_cubicos = "05t15",
  volume_kilometros_cubicos = "05t16",
  volume_megametros_cubicos = "05t17",
  volume_gigametros_cubicos = "05t18",
  volume_terametros_cubicos = "05t19",
  volume_petametros_cubicos = "05t20",
  volume_exametros_cubicos = "05t21",
  volume_zettametros_cubicos = "05t22",
  volume_yottametros_cubicos = "05t23",
  volume_ronnametros_cubicos = "05t24",
  volume_quettametros_cubicos = "05t25",
}

/**
 * @todo Componente com necessidade de atualizações, módulos incompletos ou não implementados.
 */
export class UnkownUnitConversor extends Error 
{
  constructor(a: EDicionarioUnidades, b: EDicionarioUnidades) {
    super(`Conversão de unidades imprópria ou desconhecida! ${a} => ${b}`);
  }
}

export abstract class Conversores 
{
  public transform(to: EDicionarioUnidades, go: EDicionarioUnidades, value: number) {
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
