import { useState } from 'react'
import FunCompOne from './FunCompOne';
import FunCompTwo from './FunCompTwo';


const ToggleFunc = () => {
    

    const [funcOne, setfuncOne] = useState(false);
    console.log(funcOne);
    const [funcTwo, setfuncTwo] = useState(false);

    return (
        <div className='click'>
            <button onClick={() => setfuncOne(!funcOne)}>First Functional Component </button>
            <button onClick={() => setfuncTwo(!funcTwo)}>Second Function Component </button>

            <div className='subcontainer'>

            {funcOne ? <FunCompOne /> : null}
            {funcTwo ? <FunCompTwo /> : null}
              </div> 
            
        </div>
    );
};

export default ToggleFunc;
