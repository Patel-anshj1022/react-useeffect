import './App.css';
import { useEffect } from 'react';
import Pokemon from './pages/pokemon.js';

function App() {
  useEffect(() => {}, []);
  return (
    <div>
      <Pokemon/>
    </div>
  );
}

export default App;