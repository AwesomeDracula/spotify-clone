import React, {useState} from 'react'
import { useDataLayerValue } from '../contextapi/DataLayer'
import { Avatar } from '@material-ui/core';
import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './UserAccount.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function UserAccount() {
    const [{user}, dispatch] = useDataLayerValue();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
        <div className="useraccount">
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret>
                    <div className="useraccount-name">
                        <Avatar src={user?.images[0]?.url} alt="Name" />
                        <h4>{user?.display_name}</h4>
                    </div>
                </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem><span>Tài khoản</span><FontAwesomeIcon icon={faUser}/></DropdownItem>
                    <DropdownItem>Hồ sơ</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem><a href="https://spotify-clone-af0ff.web.app">Đăng xuất</a></DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    )
}

export default UserAccount
