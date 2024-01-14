import React from 'react'
import Title from '../Title/Title'

const Logo = ({toggleSidebar,toggle }) => {
  return (
    <div className={`flex items-center ${toggleSidebar ? 'flex ' : 'flex-col justify-center py-4'}`}>
        <img
            className="w-10 h-10 mx-auto mb-4"
            src="https:tailwindui.com/img/logos/mark.svg?color=indigo&amp;shade=500"
            alt="Your Company"
        />
        <Title tag="h3" className={`${toggle ? 'text-sm' : ''}`}>CodeCraft</Title>
    </div>
  )
}

export default Logo