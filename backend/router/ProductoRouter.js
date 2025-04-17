const express = require("express");
const router = express.Router();
const ProductoController = require("../controller/ProductoController");
const permiso = require("../Middleware/autenticador");

router.get("/listarproducto",permiso, ProductoController.listarproducto);
router.get("/buscarproductos/:id",permiso, ProductoController.buscarproducto);
router.post("/crearproductos",permiso, ProductoController.crearproducto);
router.patch("/editarproductos/:id",permiso, ProductoController.actualizarproducto);
router.delete("/eliminarproductos/:id",permiso, ProductoController.eliminarproducto);


module.exports = router;