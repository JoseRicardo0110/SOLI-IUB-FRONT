
import { Navbar, Nav, Container, Image } from "react-bootstrap";
import { Link } from 'react-router-dom';

export default function Navbar3() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className=" bg-body-tertiary">
        <Container>
          <Image src="../picture/IUB.PNG" className="d-block" fluid />
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav class="h4">
              {/* <OverlayTrigger
                placement={"left"}
                overlay={
                  <Tooltip id={`tooltip-left`} >
                    Tooltip on <strong>left</strong>.
                  </Tooltip>
                }
              >
                <Button href="/home" variant="btn btn-outline-primary">Tooltip on</Button>
              </OverlayTrigger> */}

              
              <Nav.Link>
              <Link to="/home">Login</Link>
              </Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
