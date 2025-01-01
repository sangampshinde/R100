import React, { useState } from 'react';


const TwoWayDataBinding = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };




  return (
    <div>
      <p>You Typed:{inputValue}</p>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder='You Type....'
      />
    </div>
  )
}

export default TwoWayDataBinding
