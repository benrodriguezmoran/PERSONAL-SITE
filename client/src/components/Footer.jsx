import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap'
export default function Footer() {
    return (
        
        <Navbar as="footer" fixed="bottom" className='p-0'>
            <Container className='bg-secondary rounded-top fw-bold bg-gradient border border-bottom-0 border-primary border-2 justify-content-end'>
                    <Nav as="ul" className="nav-underline text-nowrap p-1">

                        <LinkContainer active={false} as="li" to="/contact">
                            <Nav.Link className="text-light fontsize-7" >&gt;EMAIL</Nav.Link>
                        </LinkContainer>

                        <LinkContainer active={false} as="li" to="/support">
                            <Nav.Link className="text-light" >&gt;SUPPORT</Nav.Link>
                        </LinkContainer>

                    </Nav>
                </Container>
            </Navbar>
        
    )
}