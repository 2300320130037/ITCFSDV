import React, { useState } from 'react';

function StateHandling() {
  const [counter, setCounter] = useState(20);

  function increaseCounter() {
    setCounter(counter + 10);
  }

  return (
    <div> 
      <h2>Counter value = {counter}</h2>
      <button onClick={increaseCounter}>Increase value</button>
      <button onClick={()=>setCounter(counter-20)}>Decrease value</button>
    </div>
  );
}

export default StateHandling;