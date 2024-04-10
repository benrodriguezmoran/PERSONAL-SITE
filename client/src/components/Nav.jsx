
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap'
export default function Navigate() {
  return (
      <Navbar collapseOnSelect as="header" expand="lg" fixed='top' className='m-0 p-0'>
        <Container  className="p-0 bg-secondary shadow bg-gradient border border-primary border-2 rounded-3 wrap">
            <Navbar.Brand className="bg-primary bg-gradient fs-1 fw-bold text-dark shadow p-0 m-0 me-4 px-3 rounded-2"  href='/#'>
              BRODRIGUEZ<span className="fs-5  text-light">.dev</span>
            </Navbar.Brand>
            <Navbar.Toggle className="border-2 mx-2 h-100 p-0 shadow" aria-controls="responsive-navbar-nav">
            <svg alt="expand navigation" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#FFFFFF" className="bi bi-braces" viewBox="0 0 16 16">
              <path d="M2.114 8.063V7.9c1.005-.102 1.497-.615 1.497-1.6V4.503c0-1.094.39-1.538 1.354-1.538h.273V2h-.376C3.25 2 2.49 2.759 2.49 4.352v1.524c0 1.094-.376 1.456-1.49 1.456v1.299c1.114 0 1.49.362 1.49 1.456v1.524c0 1.593.759 2.352 2.372 2.352h.376v-.964h-.273c-.964 0-1.354-.444-1.354-1.538V9.663c0-.984-.492-1.497-1.497-1.6M13.886 7.9v.163c-1.005.103-1.497.616-1.497 1.6v1.798c0 1.094-.39 1.538-1.354 1.538h-.273v.964h.376c1.613 0 2.372-.759 2.372-2.352v-1.524c0-1.094.376-1.456 1.49-1.456V7.332c-1.114 0-1.49-.362-1.49-1.456V4.352C13.51 2.759 12.75 2 11.138 2h-.376v.964h.273c.964 0 1.354.444 1.354 1.538V6.3c0 .984.492 1.497 1.497 1.6"/>
            </svg>
            </Navbar.Toggle>
            <Navbar.Collapse id="navbarSupportedContent" className=''>
              <Nav as="nav" className="navbar-nav nav-underline me-auto fw-bold text-nowrap fs-6 p-1 px-4 " >

                <LinkContainer active={false}  to="/">
                  <Nav.Link className="text-light" >/ROOT</Nav.Link>
                </LinkContainer>
                
                <LinkContainer active={false}  to="/portfolio">
                  <Nav.Link className="text-light" >/PORTFOLIO</Nav.Link>
                </LinkContainer>
                
                <LinkContainer active={false}  to="/gallery">
                  <Nav.Link className="text-light" >/GALLERY</Nav.Link>
                </LinkContainer>
                
                <LinkContainer active={false}  to="/blog">
                  <Nav.Link className="text-light" >/BLOG</Nav.Link>
                </LinkContainer>
                
                {/* <LinkContainer active={false}  to="/about">
                  <Nav.Link className="text-light" >/ABOUT</Nav.Link>
                </LinkContainer> */}
                              
              </Nav>
            </Navbar.Collapse>
          </Container>
      </Navbar>
  );
}