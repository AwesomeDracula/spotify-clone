import React from 'react';
import './Collection.css';
import CollectionHeader from './CollectionHeader';
import {
    Switch,
    Route,
    useParams,
    useRouteMatch
  } from "react-router-dom";
import Playlists from './Playlists';
import Albums from './Albums';
import Artists from './Artists';
import Podcasts from './Podcasts';

function Collection() {
    let { path } = useRouteMatch();
    return (
        <div className="collection">
            <CollectionHeader />
            <Switch>
                <Route exact path={path}>
                    <Playlists />
                </Route>
                <Route path={`${path}/:topicId`}>
                    <Topic />
                </Route>
            </Switch>
        </div>
    )
}

export default Collection;

function Topic() {
    // The <Route> that rendered this component has a
    // path of `/topics/:topicId`. The `:topicId` portion
    // of the URL indicates a placeholder that we can
    // get from `useParams()`.
    let { topicId } = useParams();
    // console.log(useParams());
  
    return (
      <div>
        {topicId === 'playlists' && <Playlists />}
        {topicId === 'podcasts' && <Podcasts />}
        {topicId === 'artists' && <Artists />}
        {topicId === 'albums' && <Albums />}
      </div>
    );
  }
