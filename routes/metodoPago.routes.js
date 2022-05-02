const express = require("express");
const router = express.Router();
const MetodoPago = require("../models/MetodoPago");

router.get("/obtener-metodos-pago", async (req, res) => {
  const metodosPago = await MetodoPago.find();
  res.json(metodosPago);
});

router.post("/registrar-metodo-pago", async (req, res) => {
  const { proveedor, nombreTarjeta, numeroTarjeta, fechaExp, cvvCode, userId } =
    req.body;

  const nuevoMetodoPago = new MetodoPago({
    proveedor,
    nombreTarjeta,
    numeroTarjeta,
    fechaExp,
    cvvCode,
    userId,
  });
  await nuevoMetodoPago.save();
  res.json({ status: "Metodo de pago registrado correctamente" });
});

router.put("/editar-metodo-pago/:id", async (req, res) => {
  const { proveedor, nombreTarjeta, numeroTarjeta, fechaExp, cvvCode, userId } =
    req.body;
  await MetodoPago.findByIdAndUpdate(req.params.id, {
    proveedor,
    nombreTarjeta,
    numeroTarjeta,
    fechaExp,
    cvvCode,
    userId,
  });
  res.json({ status: "Metodo de pago editado correctamente" });
});

router.delete("/eliminar-metodo-pago/:id", async (req, res) => {
  await MetodoPago.findByIdAndDelete(req.params.id);
  res.json({ status: "Metodo de pago eliminado correctamente" });
});

module.exports = router;
