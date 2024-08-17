

import Footer1 from "../../components/footer/footer";

import NavbarPrueba from "../../components/navbar/navbarprueba";
import Lateral3 from "../../components/navbar/lateral3";
import ChatBot from "../../components/chat1/CHATBOT";
import Reportes1 from "../../components/reportes/reportes1";


export default function Reportes() {

  
  return (

      <>
        <NavbarPrueba/>
      <div class="todo fondoZ3">
        <div class=" p-0 lr">
          <Lateral3/>
        </div>
        <div class=" ld ">
          <div>
            <Reportes1/>
          </div>
        </div>
        <ChatBot/>
      </div>
      <Footer1/>
      </>
      
    
  );
}
