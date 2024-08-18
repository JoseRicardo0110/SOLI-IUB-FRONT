import Footer1 from "../../components/footer/footer";
import NavbarPrueba from "../../components/navbar/navbarprueba";
import Lateral3 from "../../components/navbar/lateral3";
import ChatBot from "../../components/chat1/CHATBOT";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function TUTORIAS() {
  const [sesiones, setSesiones] = useState([]);

  useEffect(() => {
    // Obtener las sesiones de tutoría al cargar el componente
    axios.get('http://127.0.0.1:5000/tutorias')
      .then(response => {
        setSesiones(response.data);
      })
      .catch(error => {
        console.error('Error al obtener las sesiones:', error);
      });
  }, []);

  const [tutoria, setTutoria] = useState({
    tutor_id: '',
    fecha_hora: '',
    student_id: '',
    tema: '',
    duracion: '',
    comentarios: ''
  });

  const handleChange = (e) => {
    setTutoria({
      ...tutoria,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://127.0.0.1:5000/tutorias', tutoria)
      .then(response => {
        console.log('Sesión agregada:', response.data);
        setSesiones([...sesiones, response.data]); // Actualiza la lista de sesiones con la nueva sesión
        setTutoria({
          tutor_id: '',
          fecha_hora: '',
          student_id: '',
          tema: '',
          duracion: '',
          comentarios: ''
        });
      })
      .catch(error => {
        console.error('Error al agregar la sesión:', error);
      });
  };

  return (
    <>
      <NavbarPrueba />
      <div className="container-fluid bg-light main-container">
        <div className="row h-100">
          <div className="col-md-2 p-0 fondofo sidebar">
            <Lateral3 />
          </div>
          <div className="col-md-10 p-4 content-area">
            <div className="card shadow mb-4">
              <div className="card-header bg-primary text-white">
                <h4>Agregar Nueva Tutoría</h4>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Tutor ID:</label>
                    <input type="text" className="form-control" name="tutor_id" value={tutoria.tutor_id} onChange={handleChange} required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Fecha y Hora:</label>
                    <input type="datetime-local" className="form-control" name="fecha_hora" value={tutoria.fecha_hora} onChange={handleChange} required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Student ID:</label>
                    <input type="text" className="form-control" name="student_id" value={tutoria.student_id} onChange={handleChange} required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Tema:</label>
                    <input type="text" className="form-control" name="tema" value={tutoria.tema} onChange={handleChange} required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Duración (en minutos):</label>
                    <input type="number" className="form-control" name="duracion" value={tutoria.duracion} onChange={handleChange} required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Comentarios:</label>
                    <textarea className="form-control" name="comentarios" value={tutoria.comentarios} onChange={handleChange} />
                  </div>
                  <button type="submit" className="btn btn-primary">Agregar Tutoría</button>
                </form>
              </div>
            </div>
            <div className="card shadow">
              <div className="card-header bg-primary text-white">
                <h4>Sesiones de Tutoría</h4>
              </div>
              <div className="card-body">
                <table className="table table-striped table-hover">
                  <thead className="table-primary">
                    <tr>
                      <th>Tutor ID</th>
                      <th>Fecha y Hora</th>
                      <th>Student ID</th>
                      <th>Tema</th>
                      <th>Duración</th>
                      <th>Comentarios</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sesiones.map((sesion, index) => (
                      <tr key={index}>
                        <td>{sesion.tutor_id}</td>
                        <td>{sesion.fecha_hora}</td>
                        <td>{sesion.student_id}</td>
                        <td>{sesion.tema}</td>
                        <td>{sesion.duracion}</td>
                        <td>{sesion.comentarios}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <ChatBot />
      </div>
      <Footer1 />
    </>
  );
}
