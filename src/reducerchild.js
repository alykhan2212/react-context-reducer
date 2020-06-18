import React, { useReducer } from 'react';
import myReducer from './reactreducer'

const Reducerchild = () =>{
    //second parameter of useReducer is default value
    let [state, dispatch] = useReducer(myReducer,10);
    
    return(

        <div>
            <h1>Reducer value is {state} </h1>
            <button onClick={()=>dispatch('DECREMENT')}>-</button>
            <button onClick={()=>dispatch('INCREMENT')}>+</button>
            
        </div>
    )

} 

export default Reducerchild;