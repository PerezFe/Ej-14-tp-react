import { useForm } from "react-hook-form";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { editarRecetaAPI, obtenerRecetaAPI } from "../../helpers/queries";
import Swal from "sweetalert2";
import { useEffect } from "react";


const EditarReceta = () => {
    const { id } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      titulo: "",
      pasos: "",
      ingredientes: "",
      imagen: "",
    },
  });

  const navegacion = useNavigate();

  useEffect(() => {
    obtenerRecetaAPI(id).then((respuesta) => {
      if (respuesta.status === 200) {
        setValue("titulo", respuesta.dato.titulo);
        setValue("pasos", respuesta.dato.pasos);
        setValue("ingredientes", respuesta.dato.ingredientes);
        setValue("imagen", respuesta.dato.imagen);
      }else{
        Swal.fire("Ocurrio un error", "Vuelva a intentarlo", "error")
      }
    });
  },[]);

  const onSubmit = (datos) => {
    console.log(datos)
    editarRecetaAPI(id, datos).then((respuesta) => {
      if (respuesta.status === 200) {
        Swal.fire("Receta Actualizada", "", "success");
        navegacion("/administrador");
      } else {
        Swal.fire("Ocurrio un error", "Vuelve a intentar", "error");
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
                value: 5,
                message: "Debe ingresar como minimo 5 caracteres",
              },
              maxLength: {
                value: 50,
                message: "Debe ingresar como maximo 50 caracteres",
              },
            })}
          ></Form.Control>
          <Form.Text className="text-danger">
            {errors.titulo?.message}
          </Form.Text>
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
                value: 5,
                message: "Debe ingresar como minimo 5 caracteres",
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
                value: 5,
                message: "Debe ingresar como minimo 5 caracteres",
              },
              maxLength: {
                value: 500,
                message: "Debe ingresar como maximo 500 caracteres",
              },
            })}
          ></Form.Control>
          <Form.Text className="text-danger">
            {errors.ingredientes?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label>Imagen</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese una url. Ej: https://www.ejemplo.com/pan"
            minLength={5}
            maxLength={100}
            {...register("imagen", {
              required: "Completa este campo",
              pattern: {
                value: /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
                message: "Debe ingresar una url valida",
              },
            })}
          ></Form.Control>
          <Form.Text className="text-danger">
            {errors.imagen?.message}
          </Form.Text>
        </Form.Group>
        <Button type="submit">
          Editar
        </Button>
      </Form>
    </Container>
  );
};

export default EditarReceta;