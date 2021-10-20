import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'
const Register = () => {
    return (
        <div className="sign-form">
            <div>
                <h2 className="mb-5 header">Register : Create Account</h2>
                <form onSubmit="">
                    <input type="email" className="input-style" name="" placeholder="Your Email" />
                    <br />
                    <br />
                    <input type="password" className="input-style" name="" placeholder="Your Password" />
                    <br />
                    <br />
                    <input type="password" className="input-style" name="" placeholder="Re-enter Password" />
                    <br />
                    <br />
                    <input type="submit" className="submit-btn" name="" value="Submit" />

                </form>
                <br />
                <br />
                <p>ALready have an account? <Link to="/login">Login</Link></p>
                <div>
                    ----------- or -------------

                </div>
                <br />

                <button className="google-btn">Google Sign In</button>
            </div>
        </div>
    );
};

export default Register;