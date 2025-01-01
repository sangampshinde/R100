import React,{useState} from 'react'

const SelectDropdownExample = () => {
    const[selectOption,setSelectOption]= useState('');

    const handleChange = (event)=>{
        setSelectOption(event.target.value)
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
        console.log(`Select Option:`,selectOption);
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <h2>Select an Option</h2>
            <label>
                <select value={selectOption} onChange={handleChange}>
                    <option value="">Select A Color</option>
                    <option value="red">RED</option>
                    <option value="green">GREEN</option>
                    <option value="blue">BLUE</option>
                    <option value="orange">ORANGE</option>
                </select>
            </label>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default SelectDropdownExample