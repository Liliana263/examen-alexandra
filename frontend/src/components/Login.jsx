// import '../styles/login.css'
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Login()
{
   const navigate = useNavigate();
   const [formulario, setFormulario] = useState({
      correo: "",
      contrasena: "",
  });
  const manejarCambio = (e) => {
   const { name, value } = e.target;
   setFormulario({
       ...formulario,
       [name]: value,
   });
};
const manejarEnvio = async (e) => {
   e.preventDefault();
   try {
       const respuesta = await axios.post("http://localhost:2100/usuarios/login", formulario);
       console.log("Respuesta del servidor:", respuesta.data);
       const { token, usuario } = respuesta.data;
       if (token) {
           localStorage.setItem("token", token);
           alert("Inicio de sesión exitoso");
           navigate("/listarproductos"); 
       } else {
           alert("Token no recibido. Redirigiendo a página de error.");
           navigate("/");
       } 
   } catch (error) {
       console.log("Error con las credenciales",error)
       console.error("Error al iniciar sesión:");
       alert("Correo o Contraseña incorrectos");
   }
};
   return(
      <div>
         <form onSubmit={manejarEnvio}>
        <h2>Iniciar Sesión</h2>
        <label htmlFor="">Correo</label>
        <input type="email" id="correo"name="correo" className="form-control" value={formulario.correo} onChange={manejarCambio} required/>
        <br />
        <label htmlFor="">Contraseña</label>
        <input type="password" id="contrasena" name="contrasena" className="form-control" value={formulario.contrasena} onChange={manejarCambio} required/>
        <br />
        <button type="submit">ingresar</button>
      </form>
      <a href="/registrar">registrar</a>
      </div>


   )

}
export default Login;