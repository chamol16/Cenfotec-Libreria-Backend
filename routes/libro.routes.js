const express = require("express");
const router = express.Router();
const Libro = require("../models/Libro");

router.get("/obtener-libros", async (req, res) => {
  const libros = await Libro.find();
  res.json(libros);
});

router.post("/registrar-libro", async (req, res) => {
  const {
    foto,
    ISBN,
    nombre,
    autor,
    fechaPublicacion,
    editorial,
    premiosGanados,
    resena,
    precio,
    descuento,
    porcentajeDescuento,
    activo,
    generoLiterario,
    idioma,
    autorId,
    generoLiterarioId,
    descuentoId,
  } = req.body;

  const nuevoLibro = new Libro({
    foto,
    ISBN,
    nombre,
    autor,
    fechaPublicacion,
    editorial,
    premiosGanados,
    resena,
    precio,
    descuento,
    porcentajeDescuento,
    activo,
    generoLiterario,
    idioma,
    autorId,
    generoLiterarioId,
    descuentoId,
  });
  await nuevoLibro.save();
  res.json({ status: "Libro registrado correctamente" });
});

router.put("/editar-libro/:id", async (req, res) => {
  const {
    foto,
    ISBN,
    nombre,
    autor,
    fechaPublicacion,
    editorial,
    premiosGanados,
    resena,
    precio,
    descuento,
    porcentajeDescuento,
    activo,
    generoLiterario,
    idioma,
    autorId,
    generoLiterarioId,
    descuentoId,
  } = req.body;
  await Libro.findByIdAndUpdate(req.params.id, {
    foto,
    ISBN,
    nombre,
    autor,
    fechaPublicacion,
    editorial,
    premiosGanados,
    resena,
    precio,
    descuento,
    porcentajeDescuento,
    activo,
    generoLiterario,
    idioma,
    autorId,
    generoLiterarioId,
    descuentoId,
  });
  res.json({ status: "Libro editado correctamente" });
});

router.delete("/editar-libro/:id", async (req, res) => {
  await Libro.findByIdAndDelete(req.params.id);
  res.json({ status: "Libro eliminado correctamente" });
});

module.exports = router;