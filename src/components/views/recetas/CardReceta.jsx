import React from "react";
import { Button, Card } from "react-bootstrap";

const CardProducto = () => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.pexels.com/photos/3915858/pexels-photo-3915858.jpeg?cs=srgb&dl=pexels-horizon-content-3915858.jpg&fm=jpg&_gl=1*wl8nmu*_ga*MjY2MDkxMzQxLjE2NjYyMjU2ODg.*_ga_8JE65Q40S6*MTY2NjM5NDE4MC40LjEuMTY2NjM5NDQ0Mi4wLjAuMA.." />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Detalle</Button>
      </Card.Body>
    </Card>
  );
};

export default CardProducto;
