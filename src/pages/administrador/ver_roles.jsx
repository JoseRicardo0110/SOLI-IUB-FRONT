import NavbarPrueba from "../../components/navbar/navbarprueba";
import Lateral3 from "../../components/navbar/lateral3";
import Footer1 from "../../components/footer/footer";
import { useEffect, useState } from "react";
import axios from "axios";
const url = "http://127.0.0.1:8000";



export default function Ver_roles() {
  const   handlelogin= async(valor) => {
    
    console.log(valor);
    console.log("El rol es :",valor);
    const modulos = await axios.get(`${url}/get_modulos/${valor}`);
      const dato = await modulos.data;
      console.log(dato);
      const listaModulos = document.getElementById("lista-modulos");
      dato.forEach((modulo) => {
        const li = document.createElement("li");
        li.textContent = modulo.modulos
        ; // Cambia "nombre" por la propiedad que quieras mostrar
        listaModulos.appendChild(li);
    });
      console.log("toy dentro");
      return dato;   
  };

  

  const [users, setUsers] = useState([]);

  const get_SolicitudesSinAsignarr = async () => {
    try {
      const users = await axios.get(`${url}/get_Roles`);
      const dato = await users.data.resultado;
      console.log(dato);
      console.log("toy dentro");
      setUsers(dato);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    get_SolicitudesSinAsignarr();
  }, []);
  
  function miFuncion() {
    window.location.href = window.location.href;
}
  return (

      <>
        <NavbarPrueba/>
      <div class="todo fondoZ2">
        
        <div class=" p-0 lr">
          <Lateral3/>
        </div>
        <div class=" ld ">
          <div class="row">
          {users.map((Usuarios) => (
            <div class="col-4">
            
                <div class="card carta1 ms-4 mb-2">
                  
                <div key={Usuarios.IdRol} class="card-body">
                <h4 class="card-title">{Usuarios.IdRol}</h4>
                  <h4 class="card-title">{Usuarios.NombreRol}</h4>
                  <p class="card-text">{Usuarios.DescripcionRol}</p>
                </div>
                
                
                <div class="card-body">
                <button
    type="button"
    value={Usuarios.IdRol}
    onClick={() => handlelogin(Usuarios.IdRol)}
    class="btn btn-success m-2"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
>
    Ver modulos permitidos
</button>


        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Modulos de {Usuarios.NombreRol}</h1>
                <button type="button" onClick={miFuncion} class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
              <ul id="lista-modulos">

              </ul>
              </div>
            </div>
          </div>
        </div>
                </div>
                </div>
                
            </div>))}
            
          </div>
        </div>
        
      </div>
      <Footer1/>
      </>
      
    
  );
}
