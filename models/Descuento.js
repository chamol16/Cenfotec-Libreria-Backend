const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const DescuentoSchema = new Schema({
  nombre: { type: String, required: true, unique: true },
  porcentaje: { type: Number, required: true },
});

module.exports = mongoose.model("Descuento", DescuentoSchema);
