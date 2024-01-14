import React from 'react'
import { IoSettingsOutline } from "react-icons/io5";
import { AiFillHome } from "react-icons/ai";
import { BiPrinter } from "react-icons/bi";
import { FaCarSide, FaUsers, FaKey } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { FcPrint } from "react-icons/fc";
import { IoIosNotificationsOutline, IoMdLogOut } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { RxUpdate } from "react-icons/rx";
import { FcDepartment } from "react-icons/fc";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaTruck } from "react-icons/fa6";
import { FaPager } from "react-icons/fa";
import { FaTrailer } from "react-icons/fa";
import { FaTruckFront } from "react-icons/fa6";
import { LiaPalletSolid } from "react-icons/lia";
import { PiPackage } from "react-icons/pi";
import { GiWeight } from "react-icons/gi";
import { BsCalendar2Date } from "react-icons/bs";









export const HomeIcon = (props) => <AiFillHome {...props} />;
export const SettingsIcon = (props) => <IoSettingsOutline {...props} />;
export const PrintLabelIcon = (props) => <BiPrinter {...props} />;
export const ReprintLabelIcon = (props) => <FcPrint {...props} />;
export const ListTransportIcon = (props) => <FaCarSide {...props} />;
export const UsersIcon = (props) => <FaUsers {...props} />;
export const ProfileIcon = (props) => <ImProfile {...props} />;
export const LogoutIcon = (props) => <IoMdLogOut {...props} />;
export const NotificationIcon = (props) => <IoIosNotificationsOutline {...props} />;
export const UserIcon = (props) => <CiUser {...props}/>
export const UpdateIcon = (props) => <RxUpdate {...props}/>
export const DepartmentIcon = (props) => <FcDepartment {...props}/>
export const KeyIcon = (props) => <FaKey {...props}/>
export const EmailIcon = (props) => <MdOutlineAlternateEmail {...props}/>
export const TruckIcon = (props) => <FaTruck {...props}/>
export const TrailerIcon = (props) => <FaTrailer {...props}/>
export const TruckFrontIcon = (props) => <FaTruckFront {...props}/>
export const PagerIcon = (props) => <FaPager {...props}/>
export const PalletIcon = (props) => <LiaPalletSolid {...props}/>
export const PackageIcon = (props) => <PiPackage {...props}/>
export const WeightIcon = (props) => <GiWeight {...props}/>
export const CalendarIcon = (props) => <BsCalendar2Date {...props}/>



// export const EditIcon = (props) => <MdEdit {...props} />;
// export const DeleteIcon = (props) => <MdDelete {...props} />;
// export const AddIcon = (props) => <MdAddCircle {...props} />;
// export const RemoveIcon = (props) => <MdRemoveCircle {...props} />;