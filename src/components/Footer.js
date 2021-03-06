import React from 'react';
import "./Footer.css";
import { useDataLayerValue } from '../contextapi/DataLayer';

import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import { Grid, Slider } from '@material-ui/core';

function Footer() {
    const [{playingTrack}] = useDataLayerValue();
    return (
        <div className="footer">
            {!playingTrack && 
            (
                <div className="footer-left">
                    <img className="footer-albumLogo" src="" alt=""/>
                    <div className="footer-songInfo">
                        <h4>Name</h4>
                        <p>Singer</p>
                    </div>
                </div>
            )}
            {playingTrack &&
            (
                <div className="footer-left">
                    <img className="footer-albumLogo" src={playingTrack.src} alt=""/>
                    <div className="footer-songInfo">
                        <h4>{playingTrack.name}</h4>
                        <p>{playingTrack.singer}</p>
                    </div>
                </div>
            )
            }

            <div className="footer-center">
                <ShuffleIcon className="footer-green" />
                <SkipPreviousIcon className="footer-icon" />
                <PlayCircleOutlineIcon fontSize="large" className="footer-icon" />
                <SkipNextIcon className="footer-icon" />
                <RepeatIcon className="footer-green" />
            </div>

            <div className="footer-right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer