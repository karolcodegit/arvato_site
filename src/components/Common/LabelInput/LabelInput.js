import React from 'react'

const LabelInput = ({label, white}) => {
  return (
    <label
        htmlFor={label}
        className={`text-sm leading-6 tracking-normal font-medium ${white ? 'text-white' : 'text-gray-500'}`}
      >
        {label}
      </label>
  )
}

export default LabelInput