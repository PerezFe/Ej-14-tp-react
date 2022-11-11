import { Button, Card, Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { consultaLogin } from "../helpers/queries";
import Swal from "sweetalert2";

const Login = ({ setUsuarioLogin }) => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      mail: "",
      password: "",
    },
  });

  const onSubmit = (dato) => {
    consultaLogin(dato).then((respuesta) => {
      if (respuesta) {
        localStorage.setItem("usuarioKey", JSON.stringify(respuesta));
        setUsuarioLogin(respuesta);
        navigate("/administrador");
      } else {
        Swal.fire("Error", "Usuario inexistente", "error");
      }
    });
  };

  return (
    <Container>
      <Card className="mt-5">
        <Card.Header as="h4">Login</Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingresar email"
                {...register("mail", {
                  required: "Complete este campo",
                  minLength: {
                    value: 4,
                    message: "Ingresar mínimo 4 dígitos",
                  },
                  maxLength: {
                    value: 30,
                    message: "Ingresar máximo 30 dígitos",
                  },
                  pattern: {
                    value:
                    /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/,
                    message: "Email invalido",
                  },
                })}
              ></Form.Control>
              <Form.Text className="text-danger">
                {errors.mail?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingresar Contraseña"
                {...register("password", {
                  required: "Complete este campo",
                  minLength: {
                    value: 8,
                    message: "Contraseña incorrecta",
                  },
                  maxLength: {
                    value: 30,
                    message: "Contraseña incorrecta",
                  },
                  pattern: {
                    value: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
                    message: "Contraseña invalida",
                  },
                })}
              ></Form.Control>
              <Form.Text className="text-danger">
                {errors.password?.message}
              </Form.Text>
            </Form.Group>
            <Button type="submit" className="mt-3" >
              Ingresar
            </Button>
          </Form>
          <Link to={"/registro"} className="btn btn-outline-primary mt-4">
            Crear cuenta
          </Link>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;