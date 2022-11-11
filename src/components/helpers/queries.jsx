const URL = "http://localhost:4000/apireceta/receta";
const URLusuario = "http://localhost:4000/apireceta/usuario/";

export const consultaAPI = async () => {
  try {
    const respuesta = await fetch(URL);
    const recetas = await respuesta.json();
    return recetas;
  } catch (error) {
    console.log(error);
  }
};

export const crearRecetaAPI = async (receta) => {
  try {
    const respuesta = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(receta),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const borrarRecetaAPI = async (id) => {
  try {
    const respuesta = await fetch(URL + "/" + id, {
      method: "DELETE",
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const editarRecetaAPI = async (id, actualizacion) => {
  try {
    const respuesta = await fetch(URL + "/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(actualizacion),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const obtenerRecetaAPI = async (id) => {
  try {
    const respuesta = await fetch(URL + "/" + id);
    const recetaBuscada = {
      dato: await respuesta.json(),
      status: respuesta.status,
    };
    return recetaBuscada;
  } catch (error) {
    console.log(error);
  }
};

export const crearUsuarioAPI = async (usuario) => {
  try {
    const respuesta = await fetch(URLusuario, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const consultaLogin = async (usuario) =>{
  try {
    const respuesta = await fetch(URLusuario);
    const listaUsuario = await respuesta.json();
    const usuarioBuscado = listaUsuario.find((usuarioFind)=> usuarioFind.mail === usuario.mail)
    if(usuarioBuscado){
      console.log("mail encontrado")
      if(usuarioBuscado.password === usuario.password){
        return usuarioBuscado
      }
    }else{
      console.log("Error de usuario")
    }
  } catch (error) {
    console.log(error)
  }
}