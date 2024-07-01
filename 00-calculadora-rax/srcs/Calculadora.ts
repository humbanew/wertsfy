import { writeFileSync } from "fs";
import UndefinedValueException from "./errors/eUndefinedValueException/EUndefinedValueException";
import IEstruturaMemoria from "./interfaces/iEstruturaMemoria/IEstruturaMemoria";
import IRegistroModulo from "./interfaces/iRegistroModulo/IRegistroModulo";
import RCEspecificacoes from "./RCEspecificacoes";

// variavel de exemplo
let example: IRegistroModulo; 

export default class Calculadora extends RCEspecificacoes {
  private valor: number;
  private memoria: {
    "@1": IEstruturaMemoria;
    "@2": IEstruturaMemoria;
    "@3": IEstruturaMemoria;
    "@4": IEstruturaMemoria;
    "@5": IEstruturaMemoria;
  };
  public historico: string[];
  public expressao: string;

  public constructor() {
    super();
    this.valor = 0;
    if (this.memoria) {
      for (let i = 0; i < 5; i++) {
        this.memoria[`@${i}`].valor = 0;
      }
    }
    this.geraArquivoDeConfiguracao();
  }

  public get Valor(): number {
    if (this.valor == undefined) {
      throw new UndefinedValueException();
    } else {
      this.valor;
    }
    return this.valor;
  }

  private geraArquivoDeConfiguracao(): void {
    console.log(
      "\x1b[1;31m>> [RCalc:GeraArquivoDeConfiguracao] Gerando arquivo de configuração...\x1b[0m"
    );
    writeFileSync(
      "raxcalc.config.json",
      JSON.stringify({
        "nome-exibicao": this.nomeExibicao,
        versao: this.versao,
        distribuidor: this.distribuidor,
        configuracoes: {
          "espacos-de-memoria": 5,
          historico: 100,
          modulos: [{}],
        },
      }),
      {
        encoding: "utf-8",
        flush: true,
        flag: "w",
        mode: 0o666,
      }
    );
  }

  // TODO: ainda não implementado
  private verificaArquivoDeConfiguracao(): void {}

  public trocaSinal(): void {
    this.valor = -1 * this.valor;
  }

  public zeraCalculadora(): void {
    this.valor = 0;
  }

  public zeraExpressao(): void {
    this.expressao = "";
  }

  public zeraMemoria(): void {
    if (this.memoria) {
      for (let i = 0; i < 5; i++) {
        this.memoria[`@${i}`].valor = 0;
      }
    }
  }
}
let foo = new Calculadora();
