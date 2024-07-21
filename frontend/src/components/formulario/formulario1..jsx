import React from "react";
import {} from "react-bootstrap";
import { useNavigate } from "react-router";
import { sesion } from "../../sesion";
import { useState, useEffect } from 'react';
import { gapi } from "gapi-script";
import GoogleLogin from 'react-google-login';

export default function Formulario1() {
  const clientID = "1074902750482-3n5iuj8ra8f13l8gcs6827e3peg7fc8n.apps.googleusercontent.com"
  const [user, setUser] = useState({});
  const [loggeIn, setLoggetInfo] = useState(false); 

  const onSuccess = (response) => {
    setUser(response.profileObj);
    document.getElementsByClassName("btn").hidden = true;
  }
  const onFailure = (response) => {
    console.log("Something went wrong");
  }
  const handleLogout  = () => {
    setUser({}); 
  }
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientID,
      });
    }
    gapi.load("client:auth2", start);
  });


  const navigate = useNavigate();
  const handlelogin = () => {
    var user_usuario = document.getElementById("user_usuario").value;
    var user_contrasena = document.getElementById("user_contrasena").value;
    sesion(user_usuario, user_contrasena, navigate);
  };
  return (
    <div class="bgl_login pt-4 pb-4">
      <div class="fondo conlogin shadow  ">
        <div class="">
          <div class="fs-1 tituloformulogin fw-bold mt-5 text-light">
            <p>Inicio de sesion</p>
          </div>
          <form class="posicion_imput2 ">
            <div class="  tamano_imput posicion_imput1 ">
              <label class="form-label text-light">CORREO</label>
              <input
                class="form-control  bg-light"
                type="text"
                placeholder="usuario"
                id="user_usuario"
              />
            </div>
            <div class=" mt-3 tamano_imput">
              <label class="form-label text-light">CONTRASEÑA</label>
              <input
                class="form-control bg-light"
                type="password"
                placeholder="contraseña"
                id="user_contrasena"
              />
            </div>
            <div class="mt-4 tamano_imput">
              <button
                class="btn btn-primary w-100  mt-4 fw-semibold shadow-sm"
                type="button"
                onClick={handlelogin}>
                Iniciar sesión
              </button>

            </div>
            <div className='btn'>

        <GoogleLogin
         
          clientId={clientID}
          onSuccess={onSuccess}
          onFailure={onFailure}
          buttonText="Continue  with Google"
          cookiePolicy={"single_host_origin"}
        />

      </div>

      <div class={user ? "profile" : "hidden"}>
        <img src={user.imageUrl} />
        <h3>{user.name}</h3>
  
      </div>
          </form>
        </div>
      </div>
    </div>
  );
}
