function Registrarproducto(){
return(
    
<div>
        <form className="login-form">
        <h2>Registrar producto</h2>
        <label htmlFor="">nombre</label>
        <input type="text" />
        <br />
        <label htmlFor="">categoria</label>
        <input type="text" />
        <br />
        <label htmlFor="">precio</label>
        <input type="text" />
        <br />
        <button type="submit">Registrar producto</button>
      </form>
      <a href="/">Login</a>
      </div>

)
}
export default Registrarproducto;