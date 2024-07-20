import { useState } from 'react'

const UseState = () => {

    const[count,setCount] = useState(0)
    
    console.log(count); //0
   
    const handelIncrement=()=>{
        setCount(count+1)
    }
    const handelDecrement=()=>{
        setCount(count-1)
    }

  return (
    <div>
       <h1>Count:{count}</h1>
       <button onClick={handelIncrement} >Increment</button>
       <button onClick={handelDecrement} >Decrement</button>
    </div>
  )
}

export default UseState