import React from "react";
import { useNavigate } from "react-router";
import { sesion } from "../../sesion";
import { useState, useEffect } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

export default function Formulario1() {
  const clientID = "1074902750482-3n5iuj8ra8f13l8gcs6827e3peg7fc8n.apps.googleusercontent.com";
  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  const onSuccess = (response) => {
    setUser(response.profileObj);
    setLoggedIn(true);
    document.getElementsByClassName("btn")[0].hidden = true;
  };

  const onFailure = (response) => {
    console.log("Something went wrong", response);
  };

  const handleLogout = () => {
    setUser({});
    setLoggedIn(false);
  };

  const navigate = useNavigate();
  const handlelogin = () => {
    var user_usuario = document.getElementById("user_usuario").value;
    var user_contrasena = document.getElementById("user_contrasena").value;
    sesion(user_usuario, user_contrasena, navigate);
  };

  return (
    <GoogleOAuthProvider clientId={clientID}>
      <div className="bgl_login pt-4 pb-4">
        <div className="fondo conlogin shadow">
          <div className="">
            <div className="fs-1 tituloformulogin fw-bold mt-5 text-light">
              <p>Inicio de sesion</p>
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
              {loggedIn && (
                <div className="profile">
                  <img src={user.imageUrl} alt="User Profile" />
                  <h3>{user.name}</h3>
                  <button onClick={handleLogout} className="btn btn-secondary">
                    Logout
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}
