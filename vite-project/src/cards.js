export function cards (list, element) {
    for(let i=0; i<list.length; i++) {
        element.insertAdjacentHTML('beforeend', `<button class="difficulty" id='${list[i].difficulty}'>${list[i].name} | ${list[i].difficulty}</button>`);
        document.querySelector(`#${list[i].difficulty}`).addEventListener('click', function(){
            document.querySelector('#game').innerHTML = '';
        })
    }

}