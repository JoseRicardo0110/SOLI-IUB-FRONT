import React from "react";
import { useNavigate } from "react-router";
import { sesion } from "../../sesion";
import { useState, useEffect } from 'react';
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from '@react-oauth/google';
import {jwtDecode} from "jwt-decode";

export default function Formulario1() {
  const clientID = "1074902750482-3n5iuj8ra8f13l8gcs6827e3peg7fc8n.apps.googleusercontent.com";
  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const onSuccess = (response) => {
    const token = response.credential;
    const decoded = jwtDecode(token);
    const userEmail = decoded.email;
    const userPassword = decoded.sub; // Use the Google user ID as a temporary password

    setUser(decoded);
    setLoggedIn(true);
    document.getElementsByClassName("btn")[0].hidden = true;
    console.log(userEmail);
    console.log(userPassword);
    // Execute the session function
    sesion(userEmail, userPassword, navigate);
  };

  const onFailure = (response) => {
    console.log("Something went wrong", response);
  };

  const handleLogout = () => {
    setUser({});
    setLoggedIn(false);
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
            </form>
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}
