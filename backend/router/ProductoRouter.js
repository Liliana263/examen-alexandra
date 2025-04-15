const express = require("express");
const router = express.Router();
const ProductoController = require("../controller/ProductoController");

router.get("/listarusuarios", ProductoController.listarproducto);
router.get("/buscarusuarios/:id", ProductoController.buscarproducto);
router.post("/crearusuarios", ProductoController.crearproducto);
router.patch("/editarusuarios/:id", ProductoController.actualizarproducto);
router.delete("/eliminarusuarios/:id", ProductoController.eliminarproducto);

module.exports = router;