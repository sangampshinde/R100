import React from 'react'
import { useParams } from 'react-router-dom';


const User = () => {
    const { id } = useParams();

  return (
    <div>
        <h2>User Id</h2>
        <h1>UserId:{id}</h1>
    </div>
  )
}

export default User