import './style.css'
import { cards } from './cards.js'
import games from './dictionary.js'

let mode = 'Light'
localStorage.clear();

document.querySelector('.change_theme').insertAdjacentHTML('afterbegin', `<button id='theme'>${mode}</button>`)
document.querySelector('.upload-button').insertAdjacentHTML('afterbegin', `<button id='upload'>Upload Image</button>`)

document.querySelector('#app').insertAdjacentHTML('afterbegin', `<div id=selector></div>`)
document.querySelector('#app').insertAdjacentHTML('beforeend', `<div id=game></div>`)

document.querySelector('#upload').addEventListener("click", function(){
    localStorage.clear();
    let categoryName = '';
    document.querySelector('#game').innerHTML = '';
    if (!document.querySelector('#upload-div')) {
        document.querySelector('#app').insertAdjacentHTML('beforeend', `<div id=upload-div><form id="upload-form">
                                                                        <label for="category-name">Category Name:</label>
                                                                        <input id="category-name" name="category-name" type="text"/>
                                                                        <input type="submit" value="Submit">
                                                                        </form></div>`)
        document.querySelector('#upload-form').addEventListener('submit', function(event){
            event.preventDefault();
            if(document.querySelector('#category-name').value){
                categoryName = document.querySelector('#category-name').value;
            } else {
                return;
            }
            document.querySelector('#upload-div').innerHTML = `<form id="upload-img-form">
                                                                        <label for="img-name">Correct Image Name:</label>
                                                                        <input id="img-name" name="img-name" type="text"/>
                                                                        <input id="file" name="file" type="file" accept="image/*"/>
                                                                        <input type="submit" value="Submit">`;
            document.querySelector('#upload-img-form').addEventListener('submit', function(event){
                event.preventDefault();
                if(document.querySelector('#img-name').value && (document.querySelector('#file').files.length > 0)){
                    let storedData = JSON.parse(localStorage.getItem("images")) || {};
                    if(!storedData[categoryName]){
                        storedData[categoryName] = [];
                    }

                    const file = document.querySelector('#file').files[0];
                    const reader = new FileReader();
                    reader.onload = function(e) {
                        const imgdata = e.target.result;
                        storedData[categoryName].push({
                        name: document.querySelector('#img-name').value,
                        file: imgdata
                    });
                        localStorage.setItem("images", JSON.stringify(storedData));
                    };
                    reader.readAsDataURL(file);
                    if(storedData[categoryName].length === 6){
                        console.log(storedData);
                        document.querySelector('#upload-div').innerHTML='<h3>Upload complete for this category!</h3>';
                        cards(games, document.querySelector('#selector'), true)
                    } else {
                        return;
                    }
                } else {
                    return;
                }
            })
        })
    } else {
        document.querySelector('#upload-div').remove()
    }
})

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


cards(games, document.querySelector('#selector'), false)

