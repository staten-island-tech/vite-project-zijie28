import './style.css'
import { cards } from './cards.js'
import games from './dictionary.js'

let mode = 'Light'

document.querySelector('.change_theme').insertAdjacentHTML('afterbegin', `<button id='theme'>${mode}</button>`)



document.querySelector('.category-container').insertAdjacentHTML('afterbegin', `<select id="category" name="category-select">
    <option value="">All</option>
    <option value="animal">Animal</option>
    <option value="fruit">Fruit</option>
    <option value="vehicle">Vehicle</option>
    <option value="color">Color</option>
    <option value="shape">Shape</option>
</select>`)


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

document.querySelector('#category').addEventListener('change', function(){
    if(this.value==='animal'){
        document.querySelector('#app').innerHTML='';
    } else if(this.value==='fruit'){
        document.querySelector('#app').innerHTML='';
    } else if(this.value==='vehicle'){
        document.querySelector('#app').innerHTML='';
    } else if(this.value==='color'){
        document.querySelector('#app').innerHTML='';
    } else if(this.value==='shape'){
        document.querySelector('#app').innerHTML='';
    } else {
        cards(games, document.querySelector('#app'))
    }

})

cards(games, document.querySelector('#app'))
