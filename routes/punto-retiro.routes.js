const express = require("express");
const router = express.Router();
const PuntoRetiro = require("../models/PuntoRetiro");

router.get("/obtener-puntos-retiro", async (req, res) => {
  const puntosRetiro = await PuntoRetiro.find();
  res.json(puntosRetiro);
});

router.post("/registrar-punto-retiro", async (req, res) => {
  const { provincia, canton, distrito, direccion, socioId } = req.body;

  const nuevoPuntoRetiro = new PuntoRetiro({
    provincia,
    canton,
    distrito,
    direccion,
    socioId,
  });

  await nuevoPuntoRetiro.save();
});

router.put("/editar-punto-retiro/:id", async (req, res) => {
  const { provincia, canton, distrito, direccion, socioId } = req.body;
  await PuntoRetiro.findByIdAndUpdate(
    req.params.id,
    provincia,
    canton,
    distrito,
    direccion,
    socioId
  );
  res.json({ status: "Punto de retiro editado correctamente" });
});

router.delete("/eliminar-punto-retiro/:id", async (req, res) => {
  await PuntoRetiro.findByIdAndDelete(req.params.id);
  res.json({ status: "Punto de retiro eliminado correctamente" });
});

module.exports = router;
