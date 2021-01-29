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
  const [{user, playlists, token, saved_album}, dispatch] = useDataLayerValue();
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
          type: 'SET_CURRENT_PLAYLIST',
          current_playlist: response
        })
      });

      spotifyApi.getMySavedAlbums().then(response => {
        dispatch({
            type: 'SET_SAVED_ALBUM',
            saved_album: response
        })
      });

      spotifyApi.getFollowedArtists().then(response => {
        dispatch({
          type: 'SET_FOLLOWED_ARTISTS',
          followed_artists: response
        })
      })

      spotifyApi.getMySavedShows().then(response => {
        console.log("I have",response);
        dispatch({
          type: 'SET_PODCASTS',
          podcasts: response
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
