import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import './HeaderSearchBar.css';

function HeaderSearchBar() {
    return (
        <div className="headerSearchBar">
            <SearchIcon />
            <input placeholder="Tìm kiếm bài hát, nhạc sĩ, podcast, ..." type="text" />
        </div>
    )
}

export default HeaderSearchBar
