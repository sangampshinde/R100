import React from 'react'

const DefaultProps1 = ({ name, age }) => {
  return (
      <div>
           <h1>Hello, {name}!</h1>
            <p>Your age is {age}.</p>
    </div>
  )
}

DefaultProps1.defaultProps = {
    name:"peter",
    age:23
}

export default DefaultProps1
