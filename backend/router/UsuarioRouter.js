const express = require("express");
const router = express.Router();
const usuariosController = require("../controller/UsuarioController");

router.get("/listarusuarios", usuariosController.listarusuarios);
router.get("/buscarusuarios/:id", usuariosController.buscarusuario);
router.post("/crearusuarios", usuariosController.crearusuario);
router.patch("/editarusuarios/:id", usuariosController.editarusuario);
router.delete("/eliminarusuarios/:id", usuariosController.eliminarusuario);

module.exports = router;