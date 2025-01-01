import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
    const [username,setUserName]=useState('');
    const navigate = useNavigate();


    const handleSubmit = (e)=>{
        e.preventDefault();
        // login logic
        navigate("/dashboard");
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={username} onChange={(e)=>setUserName(e.target.value)}/>
            <button type="submit">Login</button>
        </form>
    </div>
  )
}

export default LoginForm