import React,{useState} from 'react'

const CheckboxExample = () => {
  const [isChecked,setIsChecked]=useState(false);

  const handleChange = ()=>{
    setIsChecked(!isChecked);
  }
  return (
    <div>
      <lable>
        <input
        type='checkbox'
        checked={isChecked}
        onChange={handleChange}
        />
        Click Me!
      </lable>
      <p>The CheckBox is {isChecked ? "Checked":"Unchecked"}</p>

    </div>
  )
}

export default CheckboxExample;