import { Button, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { crearRecetaAPI } from "../../helpers/queries";

const CrearProducto = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      titulo: "",
      pasos: "",
      ingredientes: "",
      imagen: "",
    },
  });

  const navegacion = useNavigate()

  const onSubmit = (datos) => {
    crearRecetaAPI(datos).then((respuesta) => {
      if (respuesta.status === 201) {
        Swal.fire("Receta agregada", "" ,"success");
        reset()
        navegacion("/administrador")
      } else {
        Swal.fire("Ocurrio un error", "Vuelva a intentar", "error");
      }
    });
  };
  return (
    <Container className="mt-4">
      <h2>Agregar Receta</h2>
      <hr />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <Form.Label>Nombre de la receta</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej:Budin"
            minLength={5}
            maxLength={50}
            {...register("titulo", {
              required: "Complete este campo",
              minLength: {
                value: 2,
                message: "Debe ingresar como minimo 2 caracteres",
              },
              maxLength: {
                value: 50,
                message: "Debe ingresar como maximo 50 caracteres",
              },
            })}
          ></Form.Control>
          <Form.Text className="text-danger">{errors.titulo?.message}</Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label>Pasos a seguir</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Ingresar los pasos de la receta"
            minLength={5}
            maxLength={5000}
            {...register("pasos", {
              required: "Complete este campo",
              minLength: {
                value: 2,
                message: "Debe ingresar como minimo 2 caracteres",
              },
              maxLength: {
                value: 5000,
                message: "Debe ingresar como maximo 5000 caracteres",
              },
            })}
          ></Form.Control>
          <Form.Text className="text-danger">{errors.pasos?.message}</Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label>Ingredientes</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej:Harina, huevos, etc..."
            minLength={5}
            maxLength={500}
            {...register("ingredientes", {
              required: "Complete este campo",
              minLength: {
                value: 2,
                message: "Debe ingresar como minimo 2 caracteres",
              },
              maxLength: {
                value: 500,
                message: "Debe ingresar como maximo 500 caracteres",
              },
            })}
          ></Form.Control>
          <Form.Text className="text-danger">{errors.ingredientes?.message}</Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label>Imagen</Form.Label>
          <Form.Control
            type="text"
            minLength={5}
            maxLength={100}
            placeholder="Ingrese una url. Ej: https://www.ejemplo.com/pan"
            {...register("imagen", {
              required: "Completa este campo",
              pattern: {
                value: /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
                message: "Debe ingresar una url valida",
              },
            })}
          ></Form.Control>
          <Form.Text className="text-danger">{errors.imagen?.message}</Form.Text>
        </Form.Group>
        <Button className="btn btn-success my-4" type="submit">
          Cargar
        </Button>
      </Form>
    </Container>
  );
};

export default CrearProducto;