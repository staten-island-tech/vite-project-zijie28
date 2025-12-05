import './style.css'
import { cards } from './cards.js'
import games from './dictionary.js'

let mode = 'Light'

document.querySelector('.change_theme').insertAdjacentHTML('afterbegin', `<button id='theme'>${mode}</button>`)

document.querySelector('#app').insertAdjacentHTML('afterbegin', `<div id=selector></div>`)
document.querySelector('#app').insertAdjacentHTML('beforeend', `<div id=game></div>`)


document.querySelector('#theme').addEventListener("click", function(){
    if (document.body.classList.contains("dark")) {
        document.body.classList.add("light");
        document.body.classList.remove("dark");
        mode = 'Dark'
        document.querySelector('#theme').textContent= mode
    } else {
        document.body.classList.add("dark");
        document.body.classList.remove("light");
        mode = 'Light'
        document.querySelector('#theme').textContent= mode
    }
})


cards(games, document.querySelector('#selector'))

