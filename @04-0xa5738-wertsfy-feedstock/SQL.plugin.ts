import { writeFileSync } from "fs";

type Targ0 =
  | "CREATE"
  | "SELECT"
  | "DROP"
  | "DELETE"
  | "ALTER"
  | "INSERT"
  | "ROLLBACK;"
  | "COMMIT;";
type Targ1 = "TABLE" | "SCHEMA" | "TRIGGER" | "DATABASE" | "INTO" | "*";
type Targ2 = "FROM" | "VALUES";

export class CSQL {
  /**
   * ![](./~srcs/feedstock-logo.png)
   * #### Criador de Comandos SQL
   * @param x argumentos primários.
   * @param y argumentos secundários - filhos dos primários.
   * @param nomeEstrutura argumentos de nome da estrutura.
   * @param z argumentos ternários - filhos dos secundários.
   * @param w argumentos de decisão de script.
   * @returns retorna o texto com o comando completo SQL.
   * ----
   */
  public formatador(
    x: Targ0,
    y: Targ1 | string[],
    nomeEstrutura?: string | null,
    z?: Targ2,
    w?: string
  ): string {
    if (
      x === "CREATE" ||
      x === "DROP" ||
      x === "ALTER" ||
      x === "DELETE" ||
      x === "SELECT"
    ) {
      return `${x} ${y} ${z} ${nomeEstrutura} ${w};`;
    } else if (x === "INSERT") {
      return `${x} ${y} ${nomeEstrutura} ${z};`;
    }
  }

  /**
   * ![](./~srcs/feedstock-logo.png)
   * #### Criador de Arquivos SQL
   * @param comandos lista de comandos SQL.
   * ----
   */
  public criaArquivo(...comandos: string[]): void {
    let i = 0;
    while (comandos.length > i) {
      writeFileSync(`./script.sql`, comandos[i] + "\n");
      i++;
    }
  }
}
