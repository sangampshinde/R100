import React from 'react'

const DefaultProps = ({name="sangam",age=25}) => {
  return (
      <div>
          <h1>Hello, {name}!</h1>
          <p>Your age is {age}.</p>
    </div>
  )
}

export default DefaultProps
