import './App.css';
import React, {  useState } from 'react'


function App() {
    const [state, setstate] = useState(0)
  const handleKeyPress = (event) => {
    if(event.key === 'Space'){
      setstate(state+1)
    }
}
    return (
        <div className='App'>
          <div className='btns'>
            <button type="button" class="btn btn-primary" onClick={()=>setstate(state+1)}>Increment</button>
            <button type="button" class="btn btn-primary" onClick={()=>setstate(state-1)}>Decrement</button>
            
          </div>
            <h1 className='counter' onKeyPress={handleKeyPress} >{state}</h1>
        </div>
    )
}





export default App;