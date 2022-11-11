import { Container, Row } from "react-bootstrap";
import CardReceta from "./producto/CardReceta";

const Inicio = () => {
    return (
        <Container>
            <section>
            <h1>Recetas de la Abuela</h1>
            <hr />
            </section>
            <Row>
                <CardReceta></CardReceta>
            </Row>
        </Container>
    );
};

export default Inicio;