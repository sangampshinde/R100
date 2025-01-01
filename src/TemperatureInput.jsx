import React from 'react'

const TemperatureInput = ({ temperature, onTemperatureChange }) => {
    
    const handleChange = (e) => {
        onTemperatureChange(e.target.value);
    }

  return (
      <div>
          <label>
          Enter temperature in Celsius:
          <input
                type="number"
                value={temperature}
                onChange={handleChange}
            />
          </label>
    </div>
  )
}

export default TemperatureInput
