const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const PuntoRetiroSchema = new Schema({
  provincia: { type: String, required: true },
  canton: { type: String, required: true },
  distrito: { type: String, required: true },
  direccion: { type: String, required: true },
  socioId: { type: String, required: true },
});

module.exports = mongoose.model("PuntoRetiro", PuntoRetiroSchema);
