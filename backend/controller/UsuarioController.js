const usuarioservices = require("../services/UsuarioServices");

class UsuarioController {

  async listarusuarios(req, res) {
    const usuario = await usuarioservices.listarLosUsuarios();
    res.json(usuario);
  }

  async buscarusuario(req, res) {
    const usuario = await usuarioservices.buscarLosUsuarios(req.params.id);
    usuario
      ? res.json(usuario)
      : res.status(404).json({ error: " no encontrado" });
  }

  async crearusuario(req, res) {
    try {
      const nuevousuario = await usuarioservices.crearLosUsuarios(req.body);
      res.status(201).json(nuevousuario);
    } catch (error) {
      console.error("Error al crear usuario:", error);
      res.status(500).json({
        message: "Hubo un error al crear el usuario",error: error.message,});
    }
  }

  async editarusuario(req, res) {
    try {
        const { id } = req.params;
        const { nombre,correo,contrasena, } = req.body;
        if (isNaN(id)) {
            return res.status(400).json({ error: "ID inválido" });
        }
        let resultado = await usuarioservices.actualizarLosUsuario(id, {nombre,correo,contrasena});

        if (!resultado[0]) {
            return res.status(404).json({ error: "usuario no encontrado" });
        }

        res.json({ mensaje: "usuario actualizado correctamente" });
    } catch (e) {
        res.status(500).json({ error: "Error en el servidor al actualizar el usuario" });
    }
}

  async eliminarusuario(req, res) {
    await usuarioservices.eliminarLosUsuarios(req.params.id);
    res.json({ message: "usuario eliminado" });
  }

  async login(req, res) {
    const { correo, contrasena } = req.body;
    const resultado = await usuarioservices.login(correo, contrasena);

    if (resultado.error) {
      return res.status(401).json({ mensaje: resultado.error });
    }

    res.json(resultado);
  }

}
module.exports = new UsuarioController();