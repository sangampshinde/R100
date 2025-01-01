import React,{ useEffect, useState } from 'react'

const TimerComponent = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(()=>{
        const timerId = setInterval(()=>{
            setSeconds(prevSeconds => prevSeconds + 1);
    },1000);

    return () => {
        clearInterval(timerId);
        console.log('Timer cleaned up');
    };
    },[])


  return (
    <div>
        <h1>Timer: {seconds} seconds</h1>
    </div>
  )
}

export default TimerComponent