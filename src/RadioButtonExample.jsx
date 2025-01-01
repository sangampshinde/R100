import React, { useState } from 'react'

const RadioButtonExample = () => {
    const [ selectedOption, setSelectedOption ] = useState('');

    const handleChange = (event)=>{
        setSelectedOption(event.target.value);
    }
    const handleSubmit =(event)=>{
        event.preventDefault();
        console.log('Selected Option:', selectedOption);


    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <h2>Select an Option</h2>
            <div>
                <label>
                    <input
                    type='radio'
                    name='options'
                    value='option1'
                    checked={selectedOption==='option1'}
                    onChange={handleChange}
                    />
                    Option 1
                </label>
            </div>
            <div>
                <label>
                    <input
                    type='radio'
                    name='options'
                    value='option2'
                    checked={selectedOption ==='option2'}
                    onChange={handleChange}
                    />
                    Option 2
                </label>
            </div>
            <div>
                <label>
                    <input
                        type="radio"
                        name="options"
                        value="option3"
                        checked={selectedOption === 'option3'}
                        onChange={handleChange}
                    />
                    Option 3
                </label>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default RadioButtonExample