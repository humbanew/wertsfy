import { readFileSync, writeFileSync } from 'fs';
  
export let Polychromy = 
{

  hex: class ConstrutoresHEX
  {
    
    /**
     * ![](./~srcs/feedstock-logo.png)
     * ## Aleatorizador de números para hexadecimais
     * ----
     * @param min Numeral mínimo.
     * @param max Numeral máximo.
     * @returns retorna um valor entre 0 e 15.
     */
    protected rand = (min: number, max: number) => {
      return Math.floor(Math.random() * (max - min) + min);
    };
    
    /**
     * ![](./~srcs/feedstock-logo.png)
     * ## Enumeração do padrão hexadecimal
     * ----
     */
    protected hexdefault = (() =>{
      return {
        "00": '0',
        "01": '1',
        "02": '2',
        "03": '3',
        "04": '4',
        "05": '5',
        "06": '6',
        "07": '7',
        "08": '8',
        "09": '9',
        "10": 'a',
        "11": 'b',
        "12": 'c',
        "13": 'd',
        "14": 'e',
        "15": 'f'  
      }
    })

    /**
     * ![](./~srcs/feedstock-logo.png)
     * ## Objeto do padrão do canal alpha do hexadecimal
     * ----
     */
    protected alphaChannelDefault = { 
      x: this.hexdefault, 
      xi: this.hexdefault 
    };

    /**
     * ![](./~srcs/feedstock-logo.png)
     * ## Conversor de Hexadecimal de Cores em RGBA
     * ----
     * @param x lista de seccoes de numeros em hex.
     * @returns retorna um texto com os valores rgba.
     */
    protected hexcolorToDecimalRgba(x: number[]): string 
    { 
      let red_a:number=0, red_b:number=0, green_a:number=0, green_b:number=0, blue_a:number=0, blue_b:number=0, alpha_a:number=0, alpha_b:number=0;
      
      for(let i=0; i < x.length; i++)
      {

        switch(i)
        {
          case 0:
            red_a = x[i]*(16**1);
            break;
          case 1:
            red_b = x[i]*(16**0);
            break;
          case 2:
            green_a = x[i]*(16**1);
            break;
          case 3:
            green_b = x[i]*(16**0);
            break;
          case 4:
            blue_a = x[i]*(16**1);
            break;
          case 5:
            blue_b = x[i]*(16**0);
            break;
          case 6:
            alpha_a = x[i]*(16**1);
            break;
          case 7:
            alpha_b = x[i]*(16**0);
            break;
        }

      }

      if(alpha_a != 0 && alpha_b != 0)
      {
        return `rgba(${red_a+red_b}, ${green_a+green_b}, ${blue_a+blue_b}, ${alpha_a+alpha_b})`;
      }
      return `rgba(${red_a+red_b}, ${green_a+green_b}, ${blue_a+blue_b}, 1)`; 
    }
    
    /**
     * ![](./~srcs/feedstock-logo.png)
     * ## Construtor de Hexadecimais (Aleatório).
     * ----
     * @param addAlphaChannel Habilita ou desabilita a adição da camada alpha ao hexadecimal.
     * @param alpha Sentença com os dígitos hexadecimais.
     * @returns Retorna um hexadecimal e um RGBA em forma de texto.
     */
    public hexgen = (addAlphaChannel: boolean=false, alpha?: typeof this.alphaChannelDefault): string => {
    
      let seccoeshex: any[] = [], seccoesrgba: any[] = [], randomgen: number, hexadecimalString: string, RGBA: string = '';

      for(let i=0; i <= 5; i++)
      {
        randomgen = this.rand(0, 15);
        seccoeshex.push(randomgen);
        seccoesrgba.push(randomgen);
        
        RGBA = this.hexcolorToDecimalRgba(seccoesrgba);

        switch(seccoeshex[i])
        {
          case 0:
            seccoeshex[i] = this.hexdefault()["00"];
            break;
          case 1:
            seccoeshex[i] = this.hexdefault()["01"];
            break;
          case 2:
            seccoeshex[i] = this.hexdefault()["02"];
            break;
          case 3:
            seccoeshex[i] = this.hexdefault()["03"];
            break;
          case 4:
            seccoeshex[i] = this.hexdefault()["04"];
            break;
          case 5:
            seccoeshex[i] = this.hexdefault()["05"];
            break;
          case 6:
            seccoeshex[i] = this.hexdefault()["06"];
            break;
          case 7:
            seccoeshex[i] = this.hexdefault()["07"];
            break;
          case 8:
            seccoeshex[i] = this.hexdefault()["08"];
            break;
          case 9:
            seccoeshex[i] = this.hexdefault()["09"];
            break;
          case 10:
            seccoeshex[i] = this.hexdefault()["10"];
            break;
          case 11:
            seccoeshex[i] = this.hexdefault()["11"];
            break;
          case 12:
            seccoeshex[i] = this.hexdefault()["12"];
            break;
          case 13:
            seccoeshex[i] = this.hexdefault()["13"];
            break;
          case 14:
            seccoeshex[i] = this.hexdefault()["14"];
            break;
          case 15:
            seccoeshex[i] = this.hexdefault()["15"];
            break;
        }
      }

      let hexUnificado: string = '';
      for(let i=0; i <= 5; i++) { hexUnificado = hexUnificado + seccoeshex[i]; }

      if(addAlphaChannel == true) {
        return hexadecimalString = `HEX: ${'#'+hexUnificado+alpha?.x.toString()+alpha?.xi.toString()}, RGBA: ${RGBA}`;
      }
      return hexadecimalString = `HEX: ${'#'+hexUnificado}, RGBA: ${RGBA}`;
    
    }

    /**
     * ![](./~srcs/feedstock-logo.png)
     * ## Construtor de Hexadecimais (Definido).
     * ----
     * @param x Primeiro dígito hexadecimal vermelho.
     * @param xi Segundo dígito hexadecimal vermelho.
     * @param xii Primeiro dígito hexadecimal verde.
     * @param xiii Segundo digito hexadecimal verde.
     * @param xiv Primeiro dígito hexadecimal azul.
     * @param xv Segundo dígito hexadecimal azul.
     * @param xvi Primeiro dígito hexadecimal canal alpha.
     * @param xvii Segundo dígito hexadecimal canal alpha.
     * @returns Retorna um texto hexadecimal formatado e seu RGBA.
     */
    public hexconstructor(x: typeof this.hexdefault, xi: typeof this.hexdefault, xii: typeof this.hexdefault, xiii: typeof this.hexdefault, xiv: typeof this.hexdefault, xv: typeof this.hexdefault, xvi?: typeof this.hexdefault, xvii?: typeof this.hexdefault): string {
      
      let seccoesrgba: any[] = [];
        seccoesrgba.push(x, xi, xii, xiii, xiv, xv, xvi, xvii);

      for(let i=0; i < seccoesrgba.length; i++)
      {
        switch(seccoesrgba[i])
        {
          case "00": seccoesrgba[i] = 0; break;
          case "01": seccoesrgba[i] = 1; break;
          case "02": seccoesrgba[i] = 2; break;
          case "03": seccoesrgba[i] = 3; break;
          case "04": seccoesrgba[i] = 4; break;
          case "05": seccoesrgba[i] = 5; break;
          case "06": seccoesrgba[i] = 6; break;
          case "07": seccoesrgba[i] = 7; break;
          case "08": seccoesrgba[i] = 8; break;
          case "09": seccoesrgba[i] = 9; break;
          case "10": seccoesrgba[i] = 10; break;
          case "11": seccoesrgba[i] = 11; break;
          case "12": seccoesrgba[i] = 12; break;
          case "13": seccoesrgba[i] = 13; break;
          case "14": seccoesrgba[i] = 14; break;
          case "15": seccoesrgba[i] = 15; break;
        }
      }

      let RGBA = this.hexcolorToDecimalRgba(seccoesrgba);
      
      if(xvi != undefined && xvii != undefined)
      {
        return `HEX: #${x}${xi}${xii}${xiii}${xiv}${xv}${xvi}${xvii}, RGBA: ${RGBA}`;
      }
      return `HEX: #${x}${xi}${xii}${xiii}${xiv}${xv}, RGBA: ${RGBA};` 
    }

    /**
     * ![](./~srcs/feedstock-logo.png)
     * ## Gera Lista de Cores Hexadecimais
     * ----
     * @param qtd Quantidade de hexadecimais a serem gerados.
     */
    public hexgenlist(qtd: 5 | 10 | 20 | 40 | 60 | 100 | 150)
    {
      let content:string="";

      for(let i=0; i < qtd; i++)
      {
        content += `${this.hexgen(false)};\n`;
      }

      writeFileSync(`polychromy_gen.csv`, content);
    }

    /**
     * ![](./~srcs/feedstock-logo.png)
     * ## Lista de Cores Hexadecimais
     * ----
     */
    public get hexlist()
    {
      let hexs = readFileSync('polychromy_gen.csv', {encoding: 'utf-8'});
      return hexs;
    }

  }

}

new Polychromy.hex().hexgenlist(10);
console.log(new Polychromy.hex().hexgen(false));
