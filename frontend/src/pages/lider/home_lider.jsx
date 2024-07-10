
import Footer1 from "../../components/footer/footer";
import NavbarPrueba from "../../components/navbar/navbarprueba";
import Lateral3 from "../../components/navbar/lateral3";
import Carrusel3 from "../../components/carrusel1/carrusel3";

export default function Lider() {

  
  return (
    <>
      <NavbarPrueba/>
      <div class="todo">
        
        <div class=" p-0 lr">
          <Lateral3/>
        </div>
        <div class=" p-2">
          <Carrusel3/>
          <div class="row p-5">
          <div class="col-sm-6 mb-3 mb-sm-0">
            <div class="card">
              <div class="card-body colorcito1">
                <h5 class="card-title">Solicitudes Pendientes</h5>
                <p class="card-text">Revisa tus solicitudes pendientes, queremos atender lo antes posible a nuestros estudiantes</p>
                <a href="/asignado_a_ti" class="btn btn-warning">Solicitudes pendientes</a>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">hay solicitudes sin asignar</h5>
                <p class="card-text">Recuerda que puedes elegir una solicitud y darle una respuesta rapidapidamente</p>
                <a href="/Solicitudes_sin_asignar" class="btn btn-danger">tomar solicitud</a>
              </div>
            </div>
          </div>
          </div>
        </div>
        
      </div>
      <Footer1/>
    </>
  );
}
