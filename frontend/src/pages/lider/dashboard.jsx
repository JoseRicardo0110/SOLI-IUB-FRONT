import Footer1 from "../../components/footer/footer";
import NavbarPrueba from "../../components/navbar/navbarprueba";
import Lateral1 from "../../components/navbar/lateral1";
import LinesChart from "../../components/graficos/grafico1";
import Lateral3 from "../../components/navbar/lateral3";
import ChatBot from "../../components/chat1/CHATBOT";


export default function Dashboard() {
  return (
    <>
      <NavbarPrueba/>
      <div class="todo ">
        
        <div class=" p-0 lr">
          <Lateral3/>
        </div>
        <iframe title="TABLA SOLICITUDES" width="1200" height="600" src="https://app.powerbi.com/view?r=eyJrIjoiNTI3NGVjYWUtMzE4Yy00OWVhLWIxOTItZDZhMjQyNzNhNzY0IiwidCI6IjFlOWFhYmU4LTY3ZjgtNGYxYy1hMzI5LWE3NTRlOTI0OTlhZSIsImMiOjR9" frameborder="5" allowFullScreen="true"></iframe>
        
      </div>
      <ChatBot/>
      <Footer1/>
    </>
  );
}
