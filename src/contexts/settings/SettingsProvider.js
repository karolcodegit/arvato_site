import React, { useEffect, useState } from 'react'
import { SettingsContext } from './SettingsContext'

export const SettingsProvider = ({children}) => {
    const [numberOfPacks, setNumberOfPacks] = useState(40)

    const updateNumberOfPacks = (newNumberOfPacks) => {
        setNumberOfPacks(newNumberOfPacks);
    }

    const value = {
        numberOfPacks,
        updateNumberOfPacks
    }
  return (
    <SettingsContext.Provider value={value}>
        {children}
    </SettingsContext.Provider>
  )
}
