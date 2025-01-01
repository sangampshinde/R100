import React from 'react'

const UserCard = ({ name, age }) => {
    

  return (
      <div style={{ border: '2px solid #000', width: '100px', height: '100px', padding: '10px', margin: '5px' }}>
          <h2>{name}</h2>
          <p>Age:{age}</p>
    </div>
  )
}

export default UserCard
