import React,{useState} from 'react'

const ControlledForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleform =(event)=>{
      event.preventDefault();
      console.log(`form submitted:`,{name,email,phone})
    }

  return (
    <div>
        <form onSubmit={handleform}>
            <label>
                Name:
                <input
                type='text'
                value={name}
                onChange={(event)=>setName(event.target.value)}
                />
            </label>
            <label>
                Email:
                <input
                type='email'
                value={email}
                onChange={(event)=>setEmail(event.target.value)}
                />
            </label>
            <label>
                Phone:
                <input
                type='number'
                value={phone}
                onChange={(event)=>setPhone(event.target.value)}
                />
            </label>
            <br/>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default ControlledForm;