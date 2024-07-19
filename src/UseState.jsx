import React from 'react';
import { useState } from "react";
import './App.css'


const UseState = () => {

    const [count, setCount] = useState(0)
    console.log(count); 

    const handleIncrement = () => { 
        setCount(count + 1)
    }
    const handleDecrement = () => { 
        setCount(count - 1)
    }
        
    return (
        <div>
        <h1> count:{count}</h1>
            {<button onClick={handleIncrement}>Increment</button>}
            <button onClick={handleDecrement}>Decrement</button>    
        </div>
    )  
}

  

export default UseState;