import { jwtDecode } from "jwt-decode";
import * as API from "./ruta";

//* funcion para enviar los datos de inicio de sesion
export async function sesion(user_usuario, user_contrasena, navigate) {
  try {
    const token = await API.i_sesion(user_usuario, user_contrasena);
    localStorage.setItem("token", token);
    var idusuario = parseInt(localStorage.getItem("usuario"));
    console.log(idusuario);
    var Rol= await API.RolUsuario(idusuario);
    
    console.log(Rol);
    switch (Rol){
      case 1: 
        navigate("/lider");
        break;
      case 2:
        navigate("/estudianteCreaSoli");
        break;
      case 3:
        navigate("/lider");
        break;
      case 4:
        navigate("/lider");
        break;
      default:
        navigate("/NoPage");
        break;
    } 
  } catch (error) {
    alert(error.message);
  }
}

//* funcio para descodificar el token y usar la informacion
export async function decode_token() {
  const token = localStorage.getItem("token");
  const decode_token = jwtDecode(token);
  console.log(decode_token);
  return decode_token;
}

//* funcion para cerrar la sesion
export async function cerrar_sesion() {
  localStorage.removeItem("usuario");
  localStorage.removeItem("token");
  localStorage.removeItem("Nombre");
  localStorage.removeItem("Rol");
  localStorage.removeItem("modulo1");
  localStorage.removeItem("modulo2");
  localStorage.removeItem("modulo3");
  localStorage.removeItem("modulo4");
  localStorage.removeItem("modulo5");
  localStorage.removeItem("modulo6");
  localStorage.removeItem("modulo7");
  localStorage.removeItem("modulo8");
  localStorage.removeItem("modulo9");
  window.location.href = "/login";
}
