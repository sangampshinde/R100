import React from 'react'

const ProtectedComponent = ({onLogout}) => {
  return (
    <div>
      <h1>Protected Page - You are authenticated!</h1>
      <button type="button" onClick={onLogout}>Logout</button>
    </div>
  )
}

export default ProtectedComponent