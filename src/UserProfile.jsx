import React, { useState } from 'react'

const UserProfile = () => {

  const [userProfile, setUserProfile] = useState({
    personalInfo: {
      name: 'John Doe',
      age: 30,
      address: {
        street:'123 Main St',
        city:'Anytown',
        zip:'12345'
      },
      preferences: {
        theme: 'dark',
        notifications: true
      }
    }
    
  })
  return (
    <div>
      
    </div>
  )
}

export default UserProfile
