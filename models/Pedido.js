const mongoose = require("mongoose");
const { Schema } = mongoose;

const PedidoSchema = new Schema({
  fechaRealizacion: { type: Date, required: true },
  precio: { type: Number, required: true },
  libros: [
    {
      libroId: { type: String, required: true, unique: false },
      libroCantidad: { type: Number, required: true, unique: false },
    },
  ],
  userId: { type: String, required: true },
});

module.exports = mongoose.model("Pedido", PedidoSchema);
