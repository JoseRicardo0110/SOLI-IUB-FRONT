import Footer1 from "../../components/footer/footer";
import NavbarPrueba from "../../components/navbar/navbarprueba";
import Lateral1 from "../../components/navbar/lateral1";
import LinesChart from "../../components/graficos/grafico1";
import Lateral3 from "../../components/navbar/lateral3";


export default function Dashboard() {
  return (
    <>
      <NavbarPrueba/>
      <div class="todo ">
        
        <div class=" p-0 lr">
          <Lateral3/>
        </div>
        <div class=" p-5">
          <div class="row">
            <div class="col-6">
                  <p className="m-2"><b>Ejemplo #1: </b>Gráfico de líneas básico</p>
                  <div className="bg-light mx-auto px-2 ms-5 mt-3 mb-5 border border-2 border-primary" style={{width:"500px", height:"230px"}}>
                      <LinesChart/>
                  </div>
              </div>
              <hr className="mt-3 mb-2"/>
              <div class="col-6">
                  <p className="m-2"><b>Ejemplo #2: </b>Gráfico de barras</p>
                  <div className="bg-light mx-auto px-2  ms-5 mt-3 mb-5 border border-2 border-primary" style={{width:"500px", height:"225px"}}>
                      
                  </div>
              </div>
          </div>
        </div>
        
      </div>
      <Footer1/>
    </>
  );
}
