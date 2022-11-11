
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { borrarRecetaAPI, consultaAPI } from "../../helpers/queries";

const ItemReceta = ({receta, setReceta}) => {
  const borrarReceta = () =>{
    Swal.fire({
      title: 'Estas seguro?',
      text: "No podras revertir este paso!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, borralo!',
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        borrarRecetaAPI(receta.id).then((respuesta)=>{
          if(respuesta.status === 200){
            consultaAPI().then((respuesta) =>{
              setReceta(respuesta)
            })  
            Swal.fire(
              'Borrado!',
              'El producto fue borrado.',
              'success'
            )
            
          }else{
            Swal.fire(
              "Se produjo un error",
              "Prube mas tarde",
              "error"
            )
          }
        })
      }
    })
  }
  return (
    <tr>
      <td>{receta.id}</td>
      <td>{receta.titulo}</td>
      <td className="ocultarTexto">{receta.pasos}</td>
      <td>{receta.ingredientes}</td>
      <td>{receta.imagen}</td>
      <td>
        <Link className="btn btn-warning m-1" to={`/administrador/editar/${receta.id}`}>
          Editar
        </Link>
        <Button variant="danger" className="m-1 text-black" onClick={borrarReceta}>
          Borrar
        </Button>
      </td>
    </tr>
  );
};

export default ItemReceta;