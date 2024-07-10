import React from "react";
import {} from "react-bootstrap";
import { useNavigate } from "react-router";
import { sesion } from "../../sesion";

export default function Formulario1() {
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
              <label class="form-label text-light">Usuario</label>
              <input
                class="form-control  bg-light"
                type="text"
                placeholder="usuario"
                id="user_usuario"
              />
            </div>
            <div class=" mt-3 tamano_imput">
              <label class="form-label text-light">Contraseña</label>
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
          </form>
        </div>
      </div>
    </div>
  );
}
