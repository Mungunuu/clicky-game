import React from "react";
import "./style.css";

function PokemonCard(props) {
  return (
    <div className="card" onClick={() => props.selectPokemon(props.id)} >
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default PokemonCard;
