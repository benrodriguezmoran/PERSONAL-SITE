import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap'
export default function Footer() {
    return (
        
        <Navbar as="footer" fixed="bottom" expand="lg" className='p-0'>
            <Container className='bg-secondary rounded-top fw-bold bg-gradient border border-bottom-0 border-primary border-2'>
                <Navbar.Collapse id="" className='justify-content-end'>
                    <Nav as="ul" className="nav-underline text-nowrap p-1">

                        <LinkContainer as="li" to="/contact">
                            <Nav.Link className="text-light" >&gt;EMAIL</Nav.Link>
                        </LinkContainer>

                        <LinkContainer as="li" to="/support">
                            <Nav.Link className="text-light" >&gt;SUPPORT</Nav.Link>
                        </LinkContainer>

                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        
    )
}