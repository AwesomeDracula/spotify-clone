import React from 'react'
import './Header.css';
import UserAccount from './UserAccount';
import HeaderSearchBar from './HeaderSearchBar';

function Header() {
    return (
        <div className="header">
            <HeaderSearchBar />
            <UserAccount />
        </div>
    )
}

export default Header;