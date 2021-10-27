import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../Hooks/useAuth/useAuth';


const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoding } = useAuth();
    if (isLoding) {
        return "loading"
    }

    console.log('useAuth', user)
    return (
        <Route {...rest}

            render={({ location }) => user.email ? children
                :
                <Redirect to={{ pathname: "/login", state: { from: location } }}></Redirect>
            }

        >

        </Route>
    );
};

export default PrivateRoute;