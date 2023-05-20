import express from "express";
import morgan from "morgan";

//importar rutas
import userRoute from "./routes/user.route";
//definir variable inicial de aplicacion
const app = express();

//configuraciones
app.set("port", 3000);
//intermedios
app.use(morgan("dev"));
//rutas
app.use("/usuarios", userRoute);

export default app;
