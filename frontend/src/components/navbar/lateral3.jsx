import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
const url = "https://soli-iub-fastapi.onrender.com";
export default function Lateral3() {
  const [users, setUsers] = useState([]);

  var idusuario = parseInt(localStorage.getItem("Rol"));

  console.log(idusuario);
  var get_Solicitud = async (idUsuario) => {
    try {
      const users = await axios.get(`${url}/get_modulos/${idUsuario}`);
      const dato = await users.data;
      console.log(dato);
      console.log("toy dentro");
      setUsers(dato);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    get_Solicitud(idusuario);
  }, []);

  return (
    <>
      <div id="layoutSidenav" class="fijobajo ">
        <div id="">
          <nav class="sb-sidenav  ps-2 text-light fondofo">
            <div class="sb-sidenav-menu pt-2">
              <div class="nav ">
                {users.map((Usuarios) => (
                    
                  <div  key={Usuarios.path}>
                    <Link class="nav-link text-light" to={Usuarios.detalle}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                    </svg>
                      {Usuarios.modulos}
                    </Link>
                    
                  </div>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
