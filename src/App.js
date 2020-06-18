import React , {useState} from 'react';
import './App.css';
import reactContext from './reactcontext'
import Parent from './parent';

function App() {
 //we can also pass value directly to Provider but child cant change the value
 //we use useState To change parent state value from child 
 let conterState = useState(100);

  return (
    
    <reactContext.Provider value={conterState}>
    <div className="App">

      <Parent/>
    
    </div>
    </reactContext.Provider>
  );
} 

export default App;
