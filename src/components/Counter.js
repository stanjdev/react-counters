import React from 'react';

export default function Counter({id, count, increment, decrement}) {
  return (
    <div>
      <h3>Counter {id}: {count}</h3>
      <button onClick={() => increment(id)}>+</button>
      <button onClick={() => decrement(id)}>-</button>
    </div>
  );
};

