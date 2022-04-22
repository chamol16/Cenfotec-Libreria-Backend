const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const SocioComercialSchema = new Schema({
  id: { type: String, required: true, unique: true },
  nombre: { type: String, required: true },
  fechaInicio: { type: Date, required: true },
});

module.exports = mongoose.model("Premio", SocioComercialSchema);
