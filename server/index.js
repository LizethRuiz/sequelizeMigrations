import express from "express";

import { PORT } from "../config/keys";
import db from "../config/database";
import routes from "../server/routes";

const server = express();

server.use(express.json());
server.use(routes);

db.authenticate()
  .then(() => {
    console.log("Conectado a la base de datos..");

    server.listen(PORT, () => {
      console.log("Escuchando en el puerto", PORT);
    });
  })
  .catch((error) => {
    console.log("Error al conectar la BD =>", error);
  });
