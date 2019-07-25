import React, { useState } from 'react';

const Toggle = () => {
  const [ toggle, setToggle ] = useState(false);

  return (
    <article>
      <button onClick={() => setToggle(prevState => !prevState)}>
        { toggle ? 'False' : 'True' }
      </button>
    </article>
  );
}

export default Toggle;
