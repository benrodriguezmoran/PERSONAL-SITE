
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap'
export default function Navigate() {
  return (
    <Navbar expand="sm" className='navbar-expand-lg bd-navbar fixed-top'>
      <Container className="container-fluid bg-secondary">
          <Navbar.Brand className="navbar-brand bg-primary fs-1 text-dark" href='/#'>
            BRODRIGUEZ<span className="fs-5 text-dark">.dev</span>
          </Navbar.Brand>
          <Navbar.Collapse id="navbarSupportedContent">
            <Nav className="navbar-nav nav-underline me-auto" defaultActiveKey="/">
              <LinkContainer to="/">
                <Nav.Link className="text-light" >/HOME</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link className="text-light" >/ABOUT</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}