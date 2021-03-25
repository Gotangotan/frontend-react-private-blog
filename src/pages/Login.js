import React from 'react';
import { useHistory } from 'react-router-dom';

function Login(){
    const history = useHistory();

    function Login(){
        // gebruiker doorlinken naar Home
history.push('/')
    }
    return(
        <div>
            <p>Dit is een Login page</p>
            <button onClick={Login} type="button">Inloggen</button>
        </div>
    );
}

export default Login;