import { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { consultaAPI } from "../helpers/queries";
import ItemReceta from "./receta/ItemReceta";

const Administrador = () => {
    const [receta, setReceta] = useState([]);

    useEffect(()=>{
        consultaAPI().then((respuesta)=>{
            setReceta(respuesta)
        })
    },[]);

  return (
    <Container className="my-5">
      <div>
        <h1>Lista de recetas</h1>
        <Link className="btn btn-outline-success" to="/administrador/crear">
          Agregar
        </Link>
        <hr />
      </div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Codigo</th>
            <th>Nombre</th>
            <th>Pasos</th>
            <th>Ingredientes</th>
            <th>Imagen</th>
          </tr>
        </thead>
        <tbody>
            {
                receta.map((receta)=><ItemReceta key={receta.id} receta={receta} setReceta={setReceta}/>)
            }
            
        </tbody>
      </Table>
    </Container>
  );
};

export default Administrador;