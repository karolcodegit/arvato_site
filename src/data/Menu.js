import React from 'react'
import HomePage from '../views/HomePage/HomePage'
import PrintLabel from '../views/PrintLabel/PrintLabel';
import ReprintLabel from '../views/ReprintLabel/ReprintLabel';
import Profile from '../views/Profile/Profile';
import Settings from '../views/Settings/Settings';
import ListTransport from '../views/ListTransport/ListTransport';
import EditForm from '../components/EditForm/EditForm';

import Users from '../views/Users/Users';
import { DashboardIcon, DocumentIcon, OtherIcon, OrderIcon, ListTransportIcon, PrintLabelIcon, ProfileIcon, ReprintLabelIcon, SettingsIcon, UsersIcon, Documentation } from '../components/Common/Icons/Icons';


export const menu = [
    {
        title: 'Dashboard',
        icon: <DashboardIcon />,
        routes: [
            {path: '/', title: 'Home', component: HomePage, showInSidebar: true },
        ]
    },
    {
        title: 'Users',
        icon: <UsersIcon />,
        routes: [
            {path: '/users', title: 'Users' , component: Users, showInSidebar: true },
        ]
    },
    {
        title: 'Applications',
        icon: <PrintLabelIcon />,
        routes: [
            {path: '/printlabel', title: 'Print label', component: PrintLabel, showInSidebar: true },
            {path: '/reprintlabel', title: 'Reprint label', component: ReprintLabel, showInSidebar: true },
            
        ]
    },
    {
        title: 'Transport',
        icon: <ListTransportIcon />,
        routes: [
            {path: '/listTransport', title: 'List Transport',  component: ListTransport, showInSidebar: true},
            {path: '/listTransport/:id', title: 'Edit transport',  component: EditForm, showInSidebar: false},
        ]
    },
    {
        title: 'Orders',
        icon: <OrderIcon />,
        routes: [
            {path: '/listTransport', title: 'List Transport',  component: ListTransport, showInSidebar: true},
            {path: '/listTransport/:id', title: 'Edit transport',  component: EditForm, showInSidebar: false},
        ]
    },
    {
        title: 'Invoices',
        icon: <DocumentIcon />,
        routes: [
            {path: '/listTransport', title: 'List Transport',  component: ListTransport, showInSidebar: true},
            {path: '/listTransport/:id', title: 'Edit transport',  component: EditForm, showInSidebar: false},
        ]
    },
    {
        title: 'Others',
        icon: <OtherIcon />,
        routes: [
            {path: '/profile', title: 'Profile', component: Profile, showInSidebar: true },
            {path: '/settings', title: 'Settings', component: Settings, showInSidebar: true},
        ]
    },
    {
        title: 'Documentation',
        icon: <Documentation />,
        routes: [
            {path: '/profile', title: 'Profile', component: Profile, showInSidebar: true },
            {path: '/settings', title: 'Settings', component: Settings, showInSidebar: true},
        ]
    }



   
]
