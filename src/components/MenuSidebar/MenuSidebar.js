import React from 'react'
import { menu } from '../../data/Menu'
import { Link } from 'react-router-dom'

const MenuSidebar = ({toggle}) => {
  return (

    <div className='h-[500px] overflow-y-auto px-5'>
        {menu.map((route) => {
            if (route.showInSidebar) {
            return (
                <div key={route.title} className={`sidebar  ${toggle ? '' : ' '}`}>
                <Link to={route.path} className='flex items-center'>
                    <div className={`${toggle ? '' : 'mr-3'}`}>{route.icon}</div>
                    <div className={`${toggle ? 'hidden' : ''}`}>{route.title}</div>
                </Link>
                </div>
            );
            }
            return null;
        })}
    </div>
  )
}

export default MenuSidebar