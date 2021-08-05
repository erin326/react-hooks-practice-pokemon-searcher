import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemon, setPokemon] = useState([]);

  const [search, setSearch] = useState('');

 

  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
    .then(resp => resp.json())
    .then(pokemons => setPokemon(pokemons))
  }, []);

  let displaySearchedPokemon = pokemon.filter(obj => obj.name.includes(search));

  
  // function addPokemon(newPokemon) {
  //   setPokemon([...pokemon, newPokemon]);
  // }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm
      //  addPokemon={addPokemon} 
       />
      <br />
      <Search search={search} setSearch={setSearch}/>
      <br />
      <PokemonCollection  searchedPokemon={displaySearchedPokemon}/>
    </Container>
  );
}

export default PokemonPage;
