import React from 'react'
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from '../contextapi/DataLayer';
import { Link, NavLink } from "react-router-dom";

function Sidebar({spotifyApi}) {
    const [{playlists, current_playlist}, dispatch] = useDataLayerValue();

    const playlistOnClicked = (playlistId) => {
        spotifyApi.getPlaylist(playlistId).then(response => {
            dispatch({
              type: 'SET_CURRENT_PLAYLIST',
              current_playlist: response
            })
          })
    }

    return (
        <div className="sidebar">
            <img className="sidebar-logo" src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg' alt='' />
            <NavLink exact to="/" activeClassName="selected">
                <SidebarOption title='Trang chủ' Icon={HomeIcon} />
            </NavLink>
            <NavLink to="/search" activeClassName="selected">
                <SidebarOption title='Tìm kiếm' Icon={SearchIcon} />
            </NavLink>
            <NavLink to="/collection" activeClassName="selected">
                <SidebarOption title='Thư viện' Icon={LibraryMusicIcon} />
            </NavLink>
            <br />
            <strong className="sidebar-title">PLAYLIST</strong>
            <hr />
            {/* {console.log("I have this playplist:",playlists)} */}
            <div className="userPlaylists">
                {playlists?.items?.map(playlist => (
                    <div onClick={() => playlistOnClicked(playlist.id)}>
                        <Link to={"/playlist/"+playlist.name} >
                            <SidebarOption title={playlist.name} />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Sidebar
