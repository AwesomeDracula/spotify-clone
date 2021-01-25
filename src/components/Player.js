import React from 'react';
import "./Player.css";
import Sidebar from './Sidebar';
import Body from './Body';
import Footer from './Footer';

function Player({spotifyApi}) {
    return (
        <div className="player">
            <div className='player-body'>
                {/* Sidebar */}
                <Sidebar />
                {/* Body */}
                <Body spotifyApi={spotifyApi}/>
            </div>
            <div>
                {/* Footer */}
                <Footer />
            </div>
        </div>
    )
}

export default Player
