const colors = {
  fire: '#FDDFDF',
  grass: '#DEFDE0',
  electric: '#FCF7DE',
  water: 'DEF3FD',
  ground: '#f4e7da',
  rock: '#d5d5d4',
  fairy: '#fceaff',
  poison: '#ae98d7',
  bug: '#f8d5a3',
  dragon: '#97b3e6',
  pcychic: '#eaeda1',
  flying: 'F5F5F5',
  fighting: '#E6E0D4',
  normal: '#F5F5F5',
}

const main_types = Object.keys(colors)

const app = Vue.createApp({
  data() {
    return {
      pokemonName: "",
      type: "",      
      picture: "",
    }
  },
  methods: {
    async getPokemon() {
      const min = 1
      const max = 150
      const pokemon_id = Math.floor(Math.random()*(max + 1 - min )) + min
      

      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon_id}`
      const res = await fetch(url)
      const pokemon = await res.json()
      
      const poke_types = pokemon.types.map(type => type.type.name)
      const type = main_types.find(type => poke_types.indexOf(type) > -1)
      
      this.pokemonName = pokemon.name
      this.type = type
      
      const pokemon_picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`
      this.picture = pokemon_picture
      
      // const color = colors[type]
      // const pokemonEL = document.getElementById('img-container')      
      // pokemonEL.style.background = color
    }
  }
})

app.mount("#app")