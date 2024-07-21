import React, { useState } from 'react';
import { useNavigate } from "react-router";
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { sesion } from "../../sesion";

export default function Formulario1() {
  const clientID = "1074902750482-3n5iuj8ra8f13l8gcs6827e3peg7fc8n.apps.googleusercontent.com"
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const onSuccess = (response) => {
    const decoded = jwtDecode(response.credential);
    setUser(decoded);
    document.getElementsByClassName("btn").hidden = true;
  };

  const onFailure = () => {
    console.log("Something went wrong");
  };

  const handleLogout  = () => {
    setUser({});
    googleLogout();
  };

  const handlelogin = () => {
    var user_usuario = document.getElementById("user_usuario").value;
    var user_contrasena = document.getElementById("user_contrasena").value;
    sesion(user_usuario, user_contrasena, navigate);
  };

  return (
    <GoogleOAuthProvider clientId={clientID}>
      <div className="bgl_login pt-4 pb-4">
        <div className="fondo conlogin shadow">
          <div>
            <div className="fs-1 tituloformulogin fw-bold mt-5 text-light">
              <p>Inicio de sesión</p>
            </div>
            <form className="posicion_imput2">
              <div className="tamano_imput posicion_imput1">
                <label className="form-label text-light">CORREO</label>
                <input
                  className="form-control bg-light"
                  type="text"
                  placeholder="usuario"
                  id="user_usuario"
                />
              </div>
              <div className="mt-3 tamano_imput">
                <label className="form-label text-light">CONTRASEÑA</label>
                <input
                  className="form-control bg-light"
                  type="password"
                  placeholder="contraseña"
                  id="user_contrasena"
                />
              </div>
              <div className="mt-4 tamano_imput">
                <button
                  className="btn btn-primary w-100 mt-4 fw-semibold shadow-sm"
                  type="button"
                  onClick={handlelogin}
                >
                  Iniciar sesión
                </button>
              </div>
              <div className='btn'>
                <GoogleLogin
                  onSuccess={onSuccess}
                  onError={onFailure}
                />
              </div>
              {user && (
                <div className="profile">
                  <img src={user.picture} alt="Profile" />
                  <h3>{user.name}</h3>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}
