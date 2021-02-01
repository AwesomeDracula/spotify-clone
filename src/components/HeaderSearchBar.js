import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import './HeaderSearchBar.css';
import {useDataLayerValue} from '../contextapi/DataLayer';

function HeaderSearchBar({spotifyApi}) {
    const [{searchTermIsExisted}, dispatch] = useDataLayerValue();
    const handleInput = (event) => {
        spotifyApi.search(event.target.value,['album','artist','playlist','track','show','episode'])
        .then(response => {
            if(response.albums.total === 0 && response.artists.total === 0 && response.episodes.total === 0
                && response.playlists.total === 0 && response.shows.total === 0 && response.tracks.total === 0){
                dispatch({
                    type: 'SET_SEARCH_STATUS',
                    searchTermIsExisted: false
                })
            }
            else {
                dispatch({
                    type: 'SET_SEARCH_STATUS',
                    searchTermIsExisted: true
                });
                dispatch({
                    type: 'SET_CURRENT_SEARCH_RESULT',
                    currentAlbumSearchResult: response.albums,
                    currentArtistSearchResult: response.artists,
                    currentEpisodeSearchResult: response.episodes,
                    currentPlaylistSearchResult: response.playlists,
                    currentShowSearchResult: response.shows,
                    currentTrackSearchResult: response.tracks
                })};           
        })
    }
    // console.log('Search object ->',res);
    return (
        <div className="headerSearchBar">
            <SearchIcon />
            <input placeholder="Tìm kiếm bài hát, ca sĩ, album,..." type="text" onKeyUp={handleInput} />
        </div>
    )
}

export default HeaderSearchBar
