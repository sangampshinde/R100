import React,{useEffect} from 'react'

const MyComponent3 = () => {

    useEffect(()=>{
        console.log('Component mounted');
    },[]);

  return (
    <div>
        Hello World!
    </div>
  )
}

export default MyComponent3