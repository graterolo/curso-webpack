const fs = require("fs");
//Requiere de file system que nos permite trabajar con el SO
//Nos permite hacer, guardar o enviar datos en archivos de nuestra computadora
fs.writeFileSync("./.env", `API=${process.env.API}\n`);
//Creamos el archivo y lo llenamos con la información que necesitamos
//Este script se corre en el server.
