import React, { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './Navigation.css';

const Navigation = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <Navbar bg='info' style={{ fontWeight: 'bolder' }} className='navbar-container' expand="lg">
            <Navbar.Brand className='ml-5'>Event Fairy</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <li>
                        <Link className='single-link' to='/home'>Home</Link>
                    </li>

                    <li>
                        <Link className='single-link' to='/dashboard'>Dashboard</Link>
                    </li>

                    <li style={{ display: loggedInUser.email ? 'none' : 'block' }}>
                        <Link className='single-link mr-5' to='/login'>Login</Link>
                    </li>

                    <img src={loggedInUser.image} style={{ display: loggedInUser.email ? 'block' : 'none', width: '40px' }} className='ml-5 rounded-circle' alt="" />

            </Nav>

        </Navbar.Collapse>
        </Navbar>
        );
};

export default Navigation;