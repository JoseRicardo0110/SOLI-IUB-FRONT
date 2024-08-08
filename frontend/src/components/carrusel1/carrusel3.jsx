import React from "react";
import { Image, Carousel } from "react-bootstrap";

export default function Carrusel3() {
  return (
    <>
      <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
          <Image src="../picture/carrusel-4.jpg" className="d-block" fluid/>
          </div>
          <Carousel.Caption>
          <h3>Tienes un historial de solicitudes</h3>
          <p>
            esto te ayudará a llevar una trasabilidad de las solicitudes que haz solucionado
          </p>
        </Carousel.Caption>
        </div>
      </div>

      
    </>
  );
}
