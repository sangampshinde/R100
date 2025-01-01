import React,{useState} from 'react'

const FormSubmissionExample = () => {

    const[name,setName]=useState('');
    const[age,setAge]= useState('');
    const[submitData,setSubmitData]=useState(null);

    const handleSubmit =(event)=>{
        event.preventDefault();
        setSubmitData({name,age});
        setName('');
        setAge('');
    }

  return (
    <div>
        <h1>Form Submission Example</h1>
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input
                type='text'
                value={name}
                onChange={event=>{setName(event.target.value)}}
                />
            </label>
            <br/>
            <br/>
            <label>
                Age:
                <input
                type='number'
                value={age}
                onChange={event=>{setAge(event.target.value)}}
                />
            </label>
            <br/>
            <br/>
            <button type='submit'>submit</button>
        </form>

        {
            submitData && (
                <div>
                <h2>Submitted Data:</h2>
                <p>Name:{submitData.name}</p>
                <p>Age:{submitData.age}</p>
                </div>
            )
        }
    </div>
  )
}

export default FormSubmissionExample