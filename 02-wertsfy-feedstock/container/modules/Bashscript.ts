export default class Bashscript {
  /**
   * ## Padrão do Modelo RGB
   * @param r valores de vermelho
   * @param g valores de verde
   * @param b valores de azul
   * @returns retorna um texto contendo os valores RGB verificados.
   */
  private ModeloRGB(r: number, g: number, b: number): string {
    if (r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255) {
      return `rgb(${r}, ${g}, ${b})`;
    }
    console.error("\x1b[34mValores de RGB fora do intervalo permitido.");
    return `rgb(0, 0, 0)`;
  }

  private Modelo3b4Bits(n: number): number {
    if (n >= 0 && n <= 255) {
      return n;
    }
    console.error("\x1b[34mValores de 3/4 bits fora do intervalo permitido.");
    return 0;
  }

  /**
   * ## Padrões do Modelo de Formatação da Linha de Comando
   */
  private ModeloFormatacao = {
    caracteresEspeciais: {
      aspas_simples: "'",
      aspas_duplas: '"',
      barra_inversa: "\\",
      alerta: "a",
      caractere_escape: "e",
      nova_linha: "\n",
      retorno_carriage: "\r",
      tabulacao: "\t",
      apagar: "\b",
      formatacao_feed: "\f",
      tabulacao_vertical: "\v",
      caractere_nulo: "\0",
      marcador_questao: "?",
    },
    caracteresColoracao: {

      "@normal_or_reset": "\x1b[0m",
      "@bold_or_increased_intensity": "\x1b[1m",
      "@faint_or_dim_or_decreased_intensity": "\x1b[2m",
      "@italic": "\x1b[3m",
      "@undeline": "\x1b[4m",
      "@slow_blink": "\x1b[5m",
      "@rapid_blink": "\x1b[6m",
      "@reverse_video_or_invert": "\x1b[7m",
      "@conceal_or_hide": "\x1b[8m",
      "@crossed_out_or_strike": "\x1b[9m",
      "@primary_font": "\x1b[10m",
      "@alternative_font_a": "\x1b[11m",
      "@alternative_font_b": "\x1b[12m",
      "@alternative_font_c": "\x1b[13m",
      "@alternative_font_d": "\x1b[14m",
      "@alternative_font_e": "\x1b[15m",
      "@alternative_font_f": "\x1b[16m",
      "@alternative_font_g": "\x1b[17m",
      "@alternative_font_h": "\x1b[18m",
      "@alternative_font_i": "\x1b[19m",
      "@fraktur_gothic": "\x1b[20m",
      "@doubly_underlined_or_not_bold": "\x1b[21m",
      "@normal_intensity": "\x1b[22m",
      "@neither_italic_nor_blackletter": "\x1b[23m",
      "@not_underlined": "\x1b[24m",
      "@not_blinking": "\x1b[25m",
      "@proportional_spacing": "\x1b[26m",
      "@not_reversed": "\x1b[27m",
      "@reveal": "\x1b[28m",
      "@not_crossed_out": "\x1b[29m",
      "@disable_proportional_spacing": "\x1b[50m",
      "@framed": "\x1b[51m",
      "@encicled": "\x1b[52m",
      "@overlined": "\x1b[53m",
      "@neither_framed_of_encircled": "\x1b[54m",
      "@not_overlined": "\x1b[55m",
      "@default_underline_color": "\x1b[59m",
      "@ideogram_underline_or_right_side_line": "\x1b[60m",
      "@ideogram_double_underline_or_double_line_on_the_right_side": "\x1b[61m",
      "@ideogram_overline_or_left_side_line": "\x1b[62m",
      "@ideogram_double_overline_or_double_line_on_the_left_side": "\x1b[63m",
      "@ideogram_stress_marking": "\x1b[64m",
      "@no_ideogram_attributes": "\x1b[65m",
      "@superscript": "\x1b[73m",
      "@subscript": "\x1b[74m",
      "@neither_superscript_nor_subscript": "\x1b[75m",

    }

//     not_overlined: "\x1b[55m";
//     default_underline_color: "\x1b[59m";
//     ideogram_underline_or_right_side_line: "\x1b[60m";
//     ideogram_double_underline_or_double_line_on_the_right_side: "\x1b[61m";
//     ideogram_overline_or_left_side_line: "\x1b[62m";
//     ideogram_double_overline_or_double_line_on_the_left_side: "\x1b[63m";
//     ideogram_stress_marking: "\x1b[64m";
//     no_ideogram_attributes: "\x1b[65m";
//     superscript: "\x1b[73m";
//     subscript: "\x1b[74m";
//     neither_superscript_nor_subscript: "\x1b[75m";
//     colors: {
//       default_foreground_color: "\x1b[39m";
//       default_background_color: "\x1b[49m";
//       three_bits_and_four_bits: {
//         foreground: {
//           black: "\x1b[30m";
//           red: "\x1b[31m";
//           green: "\x1b[32m";
//           yellow: "\x1b[33m";
//           blue: "\x1b[34m";
//           magenta: "\x1b[35m";
//           cyan: "\x1b[36m";
//           white: "\x1b[37m";
//           bright_black_gray: "\x1b[90m";
//           bright_red: "\x1b[91m";
//           bright_green: "\x1b[92m";
//           bright_yellow: "\x1b[93m";
//           bright_blue: "\x1b[94m";
//           bright_magenta: "\x1b[95m";
//           bright_cyan: "\x1b[96m";
//           bright_white: "\x1b[97m";
//         };
//         background: {
//           black: "\x1b[40m";
//           red: "\x1b[41m";
//           green: "\x1b[42m";
//           yellow: "\x1b[43m";
//           blue: "\x1b[44m";
//           magenta: "\x1b[45m";
//           cyan: "\x1b[46m";
//           white: "\x1b[47m";
//           bright_black_gray: "\x1b[100m";
//           bright_red: "\x1b[101m";
//           bright_green: "\x1b[102m";
//           bright_yellow: "\x1b[103m";
//           bright_blue: "\x1b[104m";
//           bright_magenta: "\x1b[105m";
//           bright_cyan: "\x1b[106m";
//           bright_white: "\x1b[107m";
//         };
//       };
//       eight_bits: {
//         foreground: typeof BashFormatter.prototype.eight_bits_foreground;
//         background: typeof BashFormatter.prototype.eight_bits_background;
//       };
//       twenty_four_bits: {
//         foreground: typeof BashFormatter.prototype.twenty_four_bits_foreground;
//         background: typeof BashFormatter.prototype.twenty_four_bits_background;
//       };
//     };

  };
}

//   /**
//    * ![](./~srcs/feedstock-logo.png)
//    * #### Códigos de Controle C0
//    * ----
//    */
//   public c0_control_codes: {
//     "BELL - MAKES AN AUDIBLE NOISE": 0x07;
//     "BACKSPACE - MOVES THE CURSOR LEFT": 0x08;
//     "TAB - MOVES THE CURSOR RIGHT TO NEXT BYTE": 0x09;
//     "LINE FEED - MOVES TO NEXT LINE": 0x0a;
//     "FORM FEED - MOVES A PRINTER TO TOP OF NEXT PAGE": 0x0c;
//     "CARRIAGE RETURN - MOVES THE CURSOR TO COLUMN ZERO": 0x0d;
//     "ESCAPE - STARTS ALL THE ESCAPE SEQUENCES": 0x1b;
//   };

//   /**
//    * ![](./~srcs/feedstock-logo.png)
//    * #### Códigos de Controle C1
//    * ----
//    */
//   public c1_fe_escape_sequences: {
//     "SINGLE SHIFT TWO - ESC N": 0x8e;
//     "SINGLE SHIFT THREE - ESC O": 0x8f;
//     "DEVICE CONTROL STRING - ESC P": 0x90;
//     "CONTROL SEQUENCE INTRODUCER - ESC [": 0x9b;
//     "STRING TERMINATOR - ESC \\": 0x9c;
//     "OPERATING SYSTEM COMMAND - ESC ]": 0x9d;
//     "START OF STRING - ESC X": 0x98;
//     "PRIVATE MESSAGE - ESC ^": 0x9e;
//     "APPLICATION PROGRAM COMMAND - ESC _": 0x9f;
//   };

//   /**
//    * ![](./~srcs/feedstock-logo.png)
//    * #### Sequências de Escape
//    * ----
//    */
//   public control_sequence_introducer: {
//     "CURSOR UP": "CSI n A";
//     "CURSOR DOWN": "CSI n B";
//     "CURSOR FORWARD": "CSI n C";
//     "CURSOR BACK": "CSI n D";
//     "CURSOR NEXT LINE": "CSI n E";
//     "CURSOR PREVIOUS LINE": "CSI n F";
//     "CURSOR HORIZONTAL ABSOLUTE": "CSI n G";
//     "CURSOR POSITION": "CSI n; m H";
//     "ERASE IN DISPLAY": "CSI N J";
//     "ERASE IN LINE": "CSI n K";
//     "SCROLL UP": "CSI n S";
//     "SCROLL DOWN": "CSI n T";
//     "HORIZONTAL VERTICAL POSITION": "CSI n; m f";
//     "SELECT GRAPHIC RENDITION": "CSI n; m";
//     "AUX PORT ON": "CSI 5i";
//     "AUX PORT OFF": "CSI 4i";
//     "DEVICE STATUS REPORT": "CSI 6n";
//     "SAVE CURRENT CURSOR POSITION": "CSI s";
//     "RESTORE SAVED CURSOR POSITION": "CSI u";
//     "DECTCEM A HEIGHT": "CSI ? 25 h";
//     "DECTCEM B LENGTH": "CSI ? 25 l";
//     "ENABLE REPORTING FOCUS": "CSI ? 1004 h";
//     "DISABLE REPORTING FOCUS": "CSI ? 1004 l";
//     "ENABLE ALTERNATIVE SCREEN BUFFER": "CSI ? 1049 h";
//     "DISABLE ALTERNATIVE SCREEN BUFFER": "CSI ? 1049 l";
//     "TURN ON BRACKETED PASTE MODE": "CSI ? 2004 h";
//     "TURN OFF BRACKETED PASTE MODE": "CSI ? 2004 l";
//   };

//   /**
//    * ![](./~srcs/feedstock-logo.png)
//    * #### Sequências de Escape FS
//    * ----
//    */
//   public fs_escape_sequences: {
//     "ESC 0x60": 0x60;
//     "ESC 0x61": 0x61;
//     "ESC 0x62": 0x62;
//     "ESC 0x63": 0x63;
//     "ESC 0x64": 0x64;
//     "ESC 0x65": 0x65;
//     "ESC 0x66": 0x66;
//     "ESC 0x67": 0x67;
//     "ESC 0x68": 0x68;
//     "ESC 0x69": 0x69;
//     "ESC 0x6A": 0x6a;
//     "ESC 0x6B": 0x6b;
//     "ESC 0x6C": 0x6c;
//     "ESC 0x6D": 0x6d;
//     "ESC 0x6E": 0x6e;
//     "ESC 0x6F": 0x6f;
//     "ESC 0x70": 0x70;
//     "ESC 0x71": 0x71;
//     "ESC 0x72": 0x72;
//     "ESC 0x73": 0x73;
//     "ESC 0x74": 0x74;
//     "ESC 0x75": 0x75;
//     "ESC 0x76": 0x76;
//     "ESC 0x77": 0x77;
//     "ESC 0x78": 0x78;
//     "ESC 0x79": 0x79;
//     "ESC 0x7A": 0x7a;
//     "ESC 0x7B": 0x7b;
//     "ESC 0x7C": 0x7c;
//     "ESC 0x7D": 0x7d;
//     "ESC 0x7E": 0x7e;
//   };

//   /**
//    * ![](./~srcs/feedstock-logo.png)
//    * #### Sequências de Escape FP
//    * ----
//    */
//   public fp_escape_sequences: {
//     "ESC 0x30": 0x30;
//     "ESC 0x31": 0x31;
//     "ESC 0x32": 0x32;
//     "ESC 0x33": 0x33;
//     "ESC 0x34": 0x34;
//     "ESC 0x35": 0x35;
//     "ESC 0x36": 0x36;
//     "ESC 0x37": 0x37;
//     "ESC 0x38": 0x38;
//     "ESC 0x39": 0x39;
//     "ESC 0x3A": 0x3a;
//     "ESC 0x3B": 0x3b;
//     "ESC 0x3C": 0x3c;
//     "ESC 0x3D": 0x3d;
//     "ESC 0x3E": 0x3e;
//     "ESC 0x3F": 0x3f;
//     "DEC SAVE CURSOR": "ESC 7";
//     "DEC RESTORE CURSOR": "ESC 8";
//   };

//   /**
//    * ![](./~srcs/feedstock-logo.png)
//    * #### Sequências de Escape NF
//    * ----
//    */
//   public nf_escape_sequences: {
//     "ESC 0x20": 0x20;
//     "ESC 0x21": 0x21;
//     "ESC 0x22": 0x22;
//     "ESC 0x23": 0x23;
//     "ESC 0x24": 0x24;
//     "ESC 0x25": 0x25;
//     "ESC 0x26": 0x26;
//     "ESC 0x27": 0x27;
//     "ESC 0x28": 0x28;
//     "ESC 0x29": 0x29;
//     "ESC 0x2A": 0x2a;
//     "ESC 0x2B": 0x2b;
//     "ESC 0x2C": 0x2c;
//     "ESC 0x2D": 0x2d;
//     "ESC 0x2E": 0x2e;
//     "ESC 0x2F": 0x2f;
//     "ANNOUNCE CODE STRUCTURE 6": "ESC SP F";
//     "ANNOUNCE CODE STRUCTURE 7": "ESC SP G";
//     "DEC DOUBLE-HEIGHT LETTERS, TOP HALF": "ESC # 3";
//     "DEC DOUBLE-HEIGHT LETTERS, BOTTOM HALF": "ESC # 4";
//     "DEC SINGLE-WIDTH LINE": "ESC # 5";
//     "DEC DOUBLE-WIDTH LINE": "ESC # 6";
//   };

//   /**
//    * ![](./~srcs/feedstock-logo.png)
//    * #### Texto de Formatação de Cores de 8 Bits
//    * @param x intervalo de cores RGB.
//    * @returns retorna uma sequência de escape para cor de texto de 8 bits.
//    * ----
//    */
//   protected eight_bits_foreground(x: TRGBInterval): string {
//     return `\x1b[38;5;${x}m`;
//   }

//   /**
//    * ![](./~srcs/feedstock-logo.png)
//    * #### Fundo de Texto de Formatação de Cores de 8 Bits
//    * @param x intervalo de cores RGB.
//    * @returns retorna uma sequência de escape para cor de fundo de 8 bits.
//    * ----
//    */
//   protected eight_bits_background(x: TRGBInterval): string {
//     return `\x1b[48;5;${x}m`;
//   }

//   /**
//    * ![](./~srcs/feedstock-logo.png)
//    * #### Texto de Formatação de Cores de 24 Bits
//    * @param r intervalo de cores RGB.
//    * @param g intervalo de cores RGB.
//    * @param b intervalo de cores RGB.
//    * @returns retorna uma sequência de escape para cor de texto de 24 bits.
//    * ----
//    */
//   protected twenty_four_bits_foreground(
//     r: TRGBInterval,
//     g: TRGBInterval,
//     b: TRGBInterval
//   ): string {
//     return `\x1b[38;2;${r};${g};${b}m`;
//   }

//   /**
//    * ![](./~srcs/feedstock-logo.png)
//    * #### Fundo de Texto de Formatação de Cores de 24 Bits
//    * @param r intervalo de cores RGB.
//    * @param g intervalo de cores RGB.
//    * @param b intervalo de cores RGB.
//    * @returns retorna uma sequência de escape para cor de fundo de 24 bits.
//    * ----
//    */
//   protected twenty_four_bits_background(
//     r: TRGBInterval,
//     g: TRGBInterval,
//     b: TRGBInterval
//   ): string {
//     return `\x1b[38;2;${r};${g};${b}m`;
//   }

//   /**
//    * ![](./~srcs/feedstock-logo.png)
//    * #### Formatação de Texto
//    * @param x Texto que será formatado.
//    * @param formatacao Lista de formatações desejadas.
//    * @returns retorna o texto formatado.
//    */
//   public formatter(x: string, ...formatacao: TFormatterModels[]): string {
//     let formatos: string = "";

//     formatacao.forEach((formato) => {
//       switch (formato) {
//         case "@normal_or_reset":
//           formatos += this.select_graphic_rendition.normal_or_reset;
//           break;
//         case "@bold_or_increased_intensity":
//           formatos += this.select_graphic_rendition.bold_or_increased_intensity;
//           break;
//         case "@faint_or_dim_or_decreased_intensity":
//           formatos +=
//             this.select_graphic_rendition.faint_or_dim_or_decreased_intensity;
//           break;
//         case "@italic":
//           formatos += this.select_graphic_rendition.italic;
//           break;
//         case "@undeline":
//           formatos += this.select_graphic_rendition.undeline;
//           break;
//         case "@slow_blink":
//           formatos += this.select_graphic_rendition.slow_blink;
//           break;
//         case "@rapid_blink":
//           formatos += this.select_graphic_rendition.rapid_blink;
//           break;
//         case "@reverse_video_or_invert":
//           formatos += this.select_graphic_rendition.reverse_video_or_invert;
//           break;
//         case "@conceal_or_hide":
//           formatos += this.select_graphic_rendition.conceal_or_hide;
//           break;
//         case "@crossed_out_or_strike":
//           formatos += this.select_graphic_rendition.crossed_out_or_strike;
//           break;
//         case "@primary_font":
//           formatos += this.select_graphic_rendition.primary_font;
//           break;
//         case "@alternative_font_a":
//           formatos += this.select_graphic_rendition.alternative_font_a;
//           break;
//         case "@alternative_font_b":
//           formatos += this.select_graphic_rendition.alternative_font_b;
//           break;
//         case "@alternative_font_c":
//           formatos += this.select_graphic_rendition.alternative_font_c;
//           break;
//         case "@alternative_font_d":
//           formatos += this.select_graphic_rendition.alternative_font_d;
//           break;
//         case "@alternative_font_e":
//           formatos += this.select_graphic_rendition.alternative_font_e;
//           break;
//         case "@alternative_font_f":
//           formatos += this.select_graphic_rendition.alternative_font_f;
//           break;
//         case "@alternative_font_g":
//           formatos += this.select_graphic_rendition.alternative_font_g;
//           break;
//         case "@alternative_font_h":
//           formatos += this.select_graphic_rendition.alternative_font_h;
//           break;
//         case "@alternative_font_i":
//           formatos += this.select_graphic_rendition.alternative_font_i;
//           break;
//         case "@fraktur_gothic":
//           formatos += this.select_graphic_rendition.fraktur_gothic;
//           break;
//         case "@doubly_underlined_or_not_bold":
//           formatos +=
//             this.select_graphic_rendition.doubly_underlined_or_not_bold;
//           break;
//         case "@normal_intensity":
//           formatos += this.select_graphic_rendition.normal_intensity;
//           break;
//         case "@neither_italic_nor_blackletter":
//           formatos +=
//             this.select_graphic_rendition.neither_italic_nor_blackletter;
//           break;
//         case "@not_underlined":
//           formatos += this.select_graphic_rendition.not_underlined;
//           break;
//         case "@not_blinking":
//           formatos += this.select_graphic_rendition.not_blinking;
//           break;
//         case "@proportional_spacing":
//           formatos += this.select_graphic_rendition.proportional_spacing;
//           break;
//         case "@not_reversed":
//           formatos += this.select_graphic_rendition.not_reversed;
//           break;
//         case "@reveal":
//           formatos += this.select_graphic_rendition.reveal;
//           break;
//         case "@not_crossed_out":
//           formatos += this.select_graphic_rendition.not_crossed_out;
//           break;
//         case "@disable_proportional_spacing":
//           formatos +=
//             this.select_graphic_rendition.disable_proportional_spacing;
//           break;
//         case "@framed":
//           formatos += this.select_graphic_rendition.framed;
//           break;
//         case "@encicled":
//           formatos += this.select_graphic_rendition.encicled;
//           break;
//         case "@overlined":
//           formatos += this.select_graphic_rendition.overlined;
//           break;
//         case "@neither_framed_of_encircled":
//           formatos += this.select_graphic_rendition.neither_framed_of_encircled;
//           break;
//         case "@not_overlined":
//           formatos += this.select_graphic_rendition.not_overlined;
//           break;
//         case "@default_underline_color":
//           formatos += this.select_graphic_rendition.default_underline_color;
//           break;
//         case "@ideogram_underline_or_right_side_line":
//           formatos +=
//             this.select_graphic_rendition.ideogram_underline_or_right_side_line;
//           break;
//         case "@ideogram_double_underline_or_double_line_on_the_right_side":
//           formatos +=
//             this.select_graphic_rendition
//               .ideogram_double_underline_or_double_line_on_the_right_side;
//           break;
//         case "@ideogram_overline_or_left_side_line":
//           formatos +=
//             this.select_graphic_rendition.ideogram_overline_or_left_side_line;
//           break;
//         case "@ideogram_double_overline_or_double_line_on_the_left_side":
//           formatos +=
//             this.select_graphic_rendition
//               .ideogram_double_overline_or_double_line_on_the_left_side;
//           break;
//         case "@ideogram_stress_marking":
//           formatos += this.select_graphic_rendition.ideogram_stress_marking;
//           break;
//         case "@no_ideogram_attributes":
//           formatos += this.select_graphic_rendition.no_ideogram_attributes;
//           break;
//         case "@superscript":
//           formatos += this.select_graphic_rendition.superscript;
//           break;
//         case "@subscript":
//           formatos += this.select_graphic_rendition.subscript;
//           break;
//         case "@neither_superscript_nor_subscript":
//           formatos +=
//             this.select_graphic_rendition.neither_superscript_nor_subscript;
//           break;
//         case "@default_foreground_color":
//           formatos +=
//             this.select_graphic_rendition.colors.default_foreground_color;
//           break;
//         case "@default_background_color":
//           formatos +=
//             this.select_graphic_rendition.colors.default_background_color;
//           break;
//         case "@foreground_3_or_4_bits_black":
//           formatos +=
//             this.select_graphic_rendition.colors.three_bits_and_four_bits
//               .foreground.black;
//           break;
//         case "@foreground_3_or_4_bits_red":
//           formatos +=
//             this.select_graphic_rendition.colors.three_bits_and_four_bits
//               .foreground.red;
//           break;
//         case "@foreground_3_or_4_bits_green":
//           formatos +=
//             this.select_graphic_rendition.colors.three_bits_and_four_bits
//               .foreground.green;
//           break;
//         case "@foreground_3_or_4_bits_yellow":
//           formatos +=
//             this.select_graphic_rendition.colors.three_bits_and_four_bits
//               .foreground.yellow;
//           break;
//         case "@foreground_3_or_4_bits_blue":
//           formatos +=
//             this.select_graphic_rendition.colors.three_bits_and_four_bits
//               .foreground.blue;
//           break;
//         case "@foreground_3_or_4_bits_magenta":
//           formatos +=
//             this.select_graphic_rendition.colors.three_bits_and_four_bits
//               .foreground.magenta;
//           break;
//         case "@foreground_3_or_4_bits_cyan":
//           formatos +=
//             this.select_graphic_rendition.colors.three_bits_and_four_bits
//               .foreground.cyan;
//           break;
//         case "@foreground_3_or_4_bits_white":
//           formatos +=
//             this.select_graphic_rendition.colors.three_bits_and_four_bits
//               .foreground.white;
//           break;
//         case "@foreground_3_or_4_bits_bright_black_gray":
//           formatos +=
//             this.select_graphic_rendition.colors.three_bits_and_four_bits
//               .foreground.bright_black_gray;
//           break;
//         case "@foreground_3_or_4_bits_bright_red":
//           formatos +=
//             this.select_graphic_rendition.colors.three_bits_and_four_bits
//               .foreground.bright_red;
//           break;
//         case "@foreground_3_or_4_bits_bright_green":
//           formatos +=
//             this.select_graphic_rendition.colors.three_bits_and_four_bits
//               .foreground.bright_green;
//           break;
//         case "@foreground_3_or_4_bits_bright_yellow":
//           formatos +=
//             this.select_graphic_rendition.colors.three_bits_and_four_bits
//               .foreground.bright_yellow;
//           break;
//         case "@foreground_3_or_4_bits_bright_blue":
//           formatos +=
//             this.select_graphic_rendition.colors.three_bits_and_four_bits
//               .foreground.bright_blue;
//           break;
//         case "@foreground_3_or_4_bits_bright_magenta":
//           formatos +=
//             this.select_graphic_rendition.colors.three_bits_and_four_bits
//               .foreground.bright_magenta;
//           break;
//         case "@foreground_3_or_4_bits_bright_cyan":
//           formatos +=
//             this.select_graphic_rendition.colors.three_bits_and_four_bits
//               .foreground.bright_cyan;
//           break;
//         case "@foreground_3_or_4_bits_bright_white":
//           formatos +=
//             this.select_graphic_rendition.colors.three_bits_and_four_bits
//               .foreground.bright_white;
//           break;
//         case "@background_3_or_4_bits_black":
//           formatos +=
//             this.select_graphic_rendition.colors.three_bits_and_four_bits
//               .background.black;
//           break;
//         case "@background_3_or_4_bits_red":
//           formatos +=
//             this.select_graphic_rendition.colors.three_bits_and_four_bits
//               .background.red;
//           break;
//         case "@background_3_or_4_bits_green":
//           formatos +=
//             this.select_graphic_rendition.colors.three_bits_and_four_bits
//               .background.green;
//           break;
//         case "@background_3_or_4_bits_yellow":
//           formatos +=
//             this.select_graphic_rendition.colors.three_bits_and_four_bits
//               .background.yellow;
//           break;
//         case "@background_3_or_4_bits_blue":
//           formatos +=
//             this.select_graphic_rendition.colors.three_bits_and_four_bits
//               .background.blue;
//           break;
//         case "@background_3_or_4_bits_magenta":
//           formatos +=
//             this.select_graphic_rendition.colors.three_bits_and_four_bits
//               .background.magenta;
//           break;
//         case "@background_3_or_4_bits_cyan":
//           formatos +=
//             this.select_graphic_rendition.colors.three_bits_and_four_bits
//               .background.cyan;
//           break;
//         case "@background_3_or_4_bits_white":
//           formatos +=
//             this.select_graphic_rendition.colors.three_bits_and_four_bits
//               .background.white;
//           break;
//         case "@background_3_or_4_bits_bright_black_gray":
//           formatos +=
//             this.select_graphic_rendition.colors.three_bits_and_four_bits
//               .background.bright_black_gray;
//           break;
//         case "@background_3_or_4_bits_bright_red":
//           formatos +=
//             this.select_graphic_rendition.colors.three_bits_and_four_bits
//               .background.bright_red;
//           break;
//         case "@background_3_or_4_bits_bright_green":
//           formatos +=
//             this.select_graphic_rendition.colors.three_bits_and_four_bits
//               .background.bright_green;
//           break;
//         case "@background_3_or_4_bits_bright_yellow":
//           formatos +=
//             this.select_graphic_rendition.colors.three_bits_and_four_bits
//               .background.bright_yellow;
//           break;
//         case "@background_3_or_4_bits_bright_blue":
//           formatos +=
//             this.select_graphic_rendition.colors.three_bits_and_four_bits
//               .background.bright_blue;
//           break;
//         case "@background_3_or_4_bits_bright_magenta":
//           formatos +=
//             this.select_graphic_rendition.colors.three_bits_and_four_bits
//               .background.bright_magenta;
//           break;
//         case "@background_3_or_4_bits_bright_cyan":
//           formatos +=
//             this.select_graphic_rendition.colors.three_bits_and_four_bits
//               .background.bright_cyan;
//           break;
//         case "@background_3_or_4_bits_bright_white":
//           formatos +=
//             this.select_graphic_rendition.colors.three_bits_and_four_bits
//               .background.bright_white;
//           break;
//         default:
//           if (typeof formato === "object") {
//             if ("@foreground_8_bits" in formato) {
//               formatos += BashFormatter.prototype.eight_bits_foreground(
//                 formato["@foreground_8_bits"].x
//               );
//             } else if ("@background_8_bits" in formato) {
//               formatos += BashFormatter.prototype.eight_bits_background(
//                 formato["@background_8_bits"].x
//               );
//             } else if ("@foreground_24_bits" in formato) {
//               formatos += BashFormatter.prototype.twenty_four_bits_foreground(
//                 formato["@foreground_24_bits"].r,
//                 formato["@foreground_24_bits"].g,
//                 formato["@foreground_24_bits"].b
//               );
//             } else if ("@background_24_bits" in formato) {
//               formatos += BashFormatter.prototype.twenty_four_bits_background(
//                 formato["@background_24_bits"].r,
//                 formato["@background_24_bits"].g,
//                 formato["@background_24_bits"].b
//               );
//             }
//           }
//           break;
//       }
//     });
//     return formatos + x + this.select_graphic_rendition.normal_or_reset;
//   }
// }
