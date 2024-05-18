import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import StoreIcon from '@mui/icons-material/Store';
import GroupsIcon from '@mui/icons-material/Groups';
import { Avatar, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FacebookIcon from '@mui/icons-material/Facebook';

function Header() {
  return <div className="header">
    <div className="header__left">
        <FacebookIcon />
        <div className="header__input">
            <SearchIcon />
            <input type="text" />
        </div>
        
    </div>
    <div className="header__middle">
        <div className="header__option">
            <HomeIcon />
        </div>
        <div className="header__option">
            <OndemandVideoIcon />
        </div>
        <div className="header__option">
            <StoreIcon />
        </div>
        <div className="header__option">
            <GroupsIcon />
        </div>
    </div>
    <div className="header__right">
        <div className="header__info">
            <Avatar />
            <h4>pamchDev</h4>
        </div>

        <IconButton>
            <AddIcon />
        </IconButton>
        <IconButton>
            <MessageIcon />
        </IconButton>
        <IconButton>
            <NotificationsIcon />
        </IconButton>
        <IconButton>
            <ArrowDropDownIcon />
        </IconButton>
    </div>
  </div>;
}

export default Header