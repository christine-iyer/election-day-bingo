import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  // const decrement = () => {
  //   setCount(count - 1);
  // };

  return (
    <div>
      <h1>{count}</h1>
      <button style ={{margin: "120px", height: '120px', width: '120px'}}onClick={increment}>+</button>
      {/* <button onClick={decrement}>-</button> */}
    </div>
  );
}

export default Counter;