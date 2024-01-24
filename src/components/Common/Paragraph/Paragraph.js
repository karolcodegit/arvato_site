import React from 'react'

const Paragraph = ({children, className, textSize, fontBold}) => {
  return (
    <p className={`block font-sans ${textSize ? textSize : 'text-sm'} antialiased ${fontBold? fontBold : 'font-normal'} leading-normal text-blue-gray-900 ${className}`}>
        {children}
    </p>
  )
}

export default Paragraph