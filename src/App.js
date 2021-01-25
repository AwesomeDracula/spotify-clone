import { useEffect ,useState} from 'react';
import './App.css';
import Login from './login/Login';
import Player from './components/Player';
import { getTokenFromUrl } from './spotifyapi/Spotify';
import SpotifyWebApi from "spotify-web-api-js";
import {useDataLayerValue} from './contextapi/DataLayer';

const spotifyApi = new SpotifyWebApi();

function App() {
  // const [token, setToken] = useState(null);
  const [{user, token}, dispatch] = useDataLayerValue();
  // console.log(useDataLayerValue());

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if(_token){
      dispatch({
        type: 'SET_TOKEN',
        token: _token
      });
      // setToken(_token);

      spotifyApi.setAccessToken(_token);
      spotifyApi.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user
        });
      });

      spotifyApi.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists
        });
      });

      spotifyApi.getPlaylist("3SzuSFG2e1a2sSPqWuohYu").then(response => {
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: response
        })
      })
    }
  }, []);

  return (
    <div className="app">
      {
        token ? (
          <Player spotifyApi={spotifyApi}/>
        ) : (
          <Login />
        )
      }
      

    </div>
  );
}

export default App;
