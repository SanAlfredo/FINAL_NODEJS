import config from "./../config";

import { Sequelize } from "sequelize";

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

// const { Pool } = require("pg");

// const pool = new Pool({
//   host: config.host,
//   database: config.database,
//   user: config.user,
//   password: config.password,
//   port: config.port,
// });

// module.exports = {
//   query: (text,params,callback)=>{
//     return pool.query(text,params,callback)
//   },
// };

// const { Client } = require("pg");

// const Conectarse = async () => {
//   const client = new Client();
//   await client.connect();

//   const res = await client.query("SELECT $1::text as message", [
//     "Hello world!",
//   ]);
//   const result = res.rows[0].message;
//   console.log(result); // Hello world!
//   await client.end();
//   return result;
// };

// Conectarse().then((result) => {
//   console.log(result);
// });
