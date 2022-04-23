const express = require("express");
const router = express.Router();
const Descuento = require("../models/Descuento");

router.get("/obtener-descuentos", async (req, res) => {
  const descuentos = await Descuento.find();
  res.json(descuentos);
});

router.post("/registrar-descuento", async (req, res) => {
  const { nombre, porcentaje } = req.body;
  const nuevoDescuento = new Descuento({
    nombre,
    porcentaje,
  });
  await nuevoDescuento.save();
  res.json({ status: "Descuento registrado correctamente" });
});

router.put("/editar-descuento/:id", async (req, res) => {
  const { nombre, porcentaje } = req.body;
  await Descuento.findByIdAndUpdate(req.params.id, {
    nombre,
    porcentaje,
  });
  res.json({ status: "Descuento editado correctamente" });
});

router.delete("/eliminar-descuento/:id", async (req, res) => {
  await Descuento.findByIdAndDelete(req.params.id);
  res.json({ status: "Descuento eliminado correctamente" });
});

module.exports = router;
