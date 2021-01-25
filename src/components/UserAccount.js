import React from 'react'
import { useDataLayerValue } from '../contextapi/DataLayer'
import { Avatar } from '@material-ui/core';
import './UserAccount.css';

function UserAccount() {
    const [{user}, dispatch] = useDataLayerValue();

    return (
        <div className="useraccount">
            <Avatar src={user?.images[0]?.url} alt="Name" />
            <h4>{user?.display_name}</h4>
        </div>
    )
}

export default UserAccount
