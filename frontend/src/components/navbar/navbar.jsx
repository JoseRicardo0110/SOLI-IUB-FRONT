
import {Navbar, Nav, Container, Image} from 'react-bootstrap'
import { Link } from 'react-router-dom';

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
          <Nav className="h4 ">
            
            
            
            <Nav.Link><Link className="nav-link text-dark" to="/login">Login</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}
