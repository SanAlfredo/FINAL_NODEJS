import express from "express";
import morgan from "morgan";

//importar rutas
import userRoute from "./routes/user.route";
import mainRoute from "./routes/main.route";
//definir variable inicial de aplicacion
const app = express();

//configuraciones
app.set("port", 3000);
//intermedios
app.use(express.json());
app.use(morgan("dev"));

//ruta usuarios
app.use("/usuarios", userRoute);
//ruta localhost
app.use("/", mainRoute);

export default app;
