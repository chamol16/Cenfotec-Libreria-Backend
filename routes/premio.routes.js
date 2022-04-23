const router = require("express").Router();
const Premio = require("../models/Premio");

router.get("/obtener-premios", async (req, res) => {
  const premios = await Premio.find();
  res.json(premios);
});

router.post("/registrar-premio", async (req, res) => {
  const { nombre } = req.body;
  const nuevoPremio = new Premio({ nombre });
  await nuevoPremio.save();
  res.json({ status: "Premio registrado correctamente" });
});
router.put("/editar-premio/:id", async (req, res) => {
  const { nombre } = req.body;
  await Premio.findByIdAndUpdate(req.params, { nombre });
  res.json({ status: "Premio registrado correctamente" });
});

router.delete("/eliminar-premio/:id", async (req, res) => {
  await Premio.findByIdAndDelete(req.params.id);
  res.json({ status: "Premio eliminado correctamente" });
});

module.exports = router;
