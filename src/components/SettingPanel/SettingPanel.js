import React from 'react'
import Title from '../Common/Title/Title'
import { IoClose } from 'react-icons/io5'

const SettingPanel = ({isSettingsOpen, setIsSettingsOpen}) => {
  return (
    <div>
      <div className={`fixed top-0 right-0 bottom-0 h-full w-64 bg-white p-4 transition-transform transform ${isSettingsOpen ? 'translate-x-0' : 'translate-x-full'} z-50`}>
        <IoClose className="cursor-pointer" onClick={() => setIsSettingsOpen(false)} /> {/* dodaj ikonę "x" */}
        <Title tag="h3">Settings</Title>
      </div>
    </div>
  )
}

export default SettingPanel