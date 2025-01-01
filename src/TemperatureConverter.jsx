import React, { useState } from 'react';
import TemperatureInput from './TemperatureInput';
import TemperatureDisplay from './TemperatureDisplay';

const TemperatureConverter = () => {
    const [temperature, setTemperature] = useState(0);

    const handleTemperatureChange = (newTemperature) => {
        setTemperature(newTemperature);
    }

  return (
      <div>
          <h1>Temperature Converter</h1>
          <TemperatureInput temperature={temperature} onTemperatureChange={ handleTemperatureChange } />
          <TemperatureDisplay temperature={temperature} />
      </div>
  )
}

export default TemperatureConverter;
