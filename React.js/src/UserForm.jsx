import React,{useState} from 'react'

const UserForm = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(firstName, lastName, email)
        setFirstName('')
        setLastName('')
        setEmail('')
    }




  return (
      <div>
          <form onSubmit={handleSubmit}>
              <input
                  type="text"
                  value={firstName }
                  onChange={(e) => { setFirstName(e.target.value) }}
                  placeholder ='firstName'
              />
              <input
                  type="text"
                  value={lastName }
                  onChange={(e) => { setLastName(e.target.value) }}
                  placeholder='lastName'
              />
              <input
                  type="email"
                  value={ email}
                  onChange={(e)=>{setEmail(e.target.value)}}
                  placeholder='Email'
              />
              <button type="submit">Submit Form</button>
          </form>
    </div>
  )
}

export default UserForm
