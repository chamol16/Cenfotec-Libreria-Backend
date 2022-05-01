"use strict";

const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const UsuarioSchema = new Schema({
  correo: { type: String, required: true, unique: true },
  tipoId: { type: String, required: true },
  identificacion: { type: String, required: true, unique: true },
  nombre: { type: String, required: true },
  primerApellido: { type: String, required: true },
  segundoApellido: { type: String, required: true },
  genero: { type: String, required: true },
  contrasena: { type: String, required: true },
  provincia: { type: String, required: true },
  canton: { type: String, required: true },
  distrito: { type: String, required: true },
  direccion: { type: String, required: true },
  generosFavoritos: [
    { type: String, required: false },
    { type: String, required: false },
    { type: String, required: false },
  ],
  autoresFavoritos: [
    { type: String, required: false },
    { type: String, required: false },
    { type: String, required: false },
  ],
  foto: { type: String, required: false },
  libroFan: { type: Boolean, required: false },
  //admin
  position: { type: String, required: false },
  schedule: { type: String, required: false },
  telefono: { type: Number, required: false },
  oficina: { type: String, required: false },
  tipoUsuario: { type: Number, required: true },
});

//tipoUsuario:
//1 admin
//2 cliente

module.exports = mongoose.model("Usuario", UsuarioSchema);
