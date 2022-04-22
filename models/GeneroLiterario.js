const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const GeneroLiterarioSchema = new Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
});

module.exports = mongoose.model("GeneroLiterario", GeneroLiterarioSchema);
