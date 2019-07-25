import React, { useState } from 'react';

const Counter = () => {
  const [ count, setCount ] = useState(0);

  return (
    <article>
      <button onClick={() => setCount(count - 1)}>-</button>
        <h5>{ count }</h5>
      <button onClick={() => setCount(count + 1)}>+</button>
    </article>
  );
}

export default Counter;
