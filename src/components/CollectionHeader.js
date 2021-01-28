import React from 'react'
import './CollectionHeader.css';
import UserAccount from './UserAccount';
import { Button } from 'reactstrap';
import {
    NavLink,
    useRouteMatch
  } from "react-router-dom";

function CollectionHeader() {
    let { url } = useRouteMatch();
    return (
        <div className="collection-header">
            <div>
                <NavLink exact to={`${url}/playlists`} activeClassName="selected">
                    <Button color="secondary">Playlist</Button>
                </NavLink>
                <NavLink to={`${url}/podcasts`} activeClassName="selected">
                    <Button color="secondary">Podcast</Button>
                </NavLink>
                <NavLink to={`${url}/artists`} activeClassName="selected">
                    <Button color="secondary">Nghệ sĩ</Button>
                </NavLink>
                <NavLink to={`${url}/albums`} activeClassName="selected">
                    <Button color="secondary">Album</Button>
                </NavLink>
            </div>
            <UserAccount />
        </div>
    )
}

export default CollectionHeader;