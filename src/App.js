import React, { Component } from 'react';
import PokemonCard from "./components/PokemonCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import pokemons from "./pokemons.json";
var shuffle = require('shuffle-array')
var score = 0;
var highScore = 0;
var selectedPokemons = new Set();
console.log(selectedPokemons)


shuffle(pokemons)
class App extends Component {

  state = {
    pokemons
  };

  selectPokemon = id => {
    shuffle(pokemons)
    
    if(selectedPokemons.has(id)) {
      if(highScore < score) {
          highScore = score
      }
      score=0
      selectedPokemons.clear()
    } else {
      score ++;
      selectedPokemons.add(id)

    }

    this.setState({ pokemons});
  };

  render() {
    return (
      <Wrapper>
              <Title score={score} highScore={highScore}>Header</Title>
              {this.state.pokemons.map(pokemon => (

                <PokemonCard
                  selectPokemon={this.selectPokemon}
                  id={pokemon.id}
                  image={pokemon.image}
                />
              ))}

      </Wrapper>
    );
  }
}

export default App;  
