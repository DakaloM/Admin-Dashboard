import React from 'react';
import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import InventoryIcon from '@mui/icons-material/Inventory';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssessmentIcon from '@mui/icons-material/Assessment';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="top">
            <Link className='routerLink' to={"/"}><span className="logo">DkAdmin</span></Link>
            
        </div>

       

        <div className="center">
            <ul>

                <p className="title">Main</p>
                <li>
                    <DashboardIcon className='icon'/>
                    <span>Dashboard</span>
                </li>
                <p className="title">Lists</p>
                <Link className='routerLink' to="/users">
                    <li>
                        <PersonOutlinedIcon className='icon' />
                        <span>Users</span>
                    </li>
                </Link>
                <Link className='routerLink' to="/products">
                    <li>
                        <InventoryIcon className='icon' />
                        <span>Products</span>
                    </li>
                </Link>
                <li>
                    <CreditCardIcon className='icon' />
                    <span>Orders</span>
                </li>
                <li>
                    <LocalShippingIcon className='icon' />
                    <span>Delivery</span>
                </li>
                <p className="title">Useful</p>
                <li>
                    <AssessmentIcon className='icon' />
                    <span>Stats</span>
                </li>
                <li>
                    <NotificationsNoneOutlinedIcon className='icon' />
                    <span>Notification</span>
                </li>
                <p className="title">Service</p>
                <li>
                    <SettingsSystemDaydreamOutlinedIcon className='icon' />
                    <span>System Health</span>
                </li>
                <li>
                    <PsychologyOutlinedIcon className='icon' />
                    <span>Logs</span>
                </li>
                <li>
                    <SettingsApplicationsIcon className='icon' />
                    <span>Settings</span>
                </li>

                
                
            </ul>

            
        </div>

        <div className="bottom">
            <ul className='userActions'>
                <p className="title">User</p>
                <li>
                    <AccountCircleOutlinedIcon className='icon' />
                    <span>Profile</span>
                </li>
                <li>
                    <LogoutIcon className='icon' />
                    <span>Logout</span>
                </li>
            </ul>
        </div>

        
    </div>
  )
}

export default Sidebar