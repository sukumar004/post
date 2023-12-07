import React, { useState } from 'react'
import './counter.css'
import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement,reset,incrementWithInput } from './counterSlice'


function Counter() {
   const count = useSelector((state)=>(state.counter.count))
   const dispatch  = useDispatch()
   const [useIn,setUseIn] = useState(0)
   const addValue = Number(useIn) || 0

   const resetAll = () => {
    setUseIn(0);
    dispatch(reset())
   }
  return (
    <div className="wrap">
        <h1 id="counter">{count}</h1>
        <div className="wrap-btns">
            <button id="increment" onClick={()=>dispatch(increment())}>+</button>
            <button id="decrement" onClick={()=>dispatch(decrement())}>-</button>
           
        </div>
        <input type="text" value={useIn} onChange={(e)=>setUseIn(e.target.value)} />
        <div className="button">
        <button id="reset"  onClick={()=>dispatch(incrementWithInput(addValue))} >Add</button>
        <button id="reset" onClick={resetAll}>Reset</button>
        </div>
       
        
    </div>
  )
}

export default Counter