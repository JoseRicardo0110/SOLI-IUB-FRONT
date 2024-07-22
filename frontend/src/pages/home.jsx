import Navbar from "../components/navbar/navbar";
import Header from "../components/header/header";
import Carrusel1 from "../components/carrusel1/carrusel1.";
import Parte1 from "../components/parte1/parte1";
import Footer1 from "../components/footer/footer";
import ChatBot from "../components/chat1/CHATBOT";

export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <Carrusel1/>
      <Parte1/>
      <ChatBot/>
      <Footer1/>
    </>
  );
}
