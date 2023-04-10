import React, { useContext } from 'react';
import "./navbar.scss";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenOutlinedIcon from '@mui/icons-material/FullscreenOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import { DarkModeContext } from '../../context/darkModeContext';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';

const Navbar = () => {
    const { toggle, darkMode } = useContext(DarkModeContext);

  return (
    <div className='navbar'>
        <div className="wrapper">
            <div className="search">
                <input type="text" placeholder='Search' />
                <SearchOutlinedIcon className="icon" />
            </div>

            <div className="items">
                <div className="item">
                    <LanguageOutlinedIcon className='icon'/>
                    <span>English</span>
                </div>
                <div className="item">
                    {darkMode ? (
                        <LightModeOutlinedIcon className='icon' onClick={toggle}/>
                    ) : (
                        <DarkModeOutlinedIcon className='icon' onClick={toggle}/>
                    )}
                    
                    
                </div>
                <div className="item">
                    <FullscreenOutlinedIcon className='icon'/>
                    
                </div>
                <div className="item">
                    <NotificationsNoneOutlinedIcon className='icon'/>
                    <div className="counter">1</div>
                </div>
                <div className="item">
                    <ChatBubbleOutlineOutlinedIcon className='icon'/>
                    <div className="counter">3</div>
                </div>
                <div className="item">
                    <ListOutlinedIcon className='icon'/>
                    
                </div>
                <div className="item">
                    
                    <img 
                        src="https://images.pexels.com/photos/1009904/pexels-photo-1009904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                        alt="" 
                    />
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar