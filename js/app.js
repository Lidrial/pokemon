
import { getAllPokemon } from "./modules/pokedex.js";
import { createMap } from "./modules/map.js";
import { createChar, selectNameStarter, Char, placeChar } from "./modules/character.js";
import { movePlayer } from "./modules/move.js";

const btn_game = document.getElementById("btn_game")
const btn_pokedex = document.getElementById("btn_pokedex")
const btn_reset = document.getElementById('reset')
const game = document.getElementById("game")
const pokedex = document.getElementById("pokedex")

let maxY = localStorage.map_sizeY
let maxX = localStorage.map_sizeX

//peut etre faire attendre toute les fonctions aprés selecNameStarter()

selectNameStarter()
createMap()
getAllPokemon()
placeChar()
movePlayer()





//console.log(Char)
console.log(localStorage.pseudo)


export function toggle(){
        game.classList.toggle('is-hidden')
        pokedex.classList.toggle('is-hidden')
}

btn_pokedex.onclick = toggle
btn_game.onclick = toggle

//btn_reset.onclick = localStorage.clear()


