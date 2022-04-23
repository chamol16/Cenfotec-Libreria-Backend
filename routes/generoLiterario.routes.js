const express = require("express");
const router = express.Router();
const GeneroLiterario = require("../models/GeneroLiterario");

router.get("/obtener-generos-literarios", async (req, res) => {
  const generosLiterarios = await GeneroLiterario.find();
  res.json(generosLiterarios);
});

router.post("/registrar-genero-literario", async (req, res) => {
  const { name } = req.body;
  const nuevoGeneroLiterario = new GeneroLiterario({ name });
  await nuevoGeneroLiterario.save();
  res.json({ status: "Genero literario registrado correctamente" });
});

router.put("/editar-genero-literario/:id", async (req, res) => {
  const { name } = req.body;
  await GeneroLiterario.findByIdAndUpdate(req.params.id, { name });
  res.json({ status: "Genero literario actualizado" });
});

router.delete("/eliminar-genero-literario/:id", async (req, res) => {
  await GeneroLiterario.findByIdAndDelete(req.params.id);
  res.json({ status: "Genero literario eliminado" });
});

module.exports = router;
