import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className=" footer-style">
            <div className="d-flex justify-content-around ">
                <div>
                    <h2>Dream Care</h2>
                    <p>dreamcare@hospital.com</p>
                    <p>+88001704568952</p>
                    <p>bannani,dhaka</p>

                </div>
                <div>
                    <h3>Talk to us</h3>
                    <hr />
                    <p>About us</p>
                    <p>Registration</p>
                    <p>Blog</p>
                    <p>Contract</p>
                </div>
                <div>
                    <h3>Support</h3>
                    <hr />
                    <p>Documantation</p>
                    <p>FAQs</p>
                    <p>Conditions</p>

                </div>
                <div>
                    <h3>Newsletter</h3>
                    <hr />
                    <h5>Get our offers & News in your inbox</h5>
                    <input type="email" placeholder="Enter email" />
                    <input type="submit" value="subscribe" />

                </div>

            </div>
            <small>&copy; Coppy Right to parkland </small>
        </div>
    );
};

export default Footer;