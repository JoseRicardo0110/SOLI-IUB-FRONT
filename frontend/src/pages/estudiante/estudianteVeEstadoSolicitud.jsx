import NavbarPrueba2 from "../../components/navbar/navbarprueba2";
import Footer1 from "../../components/footer/footer";
import Lateral3 from "../../components/navbar/lateral3";
import ChatBot from "../../components/chat1/CHATBOT";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Collapse, Input } from 'reactstrap';
const url = "https://soli-iub-fastapi.onrender.com";

export default function EstudianteVeEstadiSolicitud() {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");
  const [expandedRequestId, setExpandedRequestId] = useState(null);

  const idusuario = parseInt(localStorage.getItem("usuario"));
  
  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await axios.get(`${url}/get_Solicitud/${idusuario}`);
        setUsers(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchRequests();
  }, [idusuario]);

  const toggleExpand = (id) => {
    setExpandedRequestId(expandedRequestId === id ? null : id);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredUsers = users.filter(user => 
    user.Asunto.toLowerCase().includes(filter.toLowerCase()) ||
    user.idSolicitud.toString().includes(filter)
  );

  return (
    <div className="fondoZ2">
      <NavbarPrueba2 />
      <div className="todo">
        <div className="p-0">
          <Lateral3 />
        </div>
        <div className="ld">
          <Input
            type="text"
            placeholder="Filtrar por palabra clave o ID de solicitud"
            value={filter}
            onChange={handleFilterChange}
            className="mb-3"
          />
          {filteredUsers.map((user) => (
            <div key={user.idSolicitud} className="mb-2 soli bg-light p-2">
              <div className="d-flex justify-content-between align-items-center">
                <div><b>ID de Tu solicitud:</b> {user.idSolicitud}</div>
                <div><b>Tipo de solicitud:</b> {user.valor}</div>
                <div className={`estado2 text-light ${user.estado === 'pendiente' ? 'bg-primary' : 'bg-success'}`}><b>{user.estado}</b></div>
                <Button color="primary" onClick={() => toggleExpand(user.idSolicitud)}>
                  {expandedRequestId === user.idSolicitud ? 'Ver menos' : 'Ver más'}
                </Button>
              </div>
              <Collapse isOpen={expandedRequestId === user.idSolicitud}>
                <div className="mt-3">
                  <div><b>Archivo:</b> <a href="#">imagen.jpg</a></div>
                  <div><b>Asunto:</b> {user.Asunto}</div>
                  <div><b>Fecha de creación:</b> {user.FechaCreacion}</div>
                  <div><b>Persona asignada:</b> {user.NombreAsignado}</div>
                  <div><b>Respuesta:</b> {user.DescripcionRespuesta || "Sin respuesta"}</div>
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
