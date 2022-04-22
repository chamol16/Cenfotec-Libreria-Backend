const express = require("express");
const router = express.Router();
const Autor = require("../models/Autor");

router.get("/obtener-autores", async (req, res) => {
  const autores = await Autor.find();
  res.json(autores);
});

router.post("/registrar-autor", async (req, res) => {
  const {
    nombreCompleto,
    foto,
    paisNacimiento,
    fechaNacimiento,
    fechaDefuncion,
    genero,
    nobel,
    anoNobel,
    premiosGanados,
    biografia,
  } = req.body;

  const nuevoAutor = new Autor({
    nombreCompleto,
    foto,
    paisNacimiento,
    fechaNacimiento,
    fechaDefuncion,
    genero,
    nobel,
    anoNobel,
    premiosGanados,
    biografia,
  });
  await nuevoAutor.save();
  res.json({ status: "Autor registrado correctamente" });
});

router.put("/editar-autor/:id", async (req, res) => {
  const {
    nombreCompleto,
    foto,
    paisNacimiento,
    fechaNacimiento,
    fechaDefuncion,
    genero,
    nobel,
    anoNobel,
    premiosGanados,
    biografia,
  } = req.body;

  await Autor.findByIdAndUpdate(req.params.id, {
    nombreCompleto,
    foto,
    paisNacimiento,
    fechaNacimiento,
    fechaDefuncion,
    genero,
    nobel,
    anoNobel,
    premiosGanados,
    biografia,
  });
  res.json({ status: "Autor editado correctamente" });
});

router.delete("/eliminar-autor/:id", async (req, res) => {
  await Autor.findByIdAndDelete(req.params.id);
  res.json({ status: "Autor eliminado correctamente" });
});

module.exports = router;
