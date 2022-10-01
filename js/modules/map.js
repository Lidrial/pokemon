import { Char } from "./character.js";


export function createMap(){

    console.log(localStorage.map_sizeX,localStorage.map_sizeY)

    let maxY = localStorage.map_sizeY
    let maxX = localStorage.map_sizeX

    console.log(maxY,'y')
    console.log(maxX,'x')

    let map = document.getElementById('map');

    let table = document.createElement('table');

    let tableBody = document.createElement('tbody');
    table.appendChild(tableBody);

    for (let i = 0; i < maxX; i++){
        let tr = document.createElement('tr');
        tableBody.appendChild(tr);

        for (let u = 0; u < maxY; u++){
            let td = document.createElement('td');
            td.setAttribute('id', 'x' + `${i}` + ' ' + 'y' + `${u}`)
            tr.appendChild(td);
        }
    }
    map.appendChild(table);
}




