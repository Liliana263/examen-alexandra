const productoservices = require("../services/ProductoServices");

class ProductoController {

  async listarproducto(req, res) {
    const producto = await productoservices.listarProducto();
    res.json(producto);
  }

  async buscarproducto(req, res) {
    const producto = await productoservices.buscarProducto(req.params.id);
    producto
      ? res.json(producto)
      : res.status(404).json({ error: " no encontrado" });
  }

  async crearproducto(req, res) {
    try {
      const nuevoproducto = await productoservices.crearProducto(req.body);
      res.status(201).json(nuevoproducto);
    } catch (error) {
      console.error("Error al crear producto:", error);
      res.status(500).json({
        message: "Hubo un error al crear el producto",error: error.message,});
    }
  }

  async actualizarproducto(req, res) {
    try {
        const { id } = req.params;
        const { nombre,categoria,precio, } = req.body;
        if (isNaN(id)) {
            return res.status(400).json({ error: "ID inválido" });
        }
        let resultado = await productoservices.actualizarproducto(id, {nombre,categoria,precio});

        if (!resultado[0]) {
            return res.status(404).json({ error: "Producto no encontrado" });
        }

        res.json({ mensaje: "producto actualizado correctamente" });
    } catch (e) {
        res.status(500).json({ error: "Error en el servidor al actualizar el producto" });
    }
}

  async eliminarproducto(req, res) {
    await productoservices.eliminarProducto(req.params.id);
    res.json({ message: "producto eliminado" });
  }

}
module.exports = new ProductoController();