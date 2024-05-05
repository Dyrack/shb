import * as React from 'react';
import './App.css';

function App() {
  const [count, setCount] = React.useState(0);
  const [theme, setTheme] = React.useState('theme__white');
  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const toggleTheme = () =>
    theme === 'theme__white'
      ? setTheme('theme__gray')
      : setTheme('theme__white');
  return (
    <div className={`main ${theme}`}>
      <h1 style={{ textAlign: 'center' }}>{count}</h1>
      <div>
        <button className="btn__inc" onClick={increment}>
          +
        </button>
        <button className="btn__dec" onClick={decrement}>
          –
        </button>
      </div>
      <label className="switch">
        <input type="checkbox" onClick={toggleTheme} />
        <span className="slider round"></span>
      </label>
    </div>
  );
}

export default App;
