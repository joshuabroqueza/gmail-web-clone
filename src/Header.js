import React from 'react';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import { autocompleteClasses, Avatar, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { selectUser, logout } from './features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase';

function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(logout());
    });
  };
  return (
    <div className='header'>
      <div className='header__left'>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src='https://images.macrumors.com/t/QY0KdwbObUzURWrw5C2buSSZseY=/400x0/article-new/2020/10/newgmaillogo.0.jpg?lossy'
          alt=''
        />
      </div>
      <div className='header__middle'>
        <SearchIcon />
        <input type='text' placeholder='Search mail' />
        <ArrowDropDownIcon className='header__inputCaret' />
      </div>
      <div className='header__right'>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <Avatar src={user.photoUrl} onClick={signOut} />
      </div>
    </div>
  );
}

export default Header;
