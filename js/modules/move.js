import { Char } from "./character.js"
import { fight } from "./fight.js"


    export async function movePlayer(){
        let maxY = localStorage.map_sizeY
        let maxX = localStorage.map_sizeX

        let player = document.getElementById('player')
        let pos = document.getElementById(`x${Char.posX} y${Char.posY}`);
        let move = document.addEventListener('keydown', e => {
            
            console.log('desinfos', Char)
            if((e.key == "z") && (Char.posY > 0)){
                Char.posY -= 1
                pos.innerHTML = ""
                pos = document.getElementById(`x${Char.posX} y${Char.posY}`)
                pos.innerHTML = Char.image
                console.log(pos, "pos")
                fight()
            }

            if((e.key == "s") && (Char.posY < maxY -1)){
                Char.posY += 1
                pos.innerHTML = ""
                pos = document.getElementById(`x${Char.posX} y${Char.posY}`)
                pos.innerHTML = Char.image
                console.log(maxY)
                fight()
            }

            if((e.key == "q") && (Char.posX > 0)){
                Char.posX -= 1
                pos.innerHTML = ""
                pos = document.getElementById(`x${Char.posX} y${Char.posY}`)
                pos.innerHTML = Char.image
                fight()
            }

            if((e.key == "d") && (Char.posX < maxX - 1)){
                Char.posX += 1
                pos.innerHTML = ""
                pos = document.getElementById(`x${Char.posX} y${Char.posY}`)
                pos.innerHTML = Char.image
                fight()
            }
            console.log(e.key)
            console.log(Char)
        })
    }
