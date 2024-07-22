import React from "react";
import { Image, Carousel } from "react-bootstrap";

export default function Carrusel1() {
  return (
    <>
      <Carousel>
      
      <Carousel.Item>
        <Image src="../picture/sede-iub.jpeg" className="d-block" fluid/>
        <Carousel.Caption>
          <h3>Recuarda estar atento a las notificaciones</h3>
          <p>
            Cada que se realize un cambio en tu solicitud te notificara a tu GMAIL
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  );
}
