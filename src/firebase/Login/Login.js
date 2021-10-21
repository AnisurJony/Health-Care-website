import React from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth/useAuth';
import FooterComp from '../../pages/FooterComp/FooterComp';
import './Login.css'
const Login = () => {


    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/services';


    const handleGooleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                console.log(result.user)
                history.push(redirect_uri)
            })

    }
    return (
        <div className="login-page">

            <div className="login-form">
                <div>
                    <h2 className="header">Login</h2>
                    <br />

                    <form >
                        <input type="email" className="input-style" name="" placeholder="Your Email" />
                        <br />
                        <br />

                        <input type="password" className="input-style" name="" placeholder="password" />
                        <br />
                        <br />
                        <input type="submit" className="google-btn" name="" value="submit" />

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