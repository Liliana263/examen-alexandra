const { Productos } = require("../models");
const jwt = require("jsonwebtoken");

class ProductoService {

  async listarProducto() {
    return await Productos.findAll();
  }

  async buscarProducto(id) {
    return await Productos.findByPk(id);
  }

  async crearProducto(data) {
    return await Productos.create(data);
  }


  async  eliminarProducto(id) {
    const producto = await Productos.findByPk(id);
    if (producto) {
      return await producto.destroy();
    }
    return null;
  }

  async actualizarproducto(id, datos) {
    try {
        let actualizado = await Productos.update(datos, { where: { id } });
        return actualizado;
    } catch (e) {
        console.log("Error en el servidor al actualizar el producto:", e);
    }
}
}

module.exports = new ProductoService();