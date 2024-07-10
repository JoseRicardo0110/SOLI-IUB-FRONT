import Footer1 from "../../components/footer/footer";
import NavbarPrueba2 from "../../components/navbar/navbarprueba2";

import Carrusel2 from "../../components/carrusel1/carrusel2";
import Lateral2 from "../../components/navbar/lateral2";


export default function Estudiante() {
  return (
    <>
      <NavbarPrueba2/>
      <div class="todo ">
          <div class=" p-0">
              <Lateral2/>
          </div>
          <div class=" ld ">
            <Carrusel2/>
          </div>
      </div>
      <Footer1/>
    </>
  );
}
