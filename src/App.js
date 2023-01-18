import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter.js';

function App() {
  const [ count, setCount ] = useState([0, 1, 4]);

  const increment = (id) => {
    const newCount = [...count];
    newCount[id]++;
    setCount(newCount);
  };

  const decrement = (id) => {
    const newCount = [...count];
    newCount[id]--;
    setCount(newCount);
  };

  const counters = count.map((count, i) => <Counter key={i} id={i} count={count} increment={increment} decrement={decrement} />)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Total Count: {count.reduce((a, b) => a + b)}</h1>
        <img src={logo} className="App-logo" alt="logo" />
        {counters}
      </header>
    </div>
  );
}

export default App;
