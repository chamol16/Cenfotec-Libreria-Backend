const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const SocioComercialSchema = new Schema({
  nombre: { type: String, required: true, unique: true },
  fechaInicio: { type: Date, required: true },
});

module.exports = mongoose.model("SocioComercial", SocioComercialSchema);
