import React from 'react'
import Button from '../../Button/Button'

const UserRole = ({roles}) => {
  return (
    <div>
        <Button className='mr-4'>All role</Button>
        {roles.map((role, index) => (
            <Button key={index} className='mr-4'>{role.name}</Button>
        ))}

    </div>
  )
}

export default UserRole