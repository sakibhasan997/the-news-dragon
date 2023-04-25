import React from 'react';
import logo from '../../../../public/assets/logo.png';
import moment from 'moment';
import { Button } from 'react-bootstrap';
import { Nav, Container, NavDropdown, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";


const Header = () => {
    return (
        <Container>
            <div className="text-center">
                <img className='my-3' src={logo} alt="" />
                <p className='text-secondary'><small>Journalism Without Fear or Favour</small></p>
                <p>{moment().format("dddd, MMMM, D, YYYY")}</p>
            </div>
            <div className='d-flex bg-light p-3 rounded my-3'>
                <Button className='' variant="danger">Latest</Button>
                <Marquee speed={50}>
                    Match Highlights: Germany vs Spain — as it happened   !  Match Highlights: Germany vs Spain as.................

                </Marquee>
            </div>
            <Navbar className='my-3' collapseOnSelect expand="lg" bg="bg-transparent" variant="bg-transparent">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#features">Home</Nav.Link>
                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#deets">Career</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deet">Profile</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                            <Button variant="secondary">Login</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;