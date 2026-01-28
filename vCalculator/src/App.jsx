import {useState} from 'react';

function App() {
  let [counter, setCounter ] = useState(10);
  
 

  const addValue = () => {
    if(counter<10){
    setCounter(counter+1);}
     
  }


  return (
    <div style={{ color: 'blue', textAlign: 'center' }}>
      <h1 >Calculator</h1>

      <h2>Counter Value : {counter} </h2>
      <button onClick={addValue}>Increment</button>

      <button onClick={() => setCounter(counter-1)}>Decrement</button>
    </div> 
  )
}

export default App
