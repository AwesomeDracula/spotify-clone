import React from 'react'
import "./Body.css";
import { useDataLayerValue } from '../contextapi/DataLayer';
import Header from './Header';
import SongRow from './SongRow';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

function Body({spotifyApi}) {
    const [{current_playlist}, dispatch] = useDataLayerValue();
    return (
        <div className="body">
            <Header/>

            <div className="body-info">
                <img src={current_playlist?.images[0].url} alt="" />
                <div className="body-infoText">
                    {/* {console.log(current_playlist)} */}
                    <strong>PLAYLIST</strong>
                    <h2>{current_playlist?.name}</h2>
                    <p>{current_playlist?.description}</p>
                </div>
            </div>

            <div className="body-songs">
                <div className="body-icons">
                    <PlayCircleFilledIcon className="body-shuffle" color="green" />
                    <FavoriteIcon fontSize="large" />
                    <MoreHorizIcon />
                </div>
                {/* List of songs */}
                {current_playlist?.tracks.items.map(item => (
                    <SongRow track={item.track} />
                ))}
            </div>
        </div>
    )
}

export default Body
