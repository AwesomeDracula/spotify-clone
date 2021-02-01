import React from 'react';
import './SongRow.css';
import {useDataLayerValue} from '../contextapi/DataLayer';

function SongRow({track}) {
    const [{playingTrack}, dispatch] = useDataLayerValue();
    const handleSongClicked = (event) => {
        dispatch({
            type: 'SET_TRACK',
            playingTrack: {
                src: track.album.images[2].url,
                name: track.name,
                singer: track.artists.map(artist => artist.name).join(", ")
            }
        })
    }
    return (
        <div className="songrow" onClick={handleSongClicked}>
            <img className="songrow-album" src={track.album.images[2].url} alt="" />
            <div className="songrow-info">
                <h1>{track.name}</h1>
                <p>{track.artists.map(artist => artist.name).join(", ")} - {track.album.name}</p>
            </div>
        </div>
    )
}

export default SongRow
