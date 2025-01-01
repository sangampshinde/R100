import React,{useState,useRef} from 'react'

const ControlledUncontrolledExample = () => {

    const[controlledInput,setControlledInput]=useState('');
    const uncontrolledInputRef = useRef(null);

    const handleControlledChange = (event)=>{
        setControlledInput(event.target.value);
    }

    const handleControlledSubmit = (event) => {
        event.preventDefault();
        alert(`Controlled Input: ${controlledInput}`);
    };

    const handleUncontrolledSubmit = (event) => {
        event.preventDefault();
        alert(`Uncontrolled Input: ${uncontrolledInputRef.current.value}`);
      };

  return (
    <div>
        <h1>Controlled vs Uncontrolled Inputs</h1>
        <h2>Controlled Input</h2>
        <form onSubmit={handleControlledSubmit}>
            <label>
            Controlled Input:
            <input
            type='text'
            value={controlledInput}
            onChange={handleControlledChange}
            />
            </label>
            <button type="submit">Submit Controlled</button>
        </form>
        <h2>Uncontrolled Input</h2>
        <form onSubmit={handleUncontrolledSubmit}>
        <label>
            UnControlled Input:
            <input
            type='text'
            ref={uncontrolledInputRef}
            />
            </label>
            <button type="submit">Submit Uncontrolled</button>
        </form>
    </div>
  )
}

export default ControlledUncontrolledExample