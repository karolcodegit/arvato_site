import React from 'react'
import HomePage from '../views/HomePage/HomePage'
import PrintLabel from '../views/Apps/PrintLabel';
import ReprintLabel from '../views/Apps/ReprintLabel';
import Profile from '../views/Profile/Profile';
import Settings from '../views/Settings/Settings';
import ListTransport from '../views/ListTransport/ListTransport';
import EditForm from '../components/EditForm/EditForm';
import { IoSettingsOutline } from "react-icons/io5";
import { AiFillHome } from "react-icons/ai";
import { BiPrinter } from "react-icons/bi";
import { FaCarSide, FaUsers } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { FcPrint } from "react-icons/fc";
import Users from '../views/Users/Users';



export const routes = [
    {path: '/', title: 'Home', icon: <AiFillHome />, component: HomePage, showInSidebar: true },
    {path: '/users', title: 'Users', icon: <FaUsers />, component: Users, showInSidebar: true },
    {path: '/printlabel', title: 'Print label', icon: <BiPrinter />, component: PrintLabel, showInSidebar: true },
    {path: '/reprintlabel', title: 'Reprint label', icon: <FcPrint />, component: ReprintLabel, showInSidebar: true },
    {path: '/listTransport', title: 'List transport', icon: <FaCarSide />, component: ListTransport, showInSidebar: true },
    {path: '/listTransport/:id', title: 'Edit transport', icon: <FaCarSide />, component: EditForm, showInSidebar: false},
    {path: '/profile', title: 'Profile', icon: <ImProfile />, component: Profile, showInSidebar: true },
    {path: '/settings', title: 'Settings', icon: <IoSettingsOutline />, component: Settings, showInSidebar: true},
]
