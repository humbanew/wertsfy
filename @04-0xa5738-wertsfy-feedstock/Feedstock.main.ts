import { Asuza } from "./Asuza";
import { BashFormatter } from "./BashFormatter.plugin";
import { Karzok } from "./Karzok";
import { Nikko } from "./Nikko";
import { Polychromy } from "./Polychromy";
import { CSQL } from "./SQL.plugin";
import {
  DiscordJS,
  Dockerode,
  IORedis,
  MariaDB,
  MongoDB,
  MySQL,
  NoSQL,
  OracleSQL,
  PostgreSQL,
  Redis,
  RobloxTS,
  SQLite,
} from "./feedstock.plugins";

/**
 * ![](./~srcs/feedstock-logo.png)
 * # Objeto com todas as funções "Matéria Prima"
 */
export var fdstk = {
  /**
   * ![](./~srcs/feedstock-logo.png)
   * ## Lista de Componentes de Matérias Primas
   * ----
   */
  componentes: {
    /**
     * ![](./~srcs/feedstock-logo.png)
     * ### Polychromy - Biblioteca de Criação de Cores HEX e RGBA
     * ----
     */
    polychromy: Polychromy, // 100%

    /**
     * ![](./~srcs/feedstock-logo.png)
     * ### Nikko - Biblioteca de Criação de Testes Unitários
     * ----
     * @todo **versão Delta**
     */
    nikko: Nikko, // 4%

    /**
     * ![](./~srcs/feedstock-logo.png)
     * ### Karzok - Biblioteca de Criação de Arquivos baseado em Templates
     * ----
     * @todo **versão Delta**
     */
    karzok: Karzok, // 0%

    /**
     * ![](./~srcs/feedstock-logo.png)
     * ### Asuza - Biblioteca de Criação de Abstrações
     * ----
     * @todo **versão Delta**
     */
    asuza: Asuza, // 0%
  },

  /**
   * ![](./~srcs/feedstock-logo.png)
   * ## Lista de Plugins da Feedstock
   * ----
   */
  plugins: {
    /**
     * ![](./~srcs/feedstock-logo.png)
     * ### Bash Formatter (Plugin) - Biblioteca de Formatação de Texto na Linha de Comando
     * ----
     */
    bash_formatter: BashFormatter, // 100%

    /**
     * ![](./~srcs/feedstock-logo.png)
     * ### SQL (Plugin) - Biblioteca de Criação de Comandos SQL
     * ----
     * @todo **versão Delta**
     */
    sql_constructor: CSQL, // 1%
  },

  /**
   * ![](./~srcs/feedstock-logo.png)
   * ## Lista de Plugins Externos
   * ----
   */
  plugins_externos: {
    /**
     * ![](./~srcs/feedstock-logo.png)
     * ### Dockerode (Plugin) - Manipulador de Containers Docker
     * ----
     * Veja as documentações em:
     * @see https://www.npmjs.com/package/dockerode
     * @see https://docs.docker.com/engine/api/sdk
     */
    docker_manipulator: Dockerode,

    /**
     * ![](./~srcs/feedstock-logo.png)
     * ### MariaDB (Plugin) - Manipulador de Banco de Dados MariaDB
     * ----
     * Veja as documentações em:
     * @see https://www.npmjs.com/package/mariadb
     * @see https://mariadb.com/kb/en/documentation
     */
    mariadb_manipulator: MariaDB,

    /**
     * ![](./~srcs/feedstock-logo.png)
     * ### MySQL (Plugin) - Manipulador de Banco de Dados MySQL
     * ----
     * Veja as documenções em:
     * @see https://www.npmjs.com/package/mysql
     * @see https://dev.mysql.com/doc
     */
    mysql_manipulator: MySQL,

    /**
     * ![](./~srcs/feedstock-logo.png)
     * ### PostgreSQL (Plugin) - Manipulador de Banco de Dados PostgreSQL
     * ----
     * Veja as documentações em:
     * @see https://www.npmjs.com/package/postgres
     * @see https://www.postgresql.org/docs
     */
    postgresql_manipulator: PostgreSQL,

    /**
     * ![](./~srcs/feedstock-logo.png)
     * ### SQLite (Plugin) - Manipulador de Banco de Dados SQLite
     * ----
     * Veja as documentações em:
     * @see https://www.npmjs.com/package/sqlite3
     * @see https://www.sqlite.org/docs.html
     */
    sqlite_manipulator: SQLite,

    /**
     * ![](./~srcs/feedstock-logo.png)
     * ### NoSQL (Plugin) - Manipulador de Banco de Dados NoSQL
     * ----
     * Veja as documentações em:
     * @see https://www.npmjs.com/package/nosql
     * @see https://en.wikipedia.org/wiki/NoSQL
     */
    nosql_manipulator: NoSQL,

    /**
     * ![](./~srcs/feedstock-logo.png)
     * ### OracleSQL (Plugin) - Manipulador de Banco de Dados OracleSQL
     * ----
     * Veja as documentações em:
     * @see https://www.npmjs.com/package/oracledb
     * @see https://node-oracledb.readthedocs.io/en/latest/user_guide/introduction.html
     * @see https://docs.oracle.com/en/database/oracle/oracle-database/19/index.html
     */
    oraclesql_manipulator: OracleSQL,

    /**
     * ![](./~srcs/feedstock-logo.png)
     * ### MongoDB (Plugin) - Manipulador de Banco de Dados MongoDB
     * ----
     * Veja as documentações em:
     * @see https://www.npmjs.com/package/mongodb
     * @see https://docs.mongodb.com
     */
    mongodb_manipulator: MongoDB,

    /**
     * ![](./~srcs/feedstock-logo.png)
     * ### Redis (Plugin) - Manipulador de Banco de Dados Redis
     * ----
     * Veja as documentações em:
     * @see https://www.npmjs.com/package/redis
     * @see https://www.npmjs.com/package/ioredis
     * @see https://redis.io/documentation
     */
    redis_manipulator: {
      /** 
       * ![](./~srcs/feedstock-logo.png)
       * #### Redis (Plugin) - Manipulador de Banco de Dados Redis - All
       * ----
       */
      redis: Redis,
      
      /** 
       * ![](./~srcs/feedstock-logo.png)
       * #### Redis (Plugin) - Manipulador de Banco de Dados Redis - IORedis
       */
      ioredis: IORedis 
    },

    /**
     * ### RobloxTS - Biblioteca de Criação de Scripts para Roblox
     * ----
     * Veja as documentações em: 
     * @see https://www.npmjs.com/package/roblox-ts
     * @see https://roblox-ts.com/docs/
     */
    robloxts_constructor: RobloxTS,

    /**
     * ### DiscordJS - Biblioteca de Criação de Bots para Discord
     * ----
     * Veja as documentações em: 
     * @see https://www.npmjs.com/package/discord.js
     * @see https://discord.js.org/#/docs/main/stable/general/welcome
     */
    discordjs_constructor: DiscordJS,
  }
};
