import React, { useState } from 'react'

const MyForm = () => {

    const[fields,setFields]=useState({
        name:'',
        email:'',
    })

    const handlechange = (event) => { 
        const {name,value} = event.target;
        setFields({
            ...fields,
            [name]:value
        })
    }

    const onSubmit = (event) => {
        event.preventDefault();
        console.log('Form Data Submitted',fields);
        setFields({
            name:'',
            email:''
        })
    }


  return (
    <div>
        <h1>Reset Form Field</h1>
        <form onSubmit={onSubmit}>
            <div>
                <label>Name:</label>
                <input 
                type="text" 
                name='name'
                id='name'
                placeholder='your name'
                value={fields.name}
                onChange={handlechange}
                required
                />
            </div>
            <div>
                <label>Email:</label>
                <input 
                type="email" 
                name='email'
                id='email'
                placeholder='email'
                value={fields.email}
                onChange={handlechange}
                required
                />
            </div>
            <button type='submit'>Submit</button>
            <button type='button' onClick={()=>setFields({name:'',email:''})}>Reset</button>
        </form>
    </div>
  )
}

export default MyForm