import React, { useEffect, useState } from 'react'
import { AppThemeContext } from './AppThemeContext'

const AppThemeProvider = ({children}) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light') // default theme
  const [loading, setLoading] = useState(true);
  const toggleTheme = () => {
    
    setTheme(prevTheme => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light'
      localStorage.setItem('theme', newTheme)
      return newTheme;
    })
  }

  useEffect(() => {
    const root = document.getElementById('root');
    root.className = theme === 'dark' ? 'dark' : '';
    setLoading(false);
  }, [theme]);

  if (loading) {
    return <div>Loadding...</div>
  }

  return (
    <AppThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </AppThemeContext.Provider>
  )
}

export default AppThemeProvider