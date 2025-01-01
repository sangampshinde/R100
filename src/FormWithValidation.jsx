import React,{useState} from 'react'

const FormWithValidation = () => {
    const[formData,setFormData]=useState({
        name:'',
        email:'',
        favoriteColor:'',
        isSubscribed:false
    });
    const [error,setError]=useState({});

    const handleChange = (event)=>{
        const{ name,value,type,checked } = event.target;
        setFormData({
            ...formData,
            [name]:type === 'checkbox'? checked:value  
        })
    }
    
    const validate = ()=>{
        const newError = {};
        if(!formData.name){
            newError.name = 'Name is Requried'
        }
        if(!formData.email){
            newError.email = 'Email is Requried'
        }else if(!/\S+@\S+\.+\S/.test(formData.email)){
            newError.email = 'Email is invalid'
        }
        if(!formData.favoriteColor){
            newError.favoriteColor='Favorite color is required'
        }
        return newError;
    }


    const handleSubmit = (event)=>{
        event.preventDefault();
        const validateErrors = validate();
        if(Object.keys(validateErrors).length>0){
            setError(validateErrors);
        }else{
            console.log('Form Data Submitted:', formData);
            setFormData({
                name: '',
                email: '',
                favoriteColor: '',
                isSubscribed: false,
            });
            setError({});
        }
    };

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <h2>Form With Validation</h2>
            <div>
                <label>
                    Name:
                    <input
                    type='text'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    />
                </label>
                {error.name && <p style={{color:'red'}}>{error.name}</p>}
            </div>
            <div>
                <label>
                    Email:
                    <input
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    />
                </label>
                {error.email && <p style={{color:'red'}}>{error.email}</p>}
            </div>
            <div>
                <label>
                    Favorite Color:
                    <select name='favoriteColor' value={formData.favoriteColor} onChange={handleChange}>
                        <option value=''>Select An Option</option>
                        <option value='red'>Red</option>
                        <option value='green'>Green</option>
                        <option value='blue'>Blue</option>
                    </select>
                </label>
                {error.favoriteColor && <p style={{color:'red'}}>{error.favoriteColor}</p>}
            </div>
            <div>
                <label>
                    Subscriber:
                    <input
                    type='checkbox'
                    name='isSubscribed'
                    value={formData.isSubscribed}
                    onChange={handleChange}
                    />
                </label>
            </div>
            <button type='submit'>Submit Form</button>
        </form>
        
    </div>
  )
}

export default FormWithValidation