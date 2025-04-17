import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Login from "./Login";
import Registrar from "./Registrar";
import RegistrarProducto from "./RegistrarProducto";

function Rutas(){
    return(
        <Router>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/registrar" element={<Registrar />} />
            <Route path="/registrarproducto" element={<RegistrarProducto />} />

        </Routes>
        
      </Router>
    );
}
export default Rutas;