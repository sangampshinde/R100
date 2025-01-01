import React from 'react'

const Profile = ({name,age,location}) => {
  return (
      <div style={{ border: '1px solid #ccc', margin: '5px', padiing: '5px', width:'200px',textAlign:'center' }}>
          <h1>{name}</h1>
          <h2>{age}</h2>
          <h3>{location}</h3>
    </div>
  )
}

export default Profile
