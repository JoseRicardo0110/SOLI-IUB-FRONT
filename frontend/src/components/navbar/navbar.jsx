
import {Navbar, Nav, Container, Image} from 'react-bootstrap'

export default function navbar() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className=" bg-body-tertiary ">
      <Container>
      <Image src="../picture/IUB.PNG" className="d-block" fluid/>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav className="h4">
            <Nav.Link href="/home">Inicio</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}
