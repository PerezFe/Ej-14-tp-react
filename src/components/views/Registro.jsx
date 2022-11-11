import React from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { crearUsuarioAPI } from "../helpers/queries";

const Registro = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
      } = useForm({
        defaultValues: {
          usuario: "",
          mail: "",
          password: "",
        },
      });
      const onSubmit = (usuario) => {
        crearUsuarioAPI(usuario).then((respuesta)=>{
            if(respuesta.status === 201){
                Swal.fire("Usuario creado", "El usuario fue creado correctamente", "success")
                reset();
            }else{
                Swal.fire("Ocurrio un error", "Vuelve a intentar", "error")
            }
        })
      };

    return (
        <Container className="mt-5">
        <Card>
          <Card.Header as="h4">Registro</Card.Header>
          <Card.Body>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group controlId="formUsuario">
                <Form.Label>Usuario</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingresar usuario"
                  {...register("usuario", {
                    required: "Competa este campo",
                    minLength: {
                      value: 5,
                      message: "Ingresa mínimo 5 dígitos",
                    },
                    maxLength: {
                      value: 50,
                      message: "Ingresa máximo 50 dígitos",
                    },
                  })}
                />
                <Form.Text className="text-danger">
                  {errors.usuario?.message}
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingresar Email"
                  {...register("mail", {
                    required: "Completa este campo",
                    minLength: {
                      value: 10,
                      message: "Ingresa mínimo 10 dígitos",
                    },
                    maxLength: {
                      value: 50,
                      message: "Ingresa máximo 50 dígitos",
                    },
                    pattern: {
                      value:
                        /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/,
                      message: "Email invalido",
                    },
                  })}
                />
                <Form.Text className="text-danger">
                  {errors.mail?.message}
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Ingresar contraseña"
                  {...register("password", {
                    required: "Completa este campo",
                    minLength: {
                      value: 10,
                      message: "Contraseña no valida",
                    },
                    maxLength: {
                      value: 50,
                      message: "Contraseña no valida",
                    },
                    pattern: {
                      value: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
                      message: "Contraseña invalida",
                    },
                  })}
                />
                <Form.Text className="text-danger">
                  {errors.password?.message}
                </Form.Text>
              </Form.Group>
              <Button type="submit" className="mt-3">
                Crear Usuario
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    );
};

export default Registro;