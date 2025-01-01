import React from 'react'

const ItemList = () => {

    const items = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

    
  return (
      <div>
          <h2>List of Fruits</h2>
          <ol>
              {items.map((item, index) => (<li key={index}>{item}</li>))}
          </ol>
    </div>
  )
}

export default ItemList
