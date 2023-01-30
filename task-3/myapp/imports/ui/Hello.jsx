import React from 'react';

export const Hello = () => {

  const print = () => {
    console.log('Button has been clicked')
  };

  return (
    <div>
      <button onClick={print}>Click Me</button>
    </div>
  );
};
