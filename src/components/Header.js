import React from 'react'
import './Header.css'
import {Avatar} from "@mui/material"
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { useSelector } from 'react-redux';
function Header() {
  const user = useSelector((state)=>state.user_info.user);
  return (
    <div className="header">
        <div className='header__left'>
            <Avatar 
            className='header__avatar'
            alt={user?.displayName}
            src={user?.photoURL}            
           />  
            {/* Avatar for logged in user */}
            <AccessTimeIcon/>
            {/* time icon */}
        </div>
        <div className="header__ search">
            <SearchIcon/>
            {/* search icon /*/}
            <input placeholder='search igor programmer'/>
            {/* input */}
        </div>
        <div className="hearder_right">
        <HelpOutlineIcon/>
            {/* help icon */}
        </div>
    </div>
  )
}

export default Header