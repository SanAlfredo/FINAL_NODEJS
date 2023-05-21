import { request, response } from "express";
import { check, validationResult } from "express-validator";

const validaciones = [
  check("cedula")
    .exists()
    .withMessage("el campo cedula debe existir")
    .notEmpty()
    .withMessage("esta vacio")
    .isInt()
    .withMessage("debe ser un entero"),
  check("nombre")
    .exists()
    .withMessage("el campo nombre debe existir")
    .notEmpty()
    .withMessage("esta vacio")
    .isString()
    .withMessage("debe ingresar un string"),
  check("apellido1")
    .exists()
    .withMessage("el campo apellido1 debe existir")
    .isString()
    .withMessage("debe ser un string"),
  check("apellido2")
    .exists()
    .withMessage("el campo apellido2 debe existir")
    .isString()
    .withMessage("debe ser un string"),
  check("nacimiento")
    .exists()
    .withMessage("el campo nacimiento debe existir")
    .notEmpty()
    .withMessage("esta vacio")
    .isDate()
    .withMessage("el formato de la fecha es YYYY-MM-DD"),
  (request, response, next) => {
    validateResult(request, response, next);
  },
];

function validateResult(request, response, next) {
  try {
    validationResult(request).throw();
    return next();
  } catch (error) {
    response.status(403);
    response.send({ errors: error.array() });
  }
}

module.exports = { validaciones };
