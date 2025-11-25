export function cards (list, element) {
    for(let i=0; i<list.length; i++) {
        element.insertAdjacentHTML('beforeend', `<div class="cards"></div>`)
    }
}