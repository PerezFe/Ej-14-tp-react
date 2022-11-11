import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./components/views/Inicio";
import Admin from "./components/views/Administrador";
import CrearReceta from "./components/views/receta/CrearReceta";
import EditarReceta from "./components/views/receta/EditarReceta";
import DetalleReceta from "./components/views/DetalleReceta";
import Error404 from "./components/views/Error404";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import Login from "./components/views/Login";
import Registro from "./components/views/Registro";
import "./app.css"
import { useState } from "react";

function App() {
  const usuario = JSON.parse(localStorage.getItem("usuarioKey")) || {};
  const [ usuarioLogin, setUsuarioLogin] = useState(usuario);

  return (
    <div className="App">
      <BrowserRouter>
      <Menu></Menu>
        <Routes>
          <Route exact path="/" element={<Inicio></Inicio>}></Route>
          <Route exact path="/administrador" element={<Admin></Admin>}></Route>
          <Route exact path="/administrador/crear" element={<CrearReceta></CrearReceta>}></Route>
          <Route exact path="/administrador/editar/:id" element={<EditarReceta></EditarReceta>}></Route>
          <Route exact path="/detalle/:id" element={<DetalleReceta></DetalleReceta>}></Route>
          <Route exact path="/login" element={<Login setUsuarioLogin={setUsuarioLogin}/>}></Route>
          <Route exact path="/registro" element={<Registro setUsuarioLogin={setUsuarioLogin}/>}></Route>
          <Route exact path="*" element={<Error404></Error404>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}


export default App;