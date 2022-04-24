"use strict";

const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const LibroSchema = new Schema({
  foto: { type: String, required: false },
  ISBN: { type: String, required: true, unique: true },
  nombre: { type: String, required: true },
  autor: { type: String },
  fechaPublicacion: { type: Date, required: true },
  editorial: { type: String, required: true },
  premiosGanados: [
    { type: String, required: false },
    { type: String, required: false },
    { type: String, required: false },
  ],
  resena: { type: String, required: true },
  precio: { type: Number, required: true },
  descuento: { type: String, required: false },
  porcentajeDescuento: { type: Number, required: false },
  activo: { type: Boolean, required: true },
  generoLiterario: { type: String, required: false },
  idioma: { type: String, required: true },
  autorId: { type: String, required: false },
  generoLiterarioId: { type: String, required: false },
  descuentoId: { type: String, required: false },
});

module.exports = mongoose.model("Libro", LibroSchema);
