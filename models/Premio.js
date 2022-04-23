const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const PremioSchema = new Schema({
  nombre: { type: String, required: true, unique: true },
});

module.exports = mongoose.model("Premio", PremioSchema);
