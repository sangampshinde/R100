import React from 'react'
import { Navigate } from 'react-router-dom'


const ProtectedRoute = ({element,isAuthenticated}) => {

  


  return (
  <div>
    {isAuthenticated ? element:<Navigate to="/login"/>}
  </div>
  )
}

export default ProtectedRoute