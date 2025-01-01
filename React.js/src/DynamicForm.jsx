import React,{useState} from 'react'

const DynamicForm = () => {
    const[fields,setFields] = useState([{id:Date.now(),value:''}]);

    const handleChange = (id,event)=> {
      const newField = fields.map((field)=>{
        if(field.id === id){
          return {...field,value:event.target.value}
        }
        return field;
      })
      setFields(newField);
    }

    const handleAddField = ()=>{
      setFields([...fields,{id:Date.now(),value:''}])
    }

    const handleRemoveField = (id) => {
      const newFileds = fields.filter((field)=>
         field.id !== id)
      setFields(newFileds);
    }

    const handleSubmit = (event)=>{
      event.preventDefault();
      console.log('Form submitted:', fields);
    }



  return (
    <div>
      <h1>Dynamic Form Fields</h1>
        <form onSubmit={handleSubmit}>
            {fields.map((field)=>(
              <div key={field.id}>
                <input
                type='text'
                value={field.value}
                onChange={(event)=>handleChange(field.id,event)}
                placeholder='Enter Text'
                required
                />
                <button type="button" onClick={()=>handleRemoveField(field.id)}>Remove</button>
              </div>
            ))}

        <button type="button" onClick={handleAddField}>Add Field</button>
        <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default DynamicForm