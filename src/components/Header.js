import React from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import { useDataLayerValue } from '../contextapi/DataLayer';

function Header({spotifyApi}) {
    const [{user}, dispatch] = useDataLayerValue();
    return (
        <div className="header">
            <div className="header-left">
                <SearchIcon />
                <input placeholder="Search for Artists, Songs, ..." type="text" />
            </div>
            {/* {console.log(user)} */}
            <div className="header-right">
                <Avatar src={user?.images[0]?.url} alt="Name" />
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    )
}

export default Header;