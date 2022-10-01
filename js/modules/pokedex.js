import { getPokemon } from "./fiche_pkmn.js";

var maxX = localStorage.map_sizeX
var maxY = localStorage.map_sizeY


let pokedexOffset = 0
let pokedexLimit = 21

export function getAllPokemon(){
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${pokedexLimit}&offset=${pokedexOffset*pokedexLimit}`)
    .then(response => response.json())
    .then(data => {
        console.log(data,"pokemons")
            //for(let i = 0; i < 151; i++){
            for(let i = 0; i < data.results.length; i++){
                //console.log(data)
                let pokemon = data.results[i]
                //console.log(pokemon)
                getPokemon(pokemon.url)
            }
            pokedexOffset += 1
            }
        )
}


window.onscroll = function() {
    if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 1){
        console.log(pokedexOffset)
        console.log("pageoffset",window.pageYOffset + window.innerHeight - 1)
        console.log("docuementoffset",document.body.offsetHeight)
        console.log(window.innerHeight + window.pageYOffset >= document.body.offsetHeight)
        getAllPokemon()
    }
}