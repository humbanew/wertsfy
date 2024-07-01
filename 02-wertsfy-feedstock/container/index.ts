import "discord.js";
import "dockerode";
import "mongodb";
import "mysql";
import "postgres";
import "roblox-ts";
import "sqlite3";

import Polychromy from "./modules/Polychromy";
import Bashscript from "./modules/Bashscript";
import { Cubbus } from "./modules/Cubbus";

export var wertsfy_feedstock = {
  ferramental: {},
  modulos: {
    bashscript: Bashscript.prototype,
    polychromy: Polychromy.prototype,
    cubbus: Cubbus
  },
};
