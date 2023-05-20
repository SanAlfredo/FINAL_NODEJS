import { sequelize } from "./../database/db";

async function getUsers() {
  try {
    await sequelize.authenticate();
    console.log("Conectado con exito");
  } catch (error) {
    console.log("Ha ocurrido un error", error);
  }
}

// const getUsers = (request, response, next) => {
//   db.query("SELECT * FROM usuarios", null, (err, results) => {
//     if (err) {
//       return next(err);
//     }
//     response.send(results.rows[0]);
//   });
// };

export const metodos = {
  getUsers,
};
