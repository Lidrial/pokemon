import { getAllPokemon } from "./pokedex.js";

const game = document.getElementById('game')
const fightdiv = document.getElementById('fight')
const enemy = document.getElementById('enemy')
const you = document.getElementById('you')

function getRandom(max){
    return Math.floor(Math.random() * max);

}

function getOnePokemon(){
    let pkmn_sauvage = getRandom(151)
    console.log('pkmnsauvage', pkmn_sauvage)
    fetch(`https://pokeapi.co/api/v2/pokemon/${pkmn_sauvage}/`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        localStorage.setItem('pkmn_sauvage_details',JSON.stringify([data.name, data.moves, data.stats, data.sprites]))
        console.log(JSON.parse(localStorage.getItem('pkmn_sauvage_details')))
    })
}

function getPlayerPokemon(){
    const player_pkmn = localStorage.starter_pkmn
    fetch(`https://pokeapi.co/api/v2/pokemon/${player_pkmn}/`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        localStorage.setItem('pkmn_player_details',JSON.stringify([data.name, data.moves, data.stats, data.sprites]))
        console.log(JSON.parse(localStorage.getItem('pkmn_player_details')))
        // console.log(JSON.parse(localStorage.getItem('pkmn_sauvage_details'[3])))

    })

}

export function fight(){
    if ((getRandom(3)) == 0 ){
        fightdiv.classList.toggle('is-hidden')
        document.getElementById('page').classList.toggle('grayscale')
        getOnePokemon()
        var sauvage_sprites = (JSON.parse(localStorage.getItem('pkmn_sauvage_details')))[3].front_default
        //var sauvage_sprites = (localStorage.pkmn_sauvage_details)[3].front_default
        enemy.innerHTML += '<img src="' + sauvage_sprites + '"' + 'id="sauvage_img">'
        getPlayerPokemon()
        var player_sprites = (JSON.parse(localStorage.getItem('pkmn_player_details')))[3].back_default
        you.innerHTML += '<img src="' + player_sprites + '"' + 'id="player_img">'


        
        
    }

}