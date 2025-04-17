function Registrar(){
    return(
        <div>
        <form className="login-form">
        <h2>Iniciar Sesión</h2>
        <label htmlFor="">nombre</label>
        <input type="text" />
        <br />
        <label htmlFor="">Correo</label>
        <input type="text" />
        <br />
        <label htmlFor="">Contraseña</label>
        <input type="text" />
        <br />
        <button type="submit">Registrar</button>
      </form>
      <a href="/">Login</a>
      </div>

    )
}
export default Registrar;