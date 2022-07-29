import { useEffect, useState } from 'react';
import './App.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

function App() {
  const [timeSecond, setTimeSecond] = useState(0)
  const [timeMinute, setTimeMinute] = useState(0)
  const [paused, setPaused] = useState(true)
  const [countDownTime, setCountDownTime] = useState(0)
  const [starttimer, setStartimer] = useState(false)
  const [input, setInput] = useState(0)

  useEffect(()=>{
    if(paused === false){
      setTimeout(()=>{
        setTimeSecond(timeSecond+1)
       }, 1000)
       if(timeSecond === 60){
        setTimeMinute(timeMinute+1)
        setTimeSecond(0)
       }
    }

    if(starttimer== true){
      if(countDownTime >= 0){
        setTimeout(()=>{
          setCountDownTime(countDownTime-1)
         }, 1000)
      }
      else{
        setCountDownTime(0)
        setStartimer(false)
      }
      }
      
    
  })

  const pause = () => {
    if(paused === false){
      setPaused(true)
    }
    else{
      setPaused(false)
    }
  }
  const reset = () => {
    setTimeSecond(0)
    setTimeMinute(0)
    setPaused(true)
  }

  const startTimer = () =>{
    setCountDownTime(input)
    setInput(0)
    setStartimer(true)
    
  }

  const stopTimer = () =>{
    if(starttimer === true){
      setStartimer(false)
    }
    else{
      setCountDownTime(0)
    }
  }

  return (
    <div className="App">
      Stopwatch <br></br>
      {timeMinute} : {timeSecond} <br></br>
      <Button variant="contained" onClick={(e)=>pause()}>{paused === true ? "Start" : "Pause"}</Button>
      <Button variant="contained" onClick={(e)=>reset()}>Reset</Button>
      <br></br>
      Count Down Timer <br></br>
      "Enter time in seconds"<br></br>
      <input type="number" onChange={(e) => {setInput(e.target.value)}} value={input}/>
      <br></br>
      <Button variant="contained" onClick={(e) => startTimer()}>Start Timer</Button>
      <br></br>
      Time Left: {countDownTime} <br></br>
      <Button variant="contained" onClick={(e) => stopTimer()}>Stop Timer</Button>
    </div>
  );
}

export default App;
