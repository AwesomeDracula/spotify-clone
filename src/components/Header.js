import React from 'react'
import './Header.css';
import UserAccount from './UserAccount';
import HeaderSearchBar from './HeaderSearchBar';

function Header({spotifyApi}) {
    return (
        <div className="header">
            <HeaderSearchBar spotifyApi={spotifyApi}/>
            <UserAccount />
        </div>
    )
}

export default Header;