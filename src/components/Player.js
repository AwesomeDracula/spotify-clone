import React from 'react';
import "./Player.css";
import { useDataLayerValue } from '../contextapi/DataLayer';
import Sidebar from './Sidebar';
import Body from './Body';
import Home from './Home';
import Search from './Search';
import Footer from './Footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Collection from './Collection';

function Player({spotifyApi}) {
    const [{playlists}, dispatch] = useDataLayerValue();
    return (
        <Router>
            <div className="player">
                <div className='player-body'>
                
                    <Sidebar spotifyApi={spotifyApi}/>
                    <Switch>
                        <Route path="/" exact>
                            <Home />
                            {/* <Body spotifyApi={spotifyApi}/> */}
                        </Route>
                        <Route path="/search">
                            <Search />
                        </Route>
                        <Route path="/collection">
                            <Collection />
                        </Route>
                        {playlists?.items?.map(playlist => (
                            <Route path={"/playlist/"+playlist.name}>
                                <Body spotifyApi={spotifyApi}/>
                            </Route>
                        ))}
                    </Switch>
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        </Router>
    )
}

export default Player
