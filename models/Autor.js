const mongoose = require("mongoose");
const { Schema } = mongoose;

const AutorSchema = new Schema({
  nombreCompleto: { type: String, required: true },
  foto: { type: String, required: true },
  paisNacimiento: { type: String, required: true },
  fechaNacimiento: { type: Date, required: true },
  fechaDefuncion: { type: Date, required: false },
  genero: { type: String, required: true },
  nobel: { type: Boolean, required: true },
  anoNobel: { type: String, required: false },
  premiosGanados: [
    { type: String, required: false },
    { type: String, required: false },
    { type: String, required: false },
  ],
  biografia: { type: String, required: true },
});

module.exports = mongoose.model("Autor", AutorSchema);
