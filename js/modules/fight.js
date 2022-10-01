import { getAllPokemon } from "./pokedex.js";

const game = document.getElementById('game')
const fightdiv = document.getElementById('fight')
const enemy = document.getElementById('enemy')
const you = document.getElementById('you')

function getRandom(max){
    return Math.floor(Math.random() * max);

}

async function getOnePokemon(){
    let pkmn_sauvageID = getRandom(151)
    console.log('pkmnsauvage', pkmn_sauvageID)
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pkmn_sauvageID}/`)
    let pkmn_sauvage = await response.json()

    localStorage.setItem('pkmn_sauvage_details',JSON.stringify([pkmn_sauvage.name, pkmn_sauvage.moves, pkmn_sauvage.stats, pkmn_sauvage.sprites]))

    console.log('jsonsauvage', pkmn_sauvage);

    return pkmn_sauvage
}

async function getPlayerPokemon(){
    const player_pkmnID = localStorage.starter_pkmn
    let response = await (fetch(`https://pokeapi.co/api/v2/pokemon/${player_pkmnID}/`))
    let player_pkmn = await response.json()

    localStorage.setItem('pkmn_player_details',JSON.stringify([player_pkmn.name, player_pkmn.moves, player_pkmn.stats, player_pkmn.sprites]))

    console.log('jsonplayer', player_pkmn);

    return player_pkmn

}

export async function fight(){
    if ((getRandom(3)) == 0 ){
        fightdiv.classList.toggle('is-hidden')
        document.getElementById('page').classList.toggle('grayscale')
        await getOnePokemon()
        var sauvage_sprites = (JSON.parse(localStorage.getItem('pkmn_sauvage_details')))[3].front_default
        //var sauvage_sprites = (localStorage.pkmn_sauvage_details)[3].front_default
        enemy.innerHTML += '<img src="' + sauvage_sprites + '"' + 'id="sauvage_img">'
        await getPlayerPokemon()
        var player_sprites = (JSON.parse(localStorage.getItem('pkmn_player_details')))[3].back_default
        you.innerHTML += '<img src="' + player_sprites + '"' + 'id="player_img">'


        
        
    }

}