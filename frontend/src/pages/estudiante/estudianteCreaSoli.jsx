import NavbarPrueba2 from "../../components/navbar/navbarprueba2";
import Footer1 from "../../components/footer/footer";
import Formulario2 from "../../components/formulario/formulario2";
import Lateral2 from "../../components/navbar/lateral2";
import Lateral3 from "../../components/navbar/lateral3";

export default function EstudianteVeEstadiSolicitud() {
  return (
    <div class="fondoZ">
      <NavbarPrueba2/>
      <div class="todo ">
          <div class=" p-0">
            <Lateral3/>
          </div>
          <div class=" ld ">
            <Formulario2/>
          </div>
      </div>
      <Footer1/>
    </div>
  );
}
