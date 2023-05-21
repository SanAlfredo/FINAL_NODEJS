import { sequelize } from "./../database/db";
import "./../models/User";

async function index() {
  try {
    //activando el modelo usuario (User) que crea la tabla usuario
    //usando sync() se crea la tabla si no existe
    await sequelize.sync();
    //usando sync({force:true}) borra la tabla anterior y crea una nueva
    console.log("Creado con exito");
  } catch (error) {
    console.log("Ha ocurrido un error", error);
  }
}

//controlador de estado
function estado(request, response) {
  response.json({
    nameSystem: "api-users",
    version: "0.0.1",
    developer: "Alfredo Valverde Aranibar",
    email: "alfredo.2009.8@gmail.com",
  });
}

export const metodos = {
  index,
  estado,
};
