import Sequelize from "sequelize";

import { DB } from "./keys";

export default new Sequelize(DB.name, DB.user, DB.password, {
  host: DB.host,
  dialect: DB.dialect,
});
