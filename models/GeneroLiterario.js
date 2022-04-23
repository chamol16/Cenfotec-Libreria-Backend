const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const GeneroLiterarioSchema = new Schema({
  name: { type: String, required: true, unique: true },
});

module.exports = mongoose.model("GeneroLiterario", GeneroLiterarioSchema);
