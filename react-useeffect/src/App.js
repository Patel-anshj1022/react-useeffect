import './App.css';
import React from'react';
import { useEffect , useState} from "react";
const Pokemon = () => {
    const [data, setData] = useState([])
    const[url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/?offset=${os}&limit=20")

    const fetchPokemon = () => {
        fetch(url)
        .then(res => res.json())
        .then(data => setData(data.results))
        .catch(error => console.log("error fetching", error))
    }
    const handleNext = () =>{}
    const handlePrevious = () =>{}





    useEffect (() => {
        fetchPokemon()
    }, [] )
    return(
        <div>
             <h2>Pokemon Characters</h2>
            <ol>
                {data.map((pokemon, index) => (
                    <li
                        key={index}>{pokemon.name}  {/* this will display the names */}
                        {/*URL = {pokemon.url} {/* this will display the URL */}                 
                </li>
                ))}
            </ol>
            <button onClick={handlePrevious}>Previous</button>
            <button onClick={handleNext}>Next</button>
        </div>
    );
}

export default Pokemon;