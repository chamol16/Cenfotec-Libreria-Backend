const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const PremioSchema = new Schema({
  id: { type: String, required: true, unique: true },
  nombre: { type: String, required: true },
});

module.exports = mongoose.model("Premio", PremioSchema);
