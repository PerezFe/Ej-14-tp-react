import { Card, Container } from "react-bootstrap";

const Error404 = () => {
  return (
    <Container className="footer mt-3">
      <section className="m-5">
        <Card.Body className="text-center">
          <Card.Img src="https://wetaca.com/images/404.png" alt="Error404" className="w-50 img-fluid" />
        </Card.Body>
      </section>
    </Container>
  );
};

export default Error404;