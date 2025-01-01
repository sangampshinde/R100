import React,{useState} from 'react'

const MultiInputForm = () => {
    const[formData,setFormData]=useState({
        name:'',
        email:'',
        isChecked:false,
        favoriteColor:''
    });
    const handleChange = (event)=>{
        const{name,value,type,checked}=event.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? 'checked': value
        });
    }

    const handleSubmit = (e)=> {
        e.preventDefault();
        console.log(`form Data submitted:`, formData);

    }



  return (
    <div>
        <form onSubmit={handleSubmit}>
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
            </div>
            <div>
                <label>
                    Subscribe to newsletter::
                    <input
                    type='checkbox'
                    name='isChecked'
                    value={formData.isChecked}
                    onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    Favorite Color:
                    <select
                    name='favoriteColor'
                    value={formData.favoriteColor}
                    onChange={handleChange}
                    >
                        <option value=''>Select a Color</option>
                        <option value='red'>Red</option>
                        <option value='green'>Green</option>
                        <option value='blue'>Blue</option>
                    </select>
                </label>
            </div>
            <button type='submit'>Submit</button>
        </form>
        


    </div>
  )
}

export default MultiInputForm