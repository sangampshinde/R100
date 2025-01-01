import React,{useState} from 'react'

const UserProfile1 = () => {
  const [profile, setProfile] = useState({

    name: 'John Doe',
    address: {
      street: '123 Main St',
      city: 'Anytown',
      state: 'CA',
    },
    preferences: {
      notifications: true,
      theme: 'dark',
    }
  })

  const updateCity = (newCity) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      address: {
        ...prevProfile.address,
        city: newCity,
      },
    }))
  };

  const toggleNotifications = () => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      preferences: {
        ...prevProfile.preferences,
        notifications:!prevProfile.preferences.notifications
      },
    }))
  }




  return (
    <div>
        <div>
          <h1>User Profile</h1>
          <p>Name: {profile.name}</p>
          <p>Address: {profile.address.street}, {profile.address.city}, {profile.address.state}</p>
          <p>Notifications: {profile.preferences.notifications ? 'Enabled' : 'Disabled'}</p>
          <button onClick={() => updateCity('New City')}>Update City</button>
          <button onClick={toggleNotifications}>Toggle Notifications</button>
        </div>
    </div>
  )
}

export default UserProfile1
