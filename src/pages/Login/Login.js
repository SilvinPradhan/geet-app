import React from 'react';
import './Login.css';
import { loginUrl } from '../../Spotify';

function Login() {
    return (
        <div className='login'>
            <img src="https://image.flaticon.com/icons/svg/1040/1040239.svg" alt="Logo" />
            <h1 id="title">Geet</h1>
            <div className="container">
            <h3>Find every songs from top artists their albums from Spotify!</h3>
            </div>
            <a href={loginUrl}><span className="gradient-text">LOGIN WITH GEET</span></a>
        </div>
    )
}

export default Login;
