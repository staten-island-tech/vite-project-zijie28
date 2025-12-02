export function cards (list, element) {
    for(let i=0; i<list.length; i++) {
        element.insertAdjacentHTML('beforeend', `<div class="cards ${list[i].category}" id='${list[i].name}'>${list[i].name}</div>`)
    }
}