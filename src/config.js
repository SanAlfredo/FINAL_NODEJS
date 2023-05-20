import { config } from "dotenv";

config();

export default {
  host: process.env.PGSQL_HOST || "",
  database: process.env.PGSQL_DATABASE || "",
  user: process.env.PGSQL_USER || "",
  password: process.env.PGSQL_PASSWORD || "",
  port: process.env.PGSQL_PORT || "",
};
