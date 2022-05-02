"use strict";

const express = require("express");
const app = express();
const body_parser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

app.use(cors());
app.use(express.static(__dirname + "/public"));
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: false }));

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token,Authorization"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

// Se crea la variable db, que almacena la instancia de la base de datos, para ser reutilizada en el "callback".
let db;

//Se conecta la base de datos antes de levantar el servidor, mediante los datos del archivo .env en la raÃ­z del proyecto.
mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (err, database) {
    if (err) {
      console.log(err);
      process.exit(1);
    }

    //Guarda el objeto db para que el callback la pueda reutilizar.
    db = database;
    console.log("DB is connected");

    // Se inicia la aplicaciÃ³n.
    const server = app.listen(process.env.PORT || 8000, function () {
      let port = server.address().port;
      console.log("Server on port: ", port);
    });
  }
);

//Error general en caso de que falle un "endpoint".
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({ error: message });
}

// Conexión a todas la rutas.
app.use("/api", require("./routes/usuario.routes"));
app.use("/api", require("./routes/autor.routes"));
app.use("/api", require("./routes/libro.routes"));
app.use("/api", require("./routes/generoLiterario.routes"));
app.use("/api", require("./routes/descuento.routes"));
app.use("/api", require("./routes/socioComercial.routes"));
app.use("/api", require("./routes/punto-retiro.routes"));
app.use("/api", require("./routes/pedido.routes"));
app.use("/api", require("./routes/metodoPago.routes"));

//fotos limit
var bodyParser = require('body-parser');
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));