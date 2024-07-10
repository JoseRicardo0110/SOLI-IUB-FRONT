import React from "react";
import { Image, Carousel } from "react-bootstrap";

export default function Carrusel3() {
  return (
    <>
      <Carousel>
      <Carousel.Item>
        <Image src="../picture/carrusel-9.jpg" className="d-block" fluid/>
        <Carousel.Caption>
          <h3>Estamos aui para ayudar a uestros estudiantes</h3>
          <p>Los lideres academicos ahora pueden responder solicitudes en el menor tiempo posible</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src="../picture/carrusel-4.jpg" className="d-block" fluid/>
        <Carousel.Caption>
          <h3>Tienes un historial de solicitudes</h3>
          <p>
            esto te ayudará a llevar una trasabilidad de las solicitudes que haz solucionado
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  );
}
