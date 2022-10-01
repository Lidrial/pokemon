//localStorage.clear()
// import { maxY, maxX } from "../app.js";

export var Char


export function selectNameStarter(){
    let maxX = localStorage.map_sizeX
    let maxY = localStorage.map_sizeY
    if(localStorage.getItem('pseudo') === null){
        let name = prompt('Pseudo : ')
        localStorage.setItem('pseudo', name)
        console.log('pseudo enregistré')
    }
    
    if(localStorage.getItem('starter_pkmn') === null){
        let starter = prompt('Choix du starter par N° : ')
        localStorage.setItem('starter_pkmn', starter)
        console.log('Starter choisi')
    }

    if(localStorage.getItem(('map_sizeX') || ('map_sizeY')) === null){
        let X = prompt('Largeur de la map : ')
        let Y = prompt('Hauteur de la map : ')
        localStorage.setItem('map_sizeX', X)
        localStorage.setItem('map_sizeY', Y)
        console.log(`Map de ${X} par ${Y}`)
        console.log('export de x et y',maxX,maxY)

    }

}

export class createChar{
    constructor(pseudo, posX, posY, image, starter) {
        this.pseudo = pseudo
        this.posX = posX
        this.posY = posY
        this.image = image
        this.starter = starter

    }

}

export function placeChar(){
    let maxY = localStorage.map_sizeY
    let maxX = localStorage.map_sizeX
    Char = new createChar(localStorage.pseudo, Math.round(maxX/2), Math.round(maxY/2), '<img id="player" src="assets/player.png">', localStorage.starter_pkmn)

    console.log(Char.posX)
    console.log(Char.posY)
    console.log(Char.image)
    let startPos = document.getElementById(`x${Char.posX} y${Char.posY}`)
    console.log(startPos,'Start pos')
    startPos.innerHTML = Char.image
}









//console.log(Char,"playerszd")



