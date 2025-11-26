import './style.css'
import { cards } from './cards.js'
import games from './dictionary.js'


document.querySelector('#app').insertAdjacentHTML('beforebegin', `<button id='theme'></button>`)

document.querySelector('#app').insertAdjacentHTML('beforebegin', `<div id='dark'></div>`)

document.querySelector('#theme').addEventListener("click", function(){
    if(document.getElementById("#light")) {
        document.getElementById("#light").remove();
        document.querySelector('#app').insertAdjacentHTML('beforebegin', `<div id='dark'></div>`)
    } else {
        document.getElementById("#dark").remove();
        document.querySelector('#app').insertAdjacentHTML('beforebegin', `<div id='light'></div>`)
    }
})

cards(games, document.querySelector('#app'))
