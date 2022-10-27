import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./components/views/Inicio";
import Administrador from "./components/views/Administrador";
import CrearReceta from "./components/views/recetas/CrearReceta";
import EditarReceta from "./components/views/recetas/EditarReceta";
import DetalleReceta from "./components/views/DetalleReceta";
import Error404 from "./components/views/Error404";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import "./app.css"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Menu></Menu>
        <Routes>
          <Route exact path="/" element={<Inicio></Inicio>}></Route>
          <Route exact path="/administrador" element={<Administrador></Administrador>}></Route>
          <Route exact path="/administrador/crear" element={<CrearReceta></CrearReceta>}></Route>
          <Route exact path="/administrador/editar/:id" element={<EditarReceta></EditarReceta>}></Route>
          <Route exact path="/detalle/:id" element={<DetalleReceta></DetalleReceta>}></Route>
          <Route exact path="*" element={<Error404></Error404>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;