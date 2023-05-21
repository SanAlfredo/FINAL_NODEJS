import config from "./../config";

import { Sequelize } from "sequelize";

//parametros iniciales conexion a base de datos
export const sequelize = new Sequelize(
  config.database,
  config.user,
  config.password,
  {
    host: config.host,
    dialect: "postgres",
    port: config.port,
  }
);