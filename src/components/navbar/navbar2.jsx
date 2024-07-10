
import {Navbar, Nav, Container, Image} from 'react-bootstrap'
import{cerrar_sesion} from '../../sesion';

export default function Navbar2() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className=" bg-body-tertiary">
      <Container>
      <Image src="../picture/IUB.PNG" className="d-block" fluid/>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav " class="h4">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link href="/estudianteCreaSoli">Crear solicitud</Nav.Link>
            <Nav.Link href="/estudianteVeEstadoSolicitud">Ver estado de solicitud</Nav.Link>
            <Nav.Link href="#Servicios">Historial de solicitudes</Nav.Link>
            <Nav.Link onClick={cerrar_sesion}>Salir</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}
