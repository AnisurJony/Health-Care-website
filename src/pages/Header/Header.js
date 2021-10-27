import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

import useAuth from '../../Hooks/useAuth/useAuth';
const Header = () => {
    const { user, logOut } = useAuth();
    console.log('new', user.displayName)
    return (
        <div className="nav-container">


            <div className="d-flex align-items-center text-white ms-5">
                <h2 className="company-name">Dream Care Hospital</h2>
            </div>


            <div className="manu">
                <NavLink className="me-2 nav-item rounded text-white py-1 px-3 nav-item" to="/home">Home</NavLink>
                <NavLink className="me-2 nav-item rounded text-white py-1 px-3 nav-item" to="/about">About Us</NavLink>
                <NavLink className="me-2 nav-item rounded text-white py-1 px-3 nav-item" to="/services">Services</NavLink>
                <NavLink className="me-2 nav-item rounded text-white py-1 px-3 nav-item" to="/booknow">Book Now</NavLink>
                <NavLink className="me-2 nav-item rounded text-white py-1 px-3 nav-item" to="/sentinquiry">Send Inquiry</NavLink>



                {user.email && <span style={{ color: "white" }}>Hello {user.displayName} </span>}
                {
                    user.email ? <button onClick={logOut} className="me-2 text-white py-1 px-3 logout">Log Out</button>
                        :
                        <NavLink to="/login" className="me-2 login text-white py-1 px-3 ">Login</NavLink>
                }

            </div>
        </div>
    );
};

export default Header;