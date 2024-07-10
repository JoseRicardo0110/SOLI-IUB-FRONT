
import {Navbar, Nav, Container, Image} from 'react-bootstrap'
import{cerrar_sesion} from '../../sesion';

export default function Navbar4() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className=" bg-body-tertiary bordillo">
      <Container>
      <Image src="../picture/IUB.PNG" className="d-block"  fluid/>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav " class="h4">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link href="/Solicitudes_sin_asignar" >Solicitudes sin asignar</Nav.Link>
            <Nav.Link href="">Solicitudes pendientes</Nav.Link>
            <Nav.Link href="#Servicios">Solicitudes finalizadas</Nav.Link>
            <Nav.Link href="#Servicios">Asignar solicitudes </Nav.Link>
            <Nav.Link href="#Servicios">Mis solicitudes</Nav.Link>
            <Nav.Link href="#Servicios">Mi historial</Nav.Link>
            <Nav.Link onClick={cerrar_sesion}>Salir</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}
