const Usuarios = require('./router/ProductoRouter');
const Productos = require('./router/UsuarioRouter');
const express = require('express');
const cors = require('cors');
const app = express();
const puerto = 2100;


app.use(
    cors({
      origin: "*",
      methods: ["GET", "POST", "PATCH", "DELETE"],
      allowedHeaders: ["Content-Type", "Authorization"],
    })
  );
  

app.use(express.json());


app.use('/usuarios', Usuarios);
app.use('/productos',Productos );

app.listen(puerto, () => {
    console.log(`Servidor corriendo en http://localhost:${puerto}`);
});