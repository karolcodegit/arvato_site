import React, { useEffect, useState } from 'react'
import { FaCheck } from "react-icons/fa6";
import { IoIosClose } from "react-icons/io";



const Notification = ({message, addMessage, type, }) => {
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

    
    <div className="fixed top-2 right-0 transform -translate-x-1/2 z-50">
      <div className={`	 rounded-lg overflow-hidden max-w-96 w-full shadow-lg text-white ${type === 'error' ? 'bg-red-500' : 'bg-green-500'}`}>
          <div className='p-4'>
            <div className='flex items-start'>
              <div>
                <FaCheck className='w-6 h-6' />
              </div>
              <div className='flex-1 ml-3'>
                <p>{message}</p>
                {
                  addMessage && (
                    <p>{addMessage}</p>
                  )
                }
              </div>
              <div className='flex shrink-0 ml-4'>
                <button>
                  <IoIosClose />
                </button>

              </div>
            </div>
          </div>
      </div>
      
    </div>
  )
}

export default Notification