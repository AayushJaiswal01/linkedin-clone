import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import WorkIcon from '@mui/icons-material/Work';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import { logout } from "./userSlice";
import { useDispatch } from "react-redux";
import { auth } from "./firebase";


const Header = () => {
  const dispatch = useDispatch();

  const logoutHandler = async () => {
    await auth.signOut();
    dispatch(logout());
  };

  return (
    <div className='header'>
        <h1>
        </h1>
      <div className="header_left">
      <img  src={require('./images/linkedin.png')} 
      alt=""  />
     <div className="header_search">
      <SearchIcon/>
      <input type="text" placeholder='Search'/>
    
      </div>
      </div>
      <div className="header_right">
     < HeaderOption title="Home" Icon={HomeIcon}/>
     < HeaderOption title="My Network" Icon={SupervisorAccountIcon}/>
     < HeaderOption title="Jobs" Icon={WorkIcon}/>
     < HeaderOption title="Messaging" Icon={MessageIcon}/>
     < HeaderOption title="Notifications" Icon={NotificationsIcon}/>
     <HeaderOption title="me" avatar={PersonIcon} onClick={
      logoutHandler
     }/>



      </div>


    </div>
  )
}

export default Header