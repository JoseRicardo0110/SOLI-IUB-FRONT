import Footer1 from "../../components/footer/footer";
import NavbarPrueba from "../../components/navbar/navbarprueba";
import Lateral3 from "../../components/navbar/lateral3";
import ChatBot from "../../components/chat1/CHATBOT";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
      <div className="todo fondoZ3">
        <div className="p-0 lr">
          <Lateral3 />
        </div>
        <div className="ld">
          <form onSubmit={handleSubmit}>
            <label>
              Tutor ID:
              <input type="text" name="tutor_id" value={tutoria.tutor_id} onChange={handleChange} required />
            </label>
            <label>
              Fecha y Hora:
              <input type="datetime-local" name="fecha_hora" value={tutoria.fecha_hora} onChange={handleChange} required />
            </label>
            <label>
              Student ID:
              <input type="text" name="student_id" value={tutoria.student_id} onChange={handleChange} required />
            </label>
            <label>
              Tema:
              <input type="text" name="tema" value={tutoria.tema} onChange={handleChange} required />
            </label>
            <label>
              Duración:
              <input type="number" name="duracion" value={tutoria.duracion} onChange={handleChange} required />
            </label>
            <label>
              Comentarios:
              <input type="text" name="comentarios" value={tutoria.comentarios} onChange={handleChange} />
            </label>
            <button type="submit">Agregar Tutoría</button>
          </form>
          <table>
            <thead>
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
        <ChatBot />
      </div>
      <Footer1 />
    </>
  );
}
