import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({name, hp, front, back}) {

  const [pokemonImage, setPokemonImage] = useState(front);

  function handleImageClick() {
    setPokemonImage(pokemonImage => !pokemonImage);
  }
  
  const imageSrc = pokemonImage ? front : back;

  return (
    <Card> 
      <div>
        <div className="image">
          <img src={imageSrc} alt="oh no!" onClick={handleImageClick}/>
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
           {hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
