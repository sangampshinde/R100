import React, { useState } from 'react';

const StateArrayExample = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addItem = () => {
    if (inputValue.trim() === '') {
      return;
    }
    setItems(prevItems => [...prevItems, inputValue]);
    setInputValue('');
  };

  const removeItem = (index) => {
    setItems(prevItems => prevItems.filter((ele, i) => {
      return i !== index;
    }));
  };

  return (
    <div>
      <h1>Manage State Array Example</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} 
        placeholder="Add an item..."
      />
      <button onClick={addItem}>Add Item</button>
      <ol>
        {
          items.map((item, index) => (
            <li key={index}>
              {item}
              &nbsp;
              <button onClick={() => removeItem(index)}>Remove Item</button>
            </li>
          ))
        }
      </ol>
    </div>
  );
}
export default StateArrayExample;