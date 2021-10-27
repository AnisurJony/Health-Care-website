import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';

import useAuth from '../../Hooks/useAuth/useAuth';
import FooterComp from '../../pages/FooterComp/FooterComp';
import './Login.css'
const Login = () => {


    const { signInUsingGoogle, setIsLoading, loginWithEmailAndPassword, setUser } = useAuth();



    const location = useLocation();
    const history = useHistory();

    const redirect_uri = location.state?.from || '/home';

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleEmail = e => {
        setEmail(e.target.value);
    }


    const handlePassword = e => {
        setPassword(e.target.value);
    }


    const handleLoginWithEmailAndPassword = e => {


        loginWithEmailAndPassword(email, password)

            .then(result => {

                setIsLoading(true)
                setUser(result.user);
                history.push(redirect_uri)

            })

            .finally(() => {
                setIsLoading(false)
            })

        e.preventDefault();
    };

    const handleGooleLogin = () => {
        signInUsingGoogle()
            .then(result => {

                setIsLoading(true);
                setUser(result.user);
                history.push(redirect_uri)
            })

            .finally(() => {
                setIsLoading(false)
            })

    };



    return (
        <div className="login-page">

            <div className="login-form">
                <div>
                    <h2 className="header">Login</h2>
                    <br />

                    <form onSubmit={handleLoginWithEmailAndPassword}>
                        <input type="email" className="input-style" onBlur={handleEmail} name="" placeholder="Your Email" />
                        <br />
                        <br />

                        <input type="password" className="input-style" onBlur={handlePassword} name="" placeholder="password" />
                        <br />
                        <br />
                        <input type="submit" className="google-btn" value="Login" />

                    </form>
                    <br />
                    <br />
                    <p>New to Dream Care ? <Link to='/register'>Create Account </Link></p>
                    <div>
                        ------- or -------
                    </div>
                    <button className="google-btn"
                        onClick={handleGooleLogin} >Google Sign In</button>
                </div>
            </div>
            <FooterComp></FooterComp>

        </div>
    );

};

export default Login;