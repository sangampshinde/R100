import React from 'react'
import {useNavigate} from "react-router-dom"
const Home1 = () => {
    const navigate = useNavigate();

    const GoToUserProfile = ()=> {
        navigate('/user/1');
    }

  return (
    <div>
    <h1>Home Page</h1>
    <button onClick={GoToUserProfile}>Go to User Profile</button>
    </div>
  )
}

export default Home1