import axios from 'axios';

const url = "http://127.0.0.1:8000";


export async function RolUsuario(IdXUsuario) {
  console.log("afuera");
  try {
    console.log("ruta");
    const response = await axios({
      method: "GET",
      url: `${url}/get_rolxusuario/${IdXUsuario}`,
    }); 
    const data = await response.data.IdRol;
    console.log(data);
    console.log("toy dentro en rolex");
    return data;
  } catch (error) {
    console.error(error);
  }
}



export async function get_users() {
  try {
    const users = await axios.get(`${url}/get_users`);
    const data = await users.data.resultado;
    console.log(data);
    console.log("toy get_users");
    return data;
  } catch (error) {
    console.error(error);
  }
}




export async function Update_user(user_id,data) {
  try {
    const user = await axios.PUT(`${url}/update_user/${user_id}`,data);
    const response = await user.data.content;
    console.log(response);
    console.log("toy dentro");
    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function i_sesion(usuario,contrasena) {
  try {
    console.log(usuario,contrasena);
    const response = await axios({
      method: "POST",
      url: `${url}/loginuser`,
      data: {
        usuario: usuario,
        contrasena: contrasena
      },
    }); 
    const dato = response.data.access_token;
    const persona =response.data.usuario;
    console.log(persona);
    console.log(dato);
    localStorage.setItem("usuario", persona.id);
    localStorage.setItem("Nombre", persona.nombre);
    localStorage.setItem("Rol", persona.rol);
    return dato;
  } catch (error) {
    if (error.response && error.response.status === 404){
      throw new Error(error.response.data.detail);
    } else { 
      throw new Error("error al iniciar sesion");
    }
  }
}

export async function asignate(id,idUsuario,nombre,FechaUltimaModificacion,correo) {
  try {
    axios({
      method: "POST",
      url: `${url}/asignarme/`,
      data: {
        id: id,
        idUsuario: idUsuario,
        nombre: nombre,
        FechaUltimaModificacion: FechaUltimaModificacion,
        correo:correo
      },
    }); 
    
    
  } catch (error) {
    if (error.response && error.response.status === 404){
      throw new Error(error.response.data.detail);
    } else { 
      throw new Error("error al iniciar sesion");
    }
  }
}


export async function Crea_Solicitud(idUsuario,IdTipoSolicitud,Asunto) {
  try {
    var hoy = new Date();
    var dia = hoy.getDate();
    var mes = hoy.getMonth() + 1; 
    var año = hoy.getFullYear();
    var FechaCreacion = dia+"/"+mes+"/"+año;
    console.log(idUsuario,IdTipoSolicitud,Asunto);
    axios({
      method: "post",
      url: `${url}/create_Solicitud`,
      data: {
        idUsuario: idUsuario,
        IdTipoSolicitud: IdTipoSolicitud,
        Asunto: Asunto,
        FechaCreacion: FechaCreacion
      },
      
    });
  } catch (error) {
      return error;
  }
}


export async function consultar_solicitud(id_soli) {
  try {
    const user = await axios.get(`${url}/get_soli/${id_soli}`);
    const response = await user.data.DescripcionRespuesta;
    console.log(response);
    console.log("toy dentro");
    return response
  } catch (error) {
    console.error(error);
  }
}

export async function responder(id,texto,correo,FechaUltimaModificacion) {
  try {
    axios({
      method: "POST",
      url: `${url}/responder/`,
      data: {
        id: id,
        texto: texto,
        correo: correo,
        FechaUltimaModificacion: FechaUltimaModificacion
      },
    }); 
    return "respuesta"
  } catch (error) {
    if (error.response && error.response.status === 404){
      throw new Error(error.response.data.detail);
    } else { 
      throw new Error("error al responder");
    }
  }
}

export async function notificar1(id_soli) {
  try {
    var id= parseInt(id_soli)
    const usuario = await axios.get(`${url}/get_solicitudcorreo/${id}`);
    const response = usuario.data.correo;
    return response
  } catch (error) {
    console.error(error);
  }
}


export async function finalizar_solicitud(id,fecha,correo) {
  try {
    axios({
      method: "POST",
      url: `${url}/finalizar_solicitud/`,
      data: {
        id: id,
        fecha: fecha,
        correo: correo
      },
    }); 
    return "se mando la informacion";
  } catch (error) {
    if (error.response && error.response.status === 404){
      throw new Error(error.response.data.detail);
    } else { 
      throw new Error("error al iniciar sesion");
    }
  }
}