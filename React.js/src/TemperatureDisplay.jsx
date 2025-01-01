import React from 'react'

const TemperatureDisplay = ({ temperature }) => {

    const fahrenheit = (temperature * 9 / 5) + 32;

    
  return (
    <div>
      <h2>Temperature in Fahrenheit: {fahrenheit.toFixed(2)}</h2>
    </div>
  )
}

export default TemperatureDisplay
