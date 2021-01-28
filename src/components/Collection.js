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

function Collection() {
    let { path } = useRouteMatch();
    return (
        <div className="collection">
            <CollectionHeader />
            <Switch>
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
    console.log(useParams());
  
    return (
      <div>
        {topicId === 'playlists' && <Playlists />}
        {topicId === 'podcasts' && <h3>1</h3>}
        {topicId === 'artists' && <h3>3</h3>}
        {topicId === 'albums' && <h3>4</h3>}
      </div>
    );
  }
