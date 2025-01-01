import React, { useState } from 'react'

const LoginComponent = ({onLogin}) => {
  

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={onLogin}>Login</button>
    </div>
  )
}

export default LoginComponent