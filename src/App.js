import React, {useEffect, useState} from 'react';
import './App.css';
import Login from './pages/Login/Login.js';
import Player from './pages/Player/Player.js';
import { getTokenFromUrl } from './Spotify';
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);
  // Run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash= "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
      // Gives access token to the Spotify API
      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        console.log(user);
      })
    }
  }, []);

  return (
    // BEM convention
    <div className="app">
      {
        token ? (
          <Player />
          // <Player />
        ) : (
          <Login />
        )
      }
    </div>
  );
}

export default App;
