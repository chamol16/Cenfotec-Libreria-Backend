const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const DescuentoSchema = new Schema({
  id: { type: String, required: true, unique: true },
  nombre: { type: String, required: true },
  porcentaje: { type: Number, required: true },
});

module.exports = mongoose.model("Descuento", DescuentoSchema);
