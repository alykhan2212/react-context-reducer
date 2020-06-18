import React from 'react';
import Contextchild from './contextchild';
import Reducerchild from './reducerchild';

const Parent = () => {

    return(
        <div>

        <Contextchild/>
        <Reducerchild/>
         
        </div>
    )

}

export default Parent;
