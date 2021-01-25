import React from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import { useDataLayerValue } from '../contextapi/DataLayer';
import UserAccount from './UserAccount';

function Header({spotifyApi}) {
    // const [{user}, dispatch] = useDataLayerValue();
    return (
        <div className="header">
            <div className="header-left">
                <SearchIcon />
                <input placeholder="Search for Artists, Songs, ..." type="text" />
            </div>
            {/* {console.log(user)} */}
            <UserAccount />
        </div>
    )
}

export default Header;