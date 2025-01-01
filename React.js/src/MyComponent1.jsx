import React from 'react'
import useLocalStorage from './useLocalStorage';

const MyComponent1 = () => {
  const [name, setName] = useLocalStorage('name', 'John Doe');
  
  const handleChange = (event) => {
    setName(event.target.value);
  };


  return (
    <div>
      <div>
          <h1>Hello,{name}!</h1>
          <input type="text" value={name} onChange={handleChange} />
          </div>
    </div>
  )
}

export default MyComponent1
