import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth/useAuth';
import './Register.css'
const Register = () => {


    const { signInWithGoogle, createAccountWithGoogle, setUser, setIsLoading, updateName } = useAuth();

    const history = useHistory();
    const location = useLocation();
    const redirect_uri = location.state?.from || "/home";

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleName = e => {

        setName(e.target.value);
    }

    const handleEmail = e => {

        setEmail(e.target.value);
    }

    const handlePassword = e => {

        setPassword(e.target.value);
    }



    const handleRegistration = e => {
        e.preventDefault();
        createAccountWithGoogle(email, password)
            .then(result => {
                setIsLoading(true)
                updateName(name)
                setUser(result.user)
                history.push(redirect_uri)
                console.log(result.user)
            })

            .finally(() => {
                setIsLoading(false)
            })

    }



    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                setIsLoading(true)
                setUser(result.user)
                history.push(redirect_uri)
            }
            )

            .finally(() => {
                setIsLoading(false);
            })
    };

    return (
        <div className="sign-form">
            <div>
                <h2 className="mb-5 header">Register : Create Account</h2>
                <form onSubmit={handleRegistration}>
                    <input type="text" className="input-style" onBlur={handleName} name="" placeholder="Your Name" />
                    <br />
                    <br />
                    <input type="email" className="input-style" onBlur={handleEmail} name="" placeholder="Your Email" />
                    <br />
                    <br />
                    <input type="password" className="input-style" onBlur={handlePassword} name="" placeholder="Your Password" />
                    <br />
                    <br />


                    <input type="submit" className="submit-btn" value="Submit" />

                </form>
                <br />
                <br />
                <p>ALready have an account? <Link to="/login">Login</Link></p>
                <div>
                    ----------- or -------------

                </div>
                <br />

                <button className="google-btn" onClick={handleGoogleLogin}>Google Sign In</button>
            </div>
        </div>
    );
};

export default Register;