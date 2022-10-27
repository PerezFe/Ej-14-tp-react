import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { obtenerRecetaAPI } from "../helpers/queires";
import Swal from "sweetalert2";

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
              <Card.Title>{receta.titulo}</Card.Title>
              <Card.Text>{receta.pasos}</Card.Text>
              <Card.Text>{receta.ingredientes}</Card.Text>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <div className="d-flex justify-content-end">
        <Link className="btn btn-success mt-3" to="/">
          Vovler
        </Link>
      </div>
    </Container>
  );
};

export default DetalleProducto;