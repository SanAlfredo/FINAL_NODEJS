import { sequelize } from "./../database/db";
import "./../models/User";

export async function main() {
  try {
    await sequelize.sync();
    console.log("Creado con exito");
  } catch (error) {
    console.log("Ha ocurrido un error", error);
  }
}
