import { json } from "sequelize";
import { sequelize } from "./../database/db";
import { User } from "./../models/User";

//funcion para obtener todos los usuarios
async function getUsers(request, response) {
  try {
    //buscar todos los resultados en la base de datos
    const users = await sequelize.query("select * from usuarios");
    if (users!=null){
      //si encuentra resultados arroja en json
      return response.json(users[0]);
    }else{
      return response.json({ message: "No hay registros" });
    }
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
}
//insertar nuevo usuario
async function insertUsers(request, response) {
  const { cedula, nombre, apellido1, apellido2, nacimiento } = request.body;
  try {
    const newUser = await User.create({
      cedula_identidad: cedula,
      nombre,
      primer_apellido: apellido1,
      segundo_apellido: apellido2,
      fecha_nacimiento: nacimiento,
    });
    return response.json(newUser.id);
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
}
//actualizar usuario
async function updateUsers(request, response) {
  const { cedula, nombre, apellido1, apellido2, nacimiento } = request.body;
  try {
    const { id } = request.params;
    let user = await User.findByPk(id);
    if (user != null) {
      user.cedula_identidad = cedula;
      user.nombre = nombre;
      user.primer_apellido = apellido1;
      user.segundo_apellido = apellido2;
      user.fecha_nacimiento = nacimiento;
      await user.save();
      return response.json(user);
    } else {
      return response.json({ message: "No existe en la base de datos" });
    }
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
}
//eliminar usuario
async function deleteUsers(request, response) {
  try {
    const { id } = request.params;
    let respuesta = await User.findOne({
      where: {
        id,
      },
    });
    if (respuesta != null) {
      await User.destroy({
        where: {
          id,
        },
      });
      response.sendStatus(204);
    } else {
      return response.json({ message: "No existe o ya fue eliminado" });
    }
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
}
//obtener un usuario por id
async function getUser(request, response) {
  try {
    const { id } = request.params;
    let user = await User.findByPk(id);
    if (user != null) {
      return response.json(user);
    } else {
      return response.json({ message: "No existe en la base de datos" });
    }
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
}
//promedio de edades de los usuarios registrados
async function promedio(request, response) {
  try {
    const prom = await sequelize.query(
      "SELECT AVG(EXTRACT(YEAR FROM AGE(NOW(),fecha_nacimiento))) AS promedio FROM usuarios"
    );
    if (prom != null) {
      var pro = prom[0];
      var result=parseFloat(pro[0].promedio)
      return response.json(result.toFixed(1));
    } else {
      return response.json({ message: "No hay datos para sacar promedio" });
    }
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
}

//exportar todos los metodos relacionados con usuarios
export const metodos = {
  getUsers,
  insertUsers,
  updateUsers,
  deleteUsers,
  getUser,
  promedio,
};
