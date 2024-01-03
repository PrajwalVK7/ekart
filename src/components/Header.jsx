import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';

function Header() {
    return (
        <div className='fixed-top '>
            <Navbar expand="lg" className="" bg="primary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/" style={{color:'white'}}><i class="fa-solid fa-cart-shopping me-3"></i>E kart</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link style={{color:'white'}} className='btn border border-light rounded me-3'><Link to='/wishlist' style={{color:'white',textDecoration:'none'}}>Wishlist<Badge bg="secondary"className='ms-1'>5</Badge></Link></Nav.Link>
                            <Nav.Link style={{color:'white'}} className='btn border border-light rounded me-3'><Link to='/cart' style={{color:'white',textDecoration:'none'}}>Cart<Badge bg="secondary"className='ms-1'>5</Badge></Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
