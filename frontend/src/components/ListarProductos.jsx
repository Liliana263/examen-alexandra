function ListarProducto(){
  <div>
    <table className="tabla-productos">
        <thead>
          <tr>
            <th>Nombre</th>
          
            <th>Categoría</th>
            <th>Precio ($)</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((prod, index) => (
            <tr key={index}>
              <td>{prod.nombre}</td>
              <td>{prod.categoria}</td>
              <td>{prod.precio}</td>
            </tr>
          ))}
          
        </tbody>
      </table>
  </div>
}
export default ListarProducto;