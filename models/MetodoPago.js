const mongoose = require("mongoose");
const { Schema } = mongoose;

const MetodoPagoSchema = new Schema({
  proveedor: { type: String, required: true },
  nombreTarjeta: { type: String, required: true },
  numeroTarjeta: { type: Number, required: true, unique: true },
  fechaExp: { type: String, required: true },
  cvvCode: { type: Number, required: true },
  userId: { type: String, required: true },
});

module.exports = mongoose.model("MetodoPago", MetodoPagoSchema);
