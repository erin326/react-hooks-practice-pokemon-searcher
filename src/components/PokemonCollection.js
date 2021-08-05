import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({searchedPokemon}) {

  // const filteredPokemon = pokemon.filter(obj => {
  //   return obj.name.includes(search)
  // })
  const displayPokemon = searchedPokemon.map(obj => (
    <PokemonCard key={obj.id} id={obj.id} name={obj.name} hp={obj.hp} front={obj.sprites.front} back={obj.sprites.back} />
  ))

  return (
    <Card.Group itemsPerRow={6}>
      <h1>Hello From Pokemon Collection</h1>
      {displayPokemon}

    </Card.Group>
  );
}

export default PokemonCollection;
