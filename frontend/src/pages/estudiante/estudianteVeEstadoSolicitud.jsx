import NavbarPrueba2 from "../../components/navbar/navbarprueba2";
import Footer1 from "../../components/footer/footer";
import Lateral3 from "../../components/navbar/lateral3";
import ChatBot from "../../components/chat1/CHATBOT";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Collapse } from 'reactstrap';
const url = "https://soli-iub-fastapi.onrender.com";

export default function EstudianteVeEstadiSolicitud() {
  const [userss, setUserss] = useState([]);
  const [users, setUsers] = useState([]);
  const [expandedRequestId, setExpandedRequestId] = useState(null);
  
  const idusuario = parseInt(localStorage.getItem("usuario"));

  useEffect(() => {
    const get_SolicitudesPendientesPorIdPersona = async (idUsuario) => {
      try {
        const response = await axios.get(`${url}/get_SolicitudesPendientesPorIdUsuario/${idUsuario}`);
        setUserss(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    get_SolicitudesPendientesPorIdPersona(idusuario);
  }, [idusuario]);

  useEffect(() => {
    const get_Solicitud = async (idUsuario) => {
      try {
        const response = await axios.get(`${url}/get_Solicitud/${idUsuario}`);
        setUsers(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    get_Solicitud(idusuario);
  }, [idusuario]);

  const toggleExpand = (id) => {
    setExpandedRequestId(expandedRequestId === id ? null : id);
  };

  return (
    <div className="fondoZ2">
      <NavbarPrueba2 />
      <div className="todo">
        <div className="p-0">
          <Lateral3 />
        </div>
        <div className="ld">
          {[...userss, ...users].map((Usuarios) => (
            <div key={Usuarios.idSolicitud} className="soli bg-light p-3 mb-2">
              <div className="d-flex justify-content-between align-items-center">
                <div><b>ID Solicitud:</b> {Usuarios.idSolicitud}</div>
                <div><b>Tipo:</b> {Usuarios.valor}</div>
                <div className={`badge ${Usuarios.estado === 'pendiente' ? 'bg-primary' : 'bg-success'}`}>{Usuarios.estado}</div>
                <Button color="link" onClick={() => toggleExpand(Usuarios.idSolicitud)}>
                  {expandedRequestId === Usuarios.idSolicitud ? 'Ver menos' : 'Ver más'}
                </Button>
              </div>
              <Collapse isOpen={expandedRequestId === Usuarios.idSolicitud}>
                <div className="mt-3 border-top pt-3">
                  <p><b>Archivo:</b> <a href="#">imagen.jpg</a></p>
                  <p><b>Asunto:</b> {Usuarios.Asunto}</p>
                  <p><b>Fecha de creación:</b> {Usuarios.FechaCreacion}</p>
                  <p><b>Persona asignada:</b> {Usuarios.NombreAsignado}</p>
                  <p><b>Respuesta:</b> {Usuarios.DescripcionRespuesta || "Sin respuesta"}</p>
                </div>
              </Collapse>
            </div>
          ))}
        </div>
      </div>
      <ChatBot />
      <Footer1 />
    </div>
  );
}
