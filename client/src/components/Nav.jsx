
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap'
export default function Navigate() {
  return (
    // <header>
      <Navbar as="header" expand="lg" fixed='top' className='m-0'>
        <Container as="nav" className="wrap p-0 bg-secondary shadow bg-gradient border border-primary border-2 rounded-3 wrap">
            <Navbar.Brand className="bg-primary bg-gradient fs-1 fw-bold text-dark shadow p-0 m-0 me-4 px-3 rounded-2" href='/#'>
              BRODRIGUEZ<span className="fs-5  text-light">.dev</span>
            </Navbar.Brand>
            <Navbar.Toggle className="bg-primary" aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="navbarSupportedContent" className=''>
              <Nav className="navbar-nav nav-underline me-auto fw-bold text-nowrap fs-6 p-1 px-3" >

               <LinkContainer to="/">
                 <Nav.Link className="text-light" >/ROOT</Nav.Link>
               </LinkContainer>

               <LinkContainer to="/portfolio">
                 <Nav.Link className="text-light" >/PORTFOLIO</Nav.Link>
               </LinkContainer>

               <LinkContainer to="/gallery">
                 <Nav.Link className="text-light" >/GALLERY</Nav.Link>
               </LinkContainer>

               <LinkContainer to="/blog">
                 <Nav.Link className="text-light" >/BLOG</Nav.Link>
               </LinkContainer>

               <LinkContainer to="/about">
                 <Nav.Link className="text-light" >/ABOUT</Nav.Link>
               </LinkContainer>
              

              </Nav>
            </Navbar.Collapse>
          </Container>
      </Navbar>
    // </header>
  );
}