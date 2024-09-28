import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 let[num, setNum]= useState(0)
function AddCount(){
  console.log(num)
  setNum(num+1)
}
function lessCount(){
  console.log(num)
  if(num>0){
    setNum(num-1)
  }
}
  return (
    <>
    <h1>Counter {num}</h1>
    <button onClick={AddCount}>Add</button> 
    <button onClick={lessCount}>Subtract</button>
    </>
      
  )
}

export default App
