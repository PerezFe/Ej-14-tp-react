import { useEffect, useState } from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { consultaAPI } from "../../helpers/queries";

const Receta = () => {
  const [receta, setReceta] = useState([]);

  useEffect(() => {
    consultaAPI().then((respuesta) => {
      setReceta(respuesta);
    });
  }, []);
  return (
    <>
      {receta.map((receta) => (
        <Col sm={12} md={4} lg={4} className="my-1">
          <Card key={receta.id}>
            <Card.Img
              src={receta.imagen}
              alt={receta.titulo}
              className="img-fluid imgSize"
            />
            <Card.Body>
              <Card.Title>{receta.titulo}</Card.Title>
              <Card.Text className="ocultarTexto ocultarTextoMD">
                {receta.ingredientes}
              </Card.Text>
              <Link className="btn btn-success" to={`/detalle/${receta.id}`}>
                Ver más
              </Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default Receta;