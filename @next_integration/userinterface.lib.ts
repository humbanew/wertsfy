let userinterface = 
{ 

  terminal: { 

    Consts: { 

      c_eschar_new_line: "\n",

      c_eschar_tab: "\t",

      c_eschar_carriage_return: "\r",

      c_eschar_backspace: "\b",

      c_eschar_null: "\0",

      c_eschar_form_feed: "\f",

      c_eschar_vertical_tab: "\v",

      c_eschar_backslash: "\\",

      c_eschar_single_quote: "\'",

      c_eschar_double_quote: "\"",

    },

    Methods: { 

      m_format_negrito: (conteudo: string): string => { 
        return `\x1b[01m${conteudo}\x1b[00m`; 
      },

      m_format_faint: (conteudo: string): string => {
        return `\x1b[02m${conteudo}\x1b[00m`;
      },

      m_format_italico: (conteudo: string): string => {
        return `\x1b[03m${conteudo}\x1b[00m`;
      },

      m_format_sublinhado: (conteudo: string): string => {
        return `\x1b[04m${conteudo}\x1b[00m`;
      },

      m_format_slow_blink: (conteudo: string): string => {
        return `\x1b[05m${conteudo}\x1b[00m`;
      },

      m_format_rapid_blink: (conteudo: string): string => {
        return `\x1b[06m${conteudo}\x1b[00m`;
      },

      m_format_reverse: (conteudo: string): string => {
        return `\x1b[07m${conteudo}\x1b[00m`;
      },

      m_format_conceal: (conteudo: string): string => {
        return `\x1b[08m${conteudo}\x1b[00m`;
      },

      m_format_crossed_out: (conteudo: string): string => {
        return `\x1b[09m${conteudo}\x1b[00m`;
      },

      m_format_default_font: (conteudo: string): string => {
        return `\x1b[10m${conteudo}\x1b[00m`;
      },

      m_format_alt_font_1: (conteudo: string): string => {
        return `\x1b[11m${conteudo}\x1b[00m`;
      },

      m_format_alt_font_2: (conteudo: string): string => {
        return `\x1b[12m${conteudo}\x1b[00m`;
      },

      m_format_alt_font_3: (conteudo: string): string => {
        return `\x1b[13m${conteudo}\x1b[00m`;
      },

      m_format_alt_font_4: (conteudo: string): string => {
        return `\x1b[14m${conteudo}\x1b[00m`;
      },

      m_format_alt_font_5: (conteudo: string): string => {
        return `\x1b[15m${conteudo}\x1b[00m`;
      },

      m_format_alt_font_6: (conteudo: string): string => {
        return `\x1b[16m${conteudo}\x1b[00m`;
      },

      m_format_alt_font_7: (conteudo: string): string => {
        return `\x1b[17m${conteudo}\x1b[00m`;
      },

      m_format_alt_font_8: (conteudo: string): string => {
        return `\x1b[18m${conteudo}\x1b[00m`;
      },

      m_format_alt_font_9: (conteudo: string): string => {
        return `\x1b[19m${conteudo}\x1b[00m`;
      },

      m_format_fraktur: (conteudo: string): string => {
        return `\x1b[20m${conteudo}\x1b[00m`;
      },

      m_format_doubly_underline: (conteudo: string): string => {
        return `\x1b[21m${conteudo}\x1b[00m`;
      },

      m_format_normal_intensity: (conteudo: string): string => {
        return `\x1b[22m${conteudo}\x1b[00m`;
      },

      m_format_not_italic: (conteudo: string): string => {
        return `\x1b[23m${conteudo}\x1b[00m`;
      },

      m_format_not_underline: (conteudo: string): string => {
        return `\x1b[24m${conteudo}\x1b[00m`;
      },

      m_format_blinkoff: (conteudo: string): string => {
        return `\x1b[25m${conteudo}\x1b[00m`;
      },

      m_format_spacing: (conteudo: string): string => {
        return `\x1b[26m${conteudo}\x1b[00m`;
      },

      m_format_reverseoff: (conteudo: string): string => {
        return `\x1b[27m${conteudo}\x1b[00m`;
      },

      m_format_concealoff: (conteudo: string): string => {
        return `\x1b[28m${conteudo}\x1b[00m`;
      },

      m_format_notcrossed: (conteudo: string): string => {
        return `\x1b[29m${conteudo}\x1b[00m`;
      },

      m_format_proposital_spacing: (conteudo: string): string => {
        return `\x1b[50m${conteudo}\x1b[00m`;
      },

      m_format_framed: (conteudo: string): string => {
        return `\x1b[51m${conteudo}\x1b[00m`;
      },

      m_format_encircled: (conteudo: string): string => {
        return `\x1b[52m${conteudo}\x1b[00m`;
      },

      m_format_overlined: (conteudo: string): string => {
        return `\x1b[53m${conteudo}\x1b[00m`;
      },

      m_format_notencircled: (conteudo: string): string => {
        return `\x1b[54m${conteudo}\x1b[00m`;
      },

      m_format_notoverlined: (conteudo: string): string => {
        return `\x1b[55m${conteudo}\x1b[00m`;
      },

      m_format_sublinhado_colorido: (conteudo: string, r: number, g: number, b: number, t: 2|5): string => {
        return `\x1b[58${t};${r};${g};${b}m${conteudo}\x1b[00m`;
      },

      m_format_sublinhado_padrao: (conteudo: string): string => {
        return `\x1b[59m${conteudo}\x1b[00m`;
      },

      m_format_ideograma: (conteudo: string): string => {
        return `\x1b[60m${conteudo}\x1b[00m`;
      },

      m_format_ideograma_duplo: (conteudo: string): string => {
        return `\x1b[61m${conteudo}\x1b[00m`;
      },

      m_format_ideograma_overline: (conteudo: string): string => {
        return `\x1b[62m${conteudo}\x1b[00m`;
      },

      m_format_ideograma_overline_duplo: (conteudo: string): string => {
        return `\x1b[63m${conteudo}\x1b[00m`;
      },

      m_format_ideograma_stress: (conteudo: string): string => {
        return `\x1b[64m${conteudo}\x1b[00m`;
      },

      m_format_no_ideograma_atributes: (conteudo: string): string => {
        return `\x1b[65m${conteudo}\x1b[00m`;
      },

      m_format_superscript: (conteudo: string): string => {
        return `\x1b[73m${conteudo}\x1b[00m`;
      },

      m_format_subscript: (conteudo: string): string => {
        return `\x1b[74m${conteudo}\x1b[00m`;
      },

      m_format_superscript_subscript: (conteudo: string): string => {
        return `\x1b[75m${conteudo}\x1b[00m`;
      },

      m_color_fundo_3b4bit_preto: (conteudo: string): string => {
        return `\x1b[40m${conteudo}\x1b[00m`;
      },

      m_color_fundo_3b4bit_vermelho: (conteudo: string): string => {
        return `\x1b[41m${conteudo}\x1b[00m`;
      },

      m_color_fundo_3b4bit_verde: (conteudo: string): string => {
        return `\x1b[42m${conteudo}\x1b[00m`;
      },

      m_color_fundo_3b4bit_amarelo: (conteudo: string): string => {
        return `\x1b[43m${conteudo}\x1b[00m`;
      },

      m_color_fundo_3b4bit_azul: (conteudo: string): string => {
        return `\x1b[44m${conteudo}\x1b[00m`;
      },

      m_color_fundo_3b4bit_roxo: (conteudo: string): string => {
        return `\x1b[45m${conteudo}\x1b[00m`;
      },

      m_color_fundo_3b4bit_ciano: (conteudo: string): string => {
        return `\x1b[46m${conteudo}\x1b[00m`;
      },

      m_color_fundo_3b4bit_cinza: (conteudo: string): string => {
        return `\x1b[47m${conteudo}\x1b[00m`;
      },

      m_color_fundo_3b4bit_cinza_claro: (conteudo: string): string => {
        return `\x1b[100m${conteudo}\x1b[00m`;
      },

      m_color_fundo_3b4bit_vermelho_claro: (conteudo: string): string => {
        return `\x1b[101m${conteudo}\x1b[00m`;
      },

      m_color_fundo_3b4bit_verde_claro: (conteudo: string): string => {
        return `\x1b[102m${conteudo}\x1b[00m`;
      },

      m_color_fundo_3b4bit_amarelo_claro: (conteudo: string): string => {
        return `\x1b[103m${conteudo}\x1b[00m`;
      },

      m_color_fundo_3b4bit_azul_claro: (conteudo: string): string => {
        return `\x1b[104m${conteudo}\x1b[00m`;
      },

      m_color_fundo_3b4bit_roxo_claro: (conteudo: string): string => {
        return `\x1b[105m${conteudo}\x1b[00m`;
      },

      m_color_fundo_3b4bit_ciano_claro: (conteudo: string): string => {
        return `\x1b[106m${conteudo}\x1b[00m`;
      },

      m_color_fundo_3b4bit_branco: (conteudo: string): string => {
        return `\x1b[107m${conteudo}\x1b[00m`;
      },

      m_color_letra_3b4bit_preto: (conteudo: string): string => {
        return `\x1b[30m${conteudo}\x1b[00m`;
      },

      m_color_letra_3b4bit_vermelho: (conteudo: string): string => {
        return `\x1b[31m${conteudo}\x1b[00m`;
      },

      m_color_letra_3b4bit_verde: (conteudo: string): string => {
        return `\x1b[32m${conteudo}\x1b[00m`;
      },

      m_color_letra_3b4bit_amarelo: (conteudo: string): string => {
        return `\x1b[33m${conteudo}\x1b[00m`;
      },

      m_color_letra_3b4bit_azul: (conteudo: string): string => {
        return `\x1b[34m${conteudo}\x1b[00m`;
      },

      m_color_letra_3b4bit_roxo: (conteudo: string): string => {
        return `\x1b[35m${conteudo}\x1b[00m`;
      },

      m_color_letra_3b4bit_ciano: (conteudo: string): string => {
        return `\x1b[36m${conteudo}\x1b[00m`;
      },

      m_color_letra_3b4bit_cinza: (conteudo: string): string => {
        return `\x1b[37m${conteudo}\x1b[00m`;
      },

      m_color_letra_3b4bit_cinza_claro: (conteudo: string): string => {
        return `\x1b[90m${conteudo}\x1b[00m`;
      },

      m_color_letra_3b4bit_vermelho_claro: (conteudo: string): string => {
        return `\x1b[91m${conteudo}\x1b[00m`;
      },

      m_color_letra_3b4bit_verde_claro: (conteudo: string): string => {
        return `\x1b[92m${conteudo}\x1b[00m`;
      },

      m_color_letra_3b4bit_amarelo_claro: (conteudo: string): string => {
        return `\x1b[93m${conteudo}\x1b[00m`;
      },

      m_color_letra_3b4bit_azul_claro: (conteudo: string): string => {
        return `\x1b[94m${conteudo}\x1b[00m`;
      },

      m_color_letra_3b4bit_roxo_claro: (conteudo: string): string => {
        return `\x1b[95m${conteudo}\x1b[00m`;
      },

      m_color_letra_3b4bit_ciano_claro: (conteudo: string): string => {
        return `\x1b[96m${conteudo}\x1b[00m`;
      },

      m_color_letra_3b4bit_branco: (conteudo: string): string => {
        return `\x1b[97m${conteudo}\x1b[00m`;
      },

      m_color_fundo_8bit: (conteudo: string, r: string, g: string, b: string) => {
        return `\x1b[48;5;${r};${g};${b}m${conteudo}\x1b[00m`;
      },

      m_color_letra_8bit: (conteudo: string, r: string, g: string, b: string) => {
        return `\x1b[38;5;${r};${g};${b}m${conteudo}\x1b[00m`;
      },

      m_color_fundo_24bit: (conteudo: string, r: string, g: string, b: string) => {
        return `\x1b[48;2;${r};${g};${b}m${conteudo}\x1b[00m`;
      },

      m_color_letra_24bit: (conteudo: string, r: string, g: string, b: string) => {
        return `\x1b[38;2;${r};${g};${b}m${conteudo}\x1b[00m`;
      }

    }

  }
  
  // colorpalette: { }

};
