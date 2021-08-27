const poke_container = document.getElementById('poke-container')
const pokemon_count = 150
const colors = {
  fire: '#FDDFDF',
  grass: '#DEFDE0',
  electric: '#FCF7DE',
  water: 'DEF3FD'
}

const fetchPokemons = async () => {
  for (let i = 1; i <= pokemon_count; i++) {
    await getPokemon(i)
    
  }
}

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`
  const res = await fetch(url)
  const data = await res.json()
  createPokemonCard(data)
}

const createPokemonCard = (pokemon) => {
  const pokemonEL = document.createElement('dev')
  pokemonEL.classList.add('pokemon')

  const pokemonInnerHTML = `
    <div class="img-container">
      <img src="https://pokres.bastionbot.org/images/pokemon/${pokemon.id}.png" alt="">
    </div>
    <div class="info">
      <span class="number">#001</span>
      <h3 class="name">Bulbasaur</h3>
      <small class="type">Type: <span>grass</span></small>
    </div>`
  
  pokemonEL.innerHTML = pokemonInnerHTML
  poke_container.appendChild(pokemonEL)
}

fetchPokemons()