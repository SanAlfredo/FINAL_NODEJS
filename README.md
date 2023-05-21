# FINAL_NODEJS
1. Abrimos la carpeta en VSCode
2. Abrimos una terminal en VSCode y escribimos: npm init -y para node
3. Instalar dependencias de produccion: 
	npm install --save express express-validator morgan pg pg-hstore sequelize dotenv
4. Dependencias de desarrollo (-D): 
	npm i @babel/cli @babel/core @babel/node @babel/preset-env nodemon -D
5. Crear carpeta src (Source) dentro 4 carpetas: controllers,database, models, routes y los archivos iniciales
	app.js, index.js, config.js
6. luego a la altura de package.json crear 2 archivos: .babelrc (libreria babel que sirve para que el codigo
	nuevo de JS pueda ser interpretado por antiguo) .env, adisional .gitignore
7. Configuracion inicial de .babelrc:
	{
	    	"presets": ["@babel/preset-env"]
	}
8. Configuracion necesaria dentro del package.json, dentro de Scripts:
	"babel-node":"babel-node --presets=@babel/preset-env",
   	"dev":"nodemon --exec npm run babel-node src/index.js"
9. Configuracion que debe tener .env
	PGSQL_HOST=localhost
	PGSQL_USER=postgres
	PGSQL_PASSWORD=1234
	PGSQL_DATABASE=PERSONA
	PGSQL_PORT=5433
10. Luego correr el programa con "npm run dev"

****************************************************************************************************************************
GUIA DE RUTAS
****************************************************************************************************************************
1. Ruta para crear la tabla en la base de datos: GET localhost:3000
	NOTA: "crea una tabla llamada usuarios si no existe, pero la base de datos PERSONA o el nombre que se ponga en el archivo
	.env debe existir en PostgreSQL, también se tiene un backup de la base de datos de prueba es backupPersona.backup"
2. Ruta para ver el estado inicial: GET localhost:3000/estado
3. Ruta que muestra todos los usuarios registrados en la base de datos: GET localhost:3000/usuarios
4. Ruta que muestra sólo un usuario encontrado por su id: GET localhost:3000/usuarios/id
5. Ruta que registra o inserta un usuario en la base de datos: POST localhost:3000/usuarios
	formato de datos
	{
 	   "cedula":6655661, //debe ser un entero
    	"nombre":"NEIMAR",//debe tener un string
    	"apellido1":"", //al menos un apellido debe llevar
    	"apellido2":"CHAVEZ",
    	"nacimiento":"2018-12-01" //el formato de la fecha es YYYY-MM-DD
	}
6. Ruta para actualizar datos de usuario: PUT localhost:3000/usuarios/id
7. Ruta para eliminar a un usuario de la base de datos: DELETE localhost:3000/usuarios/id
8. Ruta para ver el promedio de edades guardados en la base de datos: GET localhost:3000/usuarios/promedio/edad
9. Ruta de deploy render.com: https://api-node-ejemplo.onrender.com
