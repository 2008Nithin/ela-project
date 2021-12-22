import { useState } from 'react';
import './App.css';
import Characters from './Components/Characters.js';
import Conflict from './Components/Conflict.js';
import Navbar from './Components/Navbar.js';

function App() {
  let [screen, setScreen] = useState(0);
  let [back, setBack] = useState();
  let value;
  if (screen === 0) {
    value = (
      <div className='home-holder'>
        <h1>Theme: It is better to do something than nothing.</h1>
        <button
          className='button-change'
          onClick={() => {
            setScreen(1);
          }}
        >
          Character
        </button>
        <button
          className='button-change'
          onClick={() => {
            setScreen(2);
          }}
        >
          Conflict
        </button>
      </div>
    );
  } else if (screen === 1) {
    value = <Characters />;
  } else if (screen === 2) {
    value = <Conflict />;
  }
  return (
    <div className='App'>
      <Navbar setTheScreen={setScreen} />
      <div className='below-app'>
        <div className='home-screen'>{value}</div>
      </div>
    </div>
  );
}

export default App;
