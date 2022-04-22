const router = require("express").Router();
const Usuario = require("../models/Usuario");

//get all users
router.get("/obtener-usuarios", async (req, res) => {
  const usuarios = await Usuario.find();
  res.json(usuarios);
});

//get one user http://localhost:3000/api/obtener-usuarios/6261b1d449431dcc77c960e8
/* router.get("/obtener-usuarios/:id", async (req, res) => {
  const oneUsuario = await Usuario.findById(req.params.id);
  res.json(oneUsuario);
}); */

//save user
router.post("/registrar-usuario", async (req, res) => {
  const {
    correo,
    tipoId,
    identificacion,
    nombre,
    primerApellido,
    segundoApellido,
    genero,
    contrasena,
    nacimiento,
    provincia,
    canton,
    distrito,
    direccion,
    generosFavoritos,
    autoresFavoritos,
    foto,
    libroFan,
    //admin
    position,
    schedule,
    telefono,
    oficina,
    tipoUsuario,
  } = req.body;
  const nuevoUsuario = new Usuario({
    correo,
    tipoId,
    identificacion,
    nombre,
    primerApellido,
    segundoApellido,
    genero,
    contrasena,
    nacimiento,
    provincia,
    canton,
    distrito,
    direccion,
    generosFavoritos,
    autoresFavoritos,
    foto,
    libroFan,
    //admin
    position,
    schedule,
    telefono,
    oficina,
    tipoUsuario,
  });
  await nuevoUsuario.save((error) => {
    if (error) {
      res.json({
        msj: "No se pudo registrar el usuario",
        error,
      });
    } else {
      res.json({ status: "Usuario registrado correctamente" });
    }
  });
});

//update user
router.put("/actualizar-usuario/:id", async (req, res) => {
  const {
    correo,
    identificacion,
    tipoUsuario,
    tipoId,
    nombre,
    primerApellido,
    segundoApellido,
    contrasena,
    genero,
    provincia,
    canton,
    distrito,
    direccion,
    generosFavoritos,
    autoresFavoritos,
    foto,
    libroFan,
    //admin
    position,
    schedule,
    telefono,
    oficina,
  } = req.body;
  await Usuario.findByIdAndUpdate(req.params.id, {
    correo,
    identificacion,
    tipoUsuario,
    tipoId,
    nombre,
    primerApellido,
    segundoApellido,
    contrasena,
    genero,
    provincia,
    canton,
    distrito,
    direccion,
    generosFavoritos,
    autoresFavoritos,
    foto,
    libroFan,
    //admin
    position,
    schedule,
    telefono,
    oficina,
  });
  res.json({ status: "Usuario editado correctamente" });
});

//delete user
router.delete("/eliminar-usuario/:id", async (req, res) => {
  await Usuario.findByIdAndDelete(req.params.id);
  res.json({ status: "Usuario eliminado" });
});

module.exports = router;
