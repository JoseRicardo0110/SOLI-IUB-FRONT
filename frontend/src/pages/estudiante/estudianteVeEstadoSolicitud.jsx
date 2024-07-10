import NavbarPrueba2 from "../../components/navbar/navbarprueba2";
import Footer1 from "../../components/footer/footer";
import Lateral2 from "../../components/navbar/lateral2";
import Table2 from "../../components/table/table2";
import Table8 from "../../components/table/table8";
import { useEffect, useState } from "react";
import axios from "axios";
import Lateral3 from "../../components/navbar/lateral3";
const url = "http://127.0.0.1:8000";


export default function EstudianteVeEstadiSolicitud() {

  const [userss, setUserss] = useState([]);

    var idusuario = parseInt(localStorage.getItem("usuario"));
    console.log(idusuario);
    var get_SolicitudesPendientesPorIdPersona = async (idUsuario) => {
        try {
            const users = await axios.get(`${url}/get_SolicitudesPendientesPorIdUsuario/${idUsuario}`);
            const dato = await users.data;
            console.log(dato);
            console.log("toy dentro");
            setUserss(dato);
        } catch (error) {
        console.error(error);
        }
    };

    
    
    useEffect(() => {
        get_SolicitudesPendientesPorIdPersona(idusuario);
    }, []);


  const [users, setUsers] = useState([]);

    var idusuario = parseInt(localStorage.getItem("usuario"));

    console.log(idusuario);
    var get_Solicitud = async (idUsuario) => {
        try {
            const users = await axios.get(`${url}/get_Solicitud/${idUsuario}`);
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
    <div class="fondoZ2">
      <NavbarPrueba2/>
      <div class="todo ">
          <div class=" p-0">
            <Lateral3/>
          </div>
          <div class=" ld " >
          {userss.map((Usuarios) => (
              <div key={Usuarios.id}>
                <div class="mb-1">
                <div class=" soli bg-light ">
                    <div class="">
                      <div class="modal-header modo">
                        <h5 class="modal-title" id="exampleModalLabel"><b>ID de Tu solicitud:</b> {Usuarios.idSolicitud} </h5>
                        <h5 class="modal-title" id="exampleModalLabel"><b>Tipo de solicitud: </b>{Usuarios.valor}</h5>
                        <h5 class="estado2 text-light "><b>{Usuarios.estado}</b></h5>
                      </div>
                      <div class="raya"></div>
                      <div class="caja">
                        <div class="modal-body mt-3 modo ">
                          <h5><b>Archivo</b></h5>
                          <a class="nav-link " href="#">imgen.jpg</a>
                          
                        </div>
                        <div class="modal-body mt-3 mb-2 modo ">
                        <h5><b>Asunto</b></h5>
                        <p class="">{Usuarios.Asunto}</p>
                       
                      </div>
                      
                      </div>
                      <b class="ps-4"><b>Fecha de creacion:</b> {Usuarios.FechaCreacion}</b>
                      <div class="raya"></div>
                      <div class="caja">
                        <div class="modal-body mt-3 modo ">
                          <h5><b>Persona asignada</b></h5>
                          <p class="">{Usuarios.NombreAsignado}</p>
                          
                        </div>
                        
                        <div class="modal-body mt-3 mb-2 modo ">
                        <h5><b>Respuesta</b></h5>
                        <p class="">{Usuarios.DescripcionRespuesta}</p>
                       
                      </div>
                      
                      </div>
                    </div>
                </div>
                </div>
              </div>
            ))}
          {users.map((Usuarios) => (
              <div key={Usuarios.id}>
                <div class="mb-1">
                <div class=" soli bg-light ">
                    <div class="">
                      <div class="modal-header modo">
                        <h5 class="modal-title" id="exampleModalLabel"><b>ID de Tu solicitud: </b>{Usuarios.idSolicitud}</h5>
                        <h5 class="modal-title" id="exampleModalLabel"><b>Tipo de solicitud: </b>{Usuarios.valor}</h5>
                        <h5 class="estado text-light"><b>{Usuarios.estado}</b></h5>
                      </div>
                      <div class="raya"></div>
                      
                      <div class="raya"></div>
                      <div class="caja">
                        <div class="modal-body mt-3 modo ">
                          <h5><b>Archivo</b></h5>
                          <a class="nav-link " href="#">imgen.jpg</a>
                          
                        </div>
                        
                        <div class="modal-body mt-3 mb-2 modo ">
                        <h5><b>Asunto</b></h5>
                        <p class="">{Usuarios.Asunto}</p>
                       
                      </div>
                      
                      </div>
                      <b class="ps-4">Fecha de creacion: {Usuarios.FechaCreacion}</b>
                    </div>
                </div>
                </div>
              </div>
            ))}
          
          </div>
      </div> 
      <Footer1/>
    </div>  
  );
}
