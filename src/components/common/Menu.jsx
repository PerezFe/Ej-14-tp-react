import { Navbar, Nav, Container} from "react-bootstrap";
import {Link, NavLink} from "react-router-dom"

const Menu = () => {
  return (
    <Navbar bg="warning" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" className="text-white" >
          Recetas
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse  >
          <Nav className="me-auto">
            <NavLink to="/" className="nav-item nav-link text-white" >
              Inicio
            </NavLink>
            <NavLink to="/administrador" className="nav-item nav-link text-white">
              Admin
            </NavLink>
            <NavLink to="/login" className="nav-item nav-link text-white">Login</NavLink>
            <NavLink to="/Registro" className="nav-item nav-link text-white">Registro</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;