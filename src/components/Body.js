import React from 'react'
import "./Body.css";
import { useDataLayerValue } from '../contextapi/DataLayer';
import Header from './Header';
import SongRow from './SongRow';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

function Body({spotifyApi}) {
    const [{discover_weekly}, dispatch] = useDataLayerValue();
    return (
        <div className="body">
            <Header spotifyApi={spotifyApi}/>

            <div className="body-info">
                <img src={discover_weekly?.images[0].url} alt="" />
                <div className="body-infoText">
                    {console.log(discover_weekly)}
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>

            <div className="body-songs">
                <div className="body-icons">
                    <PlayCircleFilledIcon className="body-shuffle" color="green" />
                    <FavoriteIcon fontSize="large" />
                    <MoreHorizIcon />
                </div>
                {/* List of songs */}
                {discover_weekly?.tracks.items.map(item => (
                    <SongRow track={item.track} />
                ))}
            </div>
        </div>
    )
}

export default Body
