import React from 'react'

const Paragraph = ({children}) => {
  return (
    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
        {children}
    </p>
  )
}

export default Paragraph