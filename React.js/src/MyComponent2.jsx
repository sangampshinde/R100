import React, { useEffect } from 'react'

const MyComponent2 = () => {
    useEffect(()=>{
        console.log('Component mounted');

        return () => {
            console.log('Component unmounted');
        };
    },[]);

  return (
    <div>
        <h1>Hello, World!</h1>
    </div>
  )
}

export default MyComponent2