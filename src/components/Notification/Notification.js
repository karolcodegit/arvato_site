import React, { useEffect, useState } from 'react'

const Notification = ({message, type, }) => {
    const [showNotification, setShowNotification] = useState(false);

    useEffect(() => {
        if(message && type){
            setShowNotification(true);
            const timer = setTimeout(() => {
                setShowNotification(false);
                
            }, 3000)
            return () => clearTimeout(timer);
        }
    }, [message, type, ])

    if(!showNotification) return null;

  return (
    <div className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 py-2 px-4 rounded shadow-lg text-white ${type === 'error' ? 'bg-red-500' : 'bg-green-500'}`}>
      {message}
    </div>
  )
}

export default Notification