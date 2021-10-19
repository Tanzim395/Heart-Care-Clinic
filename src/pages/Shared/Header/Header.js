import React from 'react';
import { Container, Nav, Navbar, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartbeat } from '@fortawesome/free-solid-svg-icons';
import useAuth from '../../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const elementIcon = <FontAwesomeIcon icon={faHeartbeat} />
    const { user, logout, isLoading } = useAuth();
    console.log(user);

    if (isLoading) {
        return <Spinner animation="border" variant="primary" />
    }

    return (
        <div className='pb-2'>
            <Navbar fixed="top" className='text-white ' bg="dark" expand="lg" >
                <Container fluid className="container " >
                    <Navbar.Brand style={{ fontSize: '30px', fontWeight: '700' }} className="text-danger display-2 me-5 " href="#">{elementIcon} Heart Care Clinic</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll"  >
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '150px' }}
                            navbarScroll
                        >
                            <Nav.Link as={HashLink} className="text-white me-3" to='/home#home'>Home</Nav.Link>
                            <Nav.Link as={HashLink} className="text-white me-3" to='/home#services'>Services</Nav.Link>
                            <Nav.Link as={HashLink} className="text-white me-3" to='/home#experts'>Experts</Nav.Link>
                            <Nav.Link as={HashLink} className="text-white me-3" to='/home#faq'>FAQ</Nav.Link>
                            <Nav.Link as={HashLink} className="text-white me-3" to="/home#about">About Us</Nav.Link>

                        </Nav >

                        {user?.email ?
                            <div className='d-flex flex-column flex-lg-row'>
                                <Nav.Link onClick={logout} className="text-white me-2" as={Link} to='/login'>Logout</Nav.Link>
                                <span className='mt-2 text-warning'>Signed in as: {user.displayName}</span>
                            </div>

                            :
                            <div>
                                <Nav.Link className="text-white me-2" as={Link} to='/login'>Login</Nav.Link>

                            </div>


                        }

                        <Nav.Link className="text-white me-2" as={Link} to='/registration'>Sign Up</Nav.Link>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;