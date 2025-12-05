import { fruit_pic, animal_pic } from './pictures.js';

export function cards(list, element) {
  for (let i = 0; i < list.length; i++) {
    element.insertAdjacentHTML(
      'beforeend',
      `<button class="difficulty" data-difficulty="${list[i].difficulty}">
         ${list[i].name} | ${list[i].difficulty}
       </button>`
    );
  }



  document.querySelector('#selector').addEventListener('click', function (event) {
    const target = event.target.closest('button');
    let seconds = 0;
    const game = document.querySelector('#game');
    game.innerHTML = '';


    const difficulty = target.getAttribute('data-difficulty');

    if (difficulty === 'Easy') {
      for (let i = 0; i < fruit_pic.length; i++) {
        game.insertAdjacentHTML(
          'beforeend',
          `<div class="flip-card">
             <div class="flip-card-inner">
               <div class="flip-card-front"></div>
               <div class="flip-card-back">
                 <img src="${fruit_pic[i].img}" style="width:100%; height:100%;">
               </div>
             </div>
           </div>`
        );
      }
      for (let i = 0; i < fruit_pic.length; i++) {
        game.insertAdjacentHTML(
          'beforeend',
          `<div class="flip-card">
             <div class="flip-card-inner">
               <div class="flip-card-front"></div>
               <div class="flip-card-back">
                 <h1>${fruit_pic[i].fruit}</h1>
               </div>
             </div>
           </div>`
        );
      }
    } else if (difficulty === 'Medium') {
      for (let i = 0; i < animal_pic.length; i++) {
        game.insertAdjacentHTML(
          'beforeend',
          `<div class="flip-card">
             <div class="flip-card-inner">
               <div class="flip-card-front"></div>
               <div class="flip-card-back">
                 <img src="${animal_pic[i].img}" style="width:100%; height:100%;">
               </div>
             </div>
           </div>`
        );
      }
      for (let i = 0; i < animal_pic.length; i++) {
        game.insertAdjacentHTML(
          'beforeend',
          `<div class="flip-card">
             <div class="flip-card-inner">
               <div class="flip-card-front"></div>
               <div class="flip-card-back">
                 <h1>${animal_pic[i].animal}</h1>
               </div>
             </div>
           </div>`
        );
      }
    }
    
    game.insertAdjacentHTML('beforeend', `<h1 id="timer">Time Elapsed: ${seconds} seconds</h1>`);
    timerId = setInterval(() => {
      seconds += 1;
      document.querySelector('#timer').textContent = `Time Elapsed: ${seconds} seconds`;
    }, 1000);
  });
}



