const router = require("express").Router();
const Pedido = require("../models/Pedido");

router.get("/obtener-pedidos", async (req, res) => {
  const pedidos = await Pedido.find();
  res.json(pedidos);
});

router.post("/registrar-pedido", async (req, res) => {
  const { fechaRealizacion, precio, libros, userId } = req.body;
  const nuevoPedido = new Pedido({
    fechaRealizacion,
    precio,
    libros,
    userId,
  });
  await nuevoPedido.save();
  res.json({ status: "Pedido registrado correctamente" });
});

router.put("/editar-pedido/:id", async (req, res) => {
  const { fechaRealizacion, precio, libros, userId } = req.body;
  await Pedido.findByIdAndUpdate(req.params.id, {
    fechaRealizacion,
    precio,
    libros,
    userId,
  });
  res.json({ status: "Pedido editado correctamente" });
});

router.delete("/eliminar-pedido/:id", async (req, res) => {
  await Pedido.findByIdAndDelete(req.params.id);
  res.json({ status: "Pedido eliminado correctamente" });
});

module.exports = router;
