# FINAL_NODEJS
1. Abrimos la carpeta en VSCode
2. Abrimos una terminal en VSCode y escribimos: npm init -y para node
3. Instalar dependencias: 
npm install --save express morgan pg pg-hstore sequelize dotenv	//que son dependencias de produccion
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
9. Luego correr el programa con "npm run dev"

****************************************************************************************************************************
GUIA DE RUTAS
****************************************************************************************************************************
1. Ruta para crear la tabla en la base de datos: GET localhost:3000
2. Ruta para ver el estado inicial: GET localhost:3000/estado
3. Ruta que muestra todos los usuarios registrados en la base de datos: GET localhost:3000/usuarios
4. Ruta que muestra sólo un usuario encontrado por su id: GET localhost:3000/usuarios/id
5. Ruta que registra o inserta un usuario en la base de datos: POST localhost:3000/usuarios
6. Ruta para actualizar datos de usuario: PUT localhost:3000/usuarios/id
7. Ruta para eliminar a un usuario de la base de datos: DELETE localhost:3000/usuarios/id
8. Ruta para ver el promedio de edades guardados en la base de datos: GET localhost:3000/usuarios/promedio/edad
