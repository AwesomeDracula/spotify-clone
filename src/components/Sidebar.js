import React from 'react'
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from '../contextapi/DataLayer';

function Sidebar() {
    const [{playlists}, dispatch] = useDataLayerValue();

    return (
        <div className="sidebar">
            <img className="sidebar-logo" src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg' alt='' />
            <SidebarOption title='Home' Icon={HomeIcon} />
            <SidebarOption title='Search' Icon={SearchIcon} />
            <SidebarOption title='Your Library' Icon={LibraryMusicIcon} />
            <br />
            <strong className="sidebar-title">PLAYLIST</strong>
            <hr />
            {/* {console.log("I have this playplist:",playlists)} */}
            <div className="userPlaylists">
                {playlists?.items?.map(playlist => (
                    <SidebarOption title={playlist.name} />
                ))}
            </div>
        </div>
    )
}

export default Sidebar
