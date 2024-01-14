import React from 'react'
import HomePage from '../views/HomePage/HomePage'
import PrintLabel from '../views/PrintLabel/PrintLabel';
import ReprintLabel from '../views/ReprintLabel/ReprintLabel';
import Profile from '../views/Profile/Profile';
import Settings from '../views/Settings/Settings';
import ListTransport from '../views/ListTransport/ListTransport';
import EditForm from '../components/EditForm/EditForm';

import Users from '../views/Users/Users';
import { HomeIcon, ListTransportIcon, PrintLabelIcon, ProfileIcon, ReprintLabelIcon, SettingsIcon, UsersIcon } from '../components/Common/Icons/Icons';


export const menu = [
    {path: '/', title: 'Home', icon: <HomeIcon />, component: HomePage, showInSidebar: true },
    {path: '/users', title: 'Users', icon: <UsersIcon />, component: Users, showInSidebar: true },
    {path: '/printlabel', title: 'Print label', icon: <PrintLabelIcon />, component: PrintLabel, showInSidebar: true },
    {path: '/reprintlabel', title: 'Reprint label', icon: <ReprintLabelIcon />, component: ReprintLabel, showInSidebar: true },
    {path: '/listTransport', title: 'List Transport', icon: <ListTransportIcon />, component: ListTransport, showInSidebar: true},
    {path: '/listTransport/:id', title: 'Edit transport', icon: <ListTransportIcon />, component: EditForm, showInSidebar: false},
    {path: '/profile', title: 'Profile', icon: <ProfileIcon />, component: Profile, showInSidebar: true },
    {path: '/settings', title: 'Settings', icon: <SettingsIcon />, component: Settings, showInSidebar: true},
]
