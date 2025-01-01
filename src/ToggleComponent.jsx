import React,{useState} from 'react'

const ToggleComponent = () => {

  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(prevIsVisble => !prevIsVisble);
  }





  return (
    <div>
      <button onClick={toggleVisibility}>{isVisible ? 'Hide' : 'Show'}</button>
      
      {
        isVisible && (
          <div>
            <h2>This is the toggled component!</h2>
            <p>You can see this content because the component is visible.</p>
          </div>
        )
      }











    </div>
  )
}

export default ToggleComponent
