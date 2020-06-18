import React ,{useContext } from 'react';
import reactContext from './reactcontext'

const Contextchild = () =>{

    let contextValue = useContext(reactContext)
    return(
        
        <div>
        
        <h1>Context value is {contextValue[0]}</h1>
            {/* below line changing context value using useState */}
            <button onClick={()=>{contextValue[1](10)}}>Change value</button>
            
        </div>
 
    )
}

export default Contextchild;