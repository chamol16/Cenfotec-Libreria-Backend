const router = require("express").Router();
const SocioComercial = require("../models/SocioComercial");

router.get("/obtener-socios-comerciales", async (req, res) => {
  const socios = await SocioComercial.find();
  res.json(socios);
});

router.post("/registrar-socio-comercial", async (req, res) => {
  const { nombre, fechaInicio } = req.body;
  const newSocio = new SocioComercial({ nombre, fechaInicio });
  await newSocio.save();
  res.json({ status: "Socio comercial registrado correctamente" });
});

router.put("/editar-socio-comercial/:id", async (req, res) => {
  const { nombre, fechaInicio } = req.body;
  await SocioComercial.findByIdAndUpdate(req.params.id, {
    nombre,
    fechaInicio,
  });
  res.json({ status: "Socio comercial editado correctamente" });
});

router.delete("/eliminar-socio-comercial/:id", async (req, res) => {
  await SocioComercial.findByIdAndDelete(req.params.id);
  res.json({ status: "Socio comercial eliminado correctamente" });
});

module.exports = router;
