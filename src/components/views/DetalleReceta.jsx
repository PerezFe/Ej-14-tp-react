import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { obtenerRecetaAPI } from "../helpers/queries";
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";


const DetalleProducto = () => {
  const [receta, setReceta] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    obtenerRecetaAPI(id).then((respuesta) => {
      if (respuesta.status === 200) {
        setReceta(respuesta.dato);
      } else {
        Swal.fire("Ocurrio un error", "Vuelva a intentarlo", "error");
      }
    });
  },[]);

  return (
    <Container className="mt-3">
      <Card>
        <Card.Body>
          <Row>
            <Col sm={12} md={6} lg={5}>
              <Card.Img src={receta.imagen} alt={receta.titulo} />
            </Col>
            <Col sm={12} md={6} lg={7}>
              <Card.Title className="my-5">{receta.titulo}</Card.Title>
              <Card.Text className="fw-bold my-3">Ingredientes</Card.Text>
              <Card.Text>{receta.ingredientes}</Card.Text>
              <Card.Text className="fw-bold">Preparacion</Card.Text>
              <Card.Text>{receta.pasos}</Card.Text>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <div className="d-flex justify-content-end">
        <Link className="btn btn-success mt-3 my-5" to="/">
          Volver
        </Link>
      </div>
    </Container>
  );
};

export default DetalleProducto;