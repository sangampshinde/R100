import React,{useState} from 'react'

const MyComponent = () => {
  const [user, setUser] = useState({
    name: 'Jhon',
    address: {
      city: 'New York',
      zip: 100011
    }
  });

  const updateCity = (newCity) => {
    setUser(prevUser => ({
      ...prevUser,
      address: {
        ...prevUser.address,
        city: newCity
      }
    }))}

  return (
    <div>
      <h1>{user.name}</h1>
      <p>City: {user.address.city}</p>
      <button onClick={() => updateCity('Los Angeles')}>Change City</button>
    </div>
  )
}

export default MyComponent;
