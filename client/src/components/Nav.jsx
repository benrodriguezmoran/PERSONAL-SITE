
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap'
export default function Navigate() {
  return (
      <Navbar collapseOnSelect as="header" expand="lg" fixed='top' className='m-0 p-0'>
        <Container className="wrap p-0 bg-secondary shadow bg-gradient border border-primary border-2 rounded-3 wrap">
            <Navbar.Brand className="bg-primary bg-gradient fs-1 fw-bold text-dark shadow p-0 m-0 me-4 px-3 rounded-2"  href='/#'>
              BRODRIGUEZ<span className="fs-5  text-light">.dev</span>
            </Navbar.Brand>
            <Navbar.Toggle className="border-0 mx-3 h-100 p-0" aria-controls="responsive-navbar-nav">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#3392FF" className="bi bi-caret-down-square-fill" viewBox="0 0 16 16"><path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm4 4a.5.5 0 0 0-.374.832l4 4.5a.5.5 0 0 0 .748 0l4-4.5A.5.5 0 0 0 12 6z"/></svg>
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
                
                <LinkContainer active={false}  to="/about">
                  <Nav.Link className="text-light" >/ABOUT</Nav.Link>
                </LinkContainer>
                              
              </Nav>
            </Navbar.Collapse>
          </Container>
      </Navbar>
  );
}