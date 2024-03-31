import React from 'react'
import PokemonCard from './PokemonCard'


function PokemonList({ pokemon }) {
  return (
    <>
      {pokemon.map((p) => (
        <div key={p}>
          <PokemonCard url={p} />
        </div>
      ))}
    </>
  )
}

export default PokemonList