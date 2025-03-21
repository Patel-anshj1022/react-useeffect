import './App.css';
import React from'react';
import { useEffect , useState} from "react";

function App() {
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(0);

  const fetchPokemon = (os) => {
    let url = `https://pokeapi.co/api/v2/pokemon/?offset=${os}&limit=20`;
    fetch(url)
      .then(res => res.json())
      .then(data => setData(data.results))
      .catch(error => console.log("error fetching", error));
  };

  const handleNext = () => {
    setOffset(prev => prev += 20);
  };

  const handlePrevious = () => {
    setOffset(prev => prev -=20);
  };

  useEffect(() => {
    fetchPokemon(offset);
  }, [offset]);

  return (
    <div>
      <h2>Pokemon Characters</h2>
      <ol>
        {data.map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ol>
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default App;