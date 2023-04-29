import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../../providers/AuthProvider';

const NavigationBar = () => {
    const { user , logOut} = useContext(AuthContext);

    const handleLogout =()=>{
        logOut()
        .then()
        .catch(error => console.log(error))
    }

    return (
        <Container>
            <Navbar className='my-3' collapseOnSelect expand="lg" bg="bg-transparent" variant="bg-transparent">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav ">
                        <Nav className="mx-auto d-flex justify-content-center align-items-center">
                            <Link to={'/category/0'}>Home</Link>
                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#deets">Career</Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                user && <FaUserCircle className='fs-1' />
                            }
                            {user ?
                                <Button onClick={handleLogout} variant="secondary">LogOut</Button> :
                                <Link to="/login">
                                    <Button variant="secondary">Login</Button>
                                </Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;