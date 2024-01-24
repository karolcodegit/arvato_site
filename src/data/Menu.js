import React from "react";
import HomePage from "../views/HomePage/HomePage";
import PrintLabel from "../views/PrintLabel/PrintLabel";
import ReprintLabel from "../views/ReprintLabel/ReprintLabel";
import Profile from "../views/Profile/Profile";
import Settings from "../views/Settings/Settings";
import EditForm from "../components/EditForm/EditForm";
import Report from "../views/Report/Report";
import Users from "../views/Users/Users";
import {
  DashboardIcon,
  DocumentIcon,
  OtherIcon,
  OrderIcon,
  ListTransportIcon,
  PrintLabelIcon,
  UsersIcon,
  Documentation,
  ReportIcon,
} from "../components/Common/Icons/Icons";
import CreateTicket from "../views/CreateTicket/CreateTicket";
import Statistics from "../views/Statistics/Statistics";
import ListTransportOutbound from "../views/ListTransport/ListTransportOutbound";
import ListTransportInbound from "../views/ListTransport/ListTransportInbound";

export const menu = [
  {
    title: "Dashboard",
    icon: <DashboardIcon />,
    routes: [
      { path: "/", title: "Home", component: HomePage, showInSidebar: true },
    ],
  },
  {
    title: "Users",
    icon: <UsersIcon />,
    routes: [
      { path: "/users", title: "Users", component: Users, showInSidebar: true },
    ],
  },
  {
    title: "Applications",
    icon: <PrintLabelIcon />,
    routes: [
      {
        path: "/printlabel",
        title: "Print label",
        component: PrintLabel,
        showInSidebar: true,
      },
      {
        path: "/reprintlabel",
        title: "Reprint label",
        component: ReprintLabel,
        showInSidebar: true,
      },
    ],
  },
  {
    title: "Transport",
    icon: <ListTransportIcon />,
    routes: [
      {
        path: "/listTransportOutbound",
        title: "Outbound",
        component: ListTransportOutbound,
        showInSidebar: true,
      },
      {
        path: "/listTransportOutbound/:id",
        title: "Edit transport",
        component: (props) => <EditForm {...props} type="outbound" />,
        showInSidebar: false,
      },
      {
        path: "/listTransportInbound",
        title: "Inbound",
        component: ListTransportInbound,
        showInSidebar: true,
      },
      {
        path: "/listTransportInbound/:id",
        title: "Edit transport",
        component: (props) => <EditForm {...props} type="inbound" />,
        showInSidebar: false,
      },
    ],
  },
  {
    title: "Orders",
    icon: <OrderIcon />,
    routes: [],
  },
  {
    title: "Invoices",
    icon: <DocumentIcon />,
    routes: [],
  },
  {
    title: "Others",
    icon: <OtherIcon />,
    routes: [
      {
        path: "/profile",
        title: "Profile",
        component: Profile,
        showInSidebar: true,
      },
      {
        path: "/settings",
        title: "Settings",
        component: Settings,
        showInSidebar: true,
      },
    ],
  },
  {
    title: "Documentation",
    icon: <Documentation />,
    routes: [
      {
        path: "/profile",
        title: "Profile",
        component: Profile,
        showInSidebar: true,
      },
      {
        path: "/settings",
        title: "Settings",
        component: Settings,
        showInSidebar: true,
      },
    ],
  },
  {
    title: "Support",
    icon: <ReportIcon />,
    routes: [
      {
        path: "/reports",
        title: "Reports",
        component: Report,
        showInSidebar: true,
      },
      {
        path: "/create_ticket",
        title: "Create a ticket",
        component: CreateTicket,
        showInSidebar: true,
      },
      {
        path: "/statistics",
        title: "Statistics",
        component: Statistics,
        showInSidebar: true,
      },
    ],
  },
];
