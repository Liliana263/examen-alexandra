import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Login from "./Login";

function Rutas(){
    return(
        <Router>
        <Routes>
            <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    );
}
export default Rutas;