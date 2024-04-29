
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap'
export default function Navigate() {
  return (
      <Navbar collapseOnSelect as="header" expand="lg" fixed='top' className='m-0 p-0'>
        <Container  className="p-0 bg-secondary shadow rounded-3 wrap">
            <Navbar.Brand className="bg-primary bg-gradient fs-1 fw-bold text-dark shadow p-0 m-0 me-4 px-3 rounded-2"  href='/#'>
              BRODRIGUEZ<span className="fs-5  text-light">.dev</span>
            </Navbar.Brand>
            <Navbar.Toggle className="border-2 mx-2 h-100 p-0 shadow" aria-controls="responsive-navbar-nav">
            <svg alt="expand navigation" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#FFFFFF" className="bi bi-braces" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
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
                
                <LinkContainer active={false}  to="/bio">
                  <Nav.Link className="text-light" >/BIO</Nav.Link>
                </LinkContainer>
                              
              </Nav>
            </Navbar.Collapse>
          </Container>
      </Navbar>
  );
}