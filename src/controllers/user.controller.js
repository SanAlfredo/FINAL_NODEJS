import { json } from "sequelize";
import { sequelize } from "./../database/db";
import { User } from "./../models/User";

//funcion para obtener todos los usuarios
async function getUsers(request, response) {
  try {
    //buscar todos los resultados en la base de datos
    const users = await sequelize.query("select * from usuarios");
    if (users != null) {
      //si encuentra resultados arroja en json
      return response.json(users[0]);
    } else {
      return response.json({ message: "No hay registros" });
    }
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
}
//insertar nuevo usuario
async function insertUsers(request, response) {
  const { cedula, nombre, apellido1, apellido2, nacimiento } = request.body;
  var primero = "";
  var segundo = "";
  if (apellido1 == "" && apellido2 == "") {
    return response
      .status(404)
      .json({ message: "al menos debe tener 1 apellido" });
  } else {
    const nom = nombre.toString().toLowerCase();

    if (apellido1 == "" && apellido2 != "") {
      primero = "no hay apellido";
      segundo = apellido2.toString().toLowerCase();
    }
    if (apellido2 == "" && apellido1 != "") {
      primero = apellido1.toString().toLowerCase();
      segundo = "no hay apellido";
    }
    if (apellido1 != "" && apellido2 != "") {
      primero = apellido1.toString().toLowerCase();
      segundo = apellido2.toString().toLowerCase();
    }
    try {
      const newUser = await User.create({
        cedula_identidad: cedula,
        nombre: nom,
        primer_apellido: primero,
        segundo_apellido: segundo,
        fecha_nacimiento: nacimiento,
      });
      return response.json(newUser.id);
    } catch (error) {
      return response.status(500).json({ message: error.message });
    }
  }
}
//actualizar usuario
async function updateUsers(request, response) {
  const { cedula, nombre, apellido1, apellido2, nacimiento } = request.body;
  var primero = "";
  var segundo = "";
  if (apellido1 == "" && apellido2 == "") {
    return response
      .status(404)
      .json({ message: "al menos debe tener 1 apellido" });
  } else {
    const nom = nombre.toString().toLowerCase();

    if (apellido1 == "" && apellido2 != "") {
      primero = "no hay apellido";
      segundo = apellido2.toString().toLowerCase();
    }
    if (apellido2 == "" && apellido1 != "") {
      primero = apellido1.toString().toLowerCase();
      segundo = "no hay apellido";
    }
    if (apellido1 != "" && apellido2 != "") {
      primero = apellido1.toString().toLowerCase();
      segundo = apellido2.toString().toLowerCase();
    }
    try {
      const { id } = request.params;
      let user = await User.findByPk(id);
      if (user != null) {
        user.cedula_identidad = cedula;
        user.nombre = nom;
        user.primer_apellido = primero;
        user.segundo_apellido = segundo;
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
}
//eliminar usuario
async function deleteUsers(request, response) {
  try {
    const { id } = request.params;
    //busca el id
    let respuesta = await User.findOne({
      where: {
        id,
      },
    });
    //si encuentra la id entonces la eliminamos
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
    //busca usuario por id
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
    //se conecta a la base de datos y calcula el promedio de edades
    const prom = await sequelize.query(
      "SELECT AVG(EXTRACT(YEAR FROM AGE(NOW(),fecha_nacimiento))) AS promedio FROM usuarios"
    );
    if (prom != null) {
      var pro = prom[0];
      var result = parseFloat(pro[0].promedio);
      return response.json({ promedioEdad: result.toFixed(1) });
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
