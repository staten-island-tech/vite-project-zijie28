import { fruit_pic, animal_pic, vehicle_pic} from "./pictures.js";
let timerId = "";
export function cards(list, element, custom) {
  if (!custom) {
    for (let i = 0; i < list.length; i++) {
      element.insertAdjacentHTML(
        "beforeend",
        `<button class="difficulty" data-name="${list[i].name}">
          ${list[i].name} | ${list[i].difficulty}
        </button>`
      );
    }

    document
      .querySelectorAll('.difficulty:not([data-custom="true"])')
      .forEach((button) => {
        button.addEventListener("click", function (event) {
          if (timerId) clearInterval(timerId);
          try {
            document.querySelector("#upload-div").innerHTML = "";
          } finally {
            const target = event.target.closest("button");

            const name = target.getAttribute("data-name");
            let seconds = 0;
            const game = document.querySelector("#game");
            game.innerHTML = "";

            let dataset = [];
            if (name === "Fruit") {
              dataset = fruit_pic;
            } else if (name === "Animal") {
              dataset = animal_pic;
            } else if (name === "Vehicle") {
              dataset = vehicle_pic;
            }

            let rand = [];
            dataset.forEach((item) => {
              rand.push(() => {
                game.insertAdjacentHTML(
                  "beforeend",
                  `<div class="flip-card" data-correct='${item.name}'>
              <div class="flip-card-inner">
                <div class="flip-card-front"></div>
                <div class="flip-card-back">
                  <img src="${item.img}" style="width:100%; height:100%;">
                </div>
              </div>
            </div>`
                );
              });
              rand.push(() => {
                game.insertAdjacentHTML(
                  "beforeend",
                  `<div class="flip-card" data-correct='${item.name}'>
              <div class="flip-card-inner">
                <div class="flip-card-front"></div>
                <div class="flip-card-back">
                  <h1>${item.name}</h1>
                </div>
              </div>
            </div>`
                );
              });
            });

            for (let i = rand.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              [rand[i], rand[j]] = [rand[j], rand[i]];
            }
            rand.forEach((task) => task());

            let checking = false;
            document.querySelectorAll(".flip-card").forEach((div) => {
              div.addEventListener("click", function hi(event) {
                if (checking) return;

                const card_sele = event.target.closest(".flip-card");
                if (card_sele.classList.contains("right")) return;
                card_sele.classList.add("flip");
                const flipped = document.querySelectorAll(
                  ".flip-card.flip:not(.right)"
                );

                if (flipped.length === 2) {
                  const firstValue = flipped[0].getAttribute("data-correct");
                  const secondValue = flipped[1].getAttribute("data-correct");
                  checking = true;
                  if (firstValue === secondValue) {
                    flipped[0].classList.add("right");
                    flipped[1].classList.add("right");
                    checking = false;
                  } else {
                    setTimeout(() => {
                      flipped[0].classList.remove("flip");
                      flipped[1].classList.remove("flip");
                      checking = false;
                    }, 1000);
                  }
                }
              });
            });
            game.insertAdjacentHTML(
              "beforeend",
              `<h2 id="timer">Time Elapsed: ${seconds} seconds</h2>`
            );
            timerId = setInterval(() => {
              if (
                document.querySelectorAll(".flip-card.right").length ===
                rand.length
              ) {
                clearInterval(timerId);
              }
              seconds += 1;
              document.querySelector(
                "#timer"
              ).textContent = `Time Elapsed: ${seconds} seconds`;
            }, 1000);
          }
        });
      });
  } else if (custom) {
    const images = JSON.parse(localStorage.getItem("images")) || {};
    for (const key in images) {
      element.insertAdjacentHTML(
        "beforeend",
        `<button class="difficulty" data-name="${key}" data-custom="true">
            ${key}
          </button>`
      );
    }
    document.querySelectorAll('[data-custom="true"]').forEach((button) => {
      button.addEventListener("click", function (event) {
        if (timerId) clearInterval(timerId);
        try {document.querySelector("#upload-div").innerHTML = "";} finally {

        const target = event.target.closest("button");
        const name = target.getAttribute("data-name");
        let seconds = 0;
        const game = document.querySelector("#game");
        game.innerHTML = "";
        let dataset = images[name];
        let rand = [];
        dataset.forEach((item) => {
          rand.push(() => {
            game.insertAdjacentHTML(
              "beforeend",
              `<div class="flip-card" data-correct='${item.name}'>
                    <div class="flip-card-inner">
                      <div class="flip-card-front"></div>
                      <div class="flip-card-back">
                        <img src="${item.file}" style="width:100%; height:100%;">
                      </div>
                    </div>
                  </div>`
            );
          });
          rand.push(() => {
            game.insertAdjacentHTML(
              "beforeend",
              `<div class="flip-card" data-correct='${item.name}'>
                    <div class="flip-card-inner">
                      <div class="flip-card-front"></div>
                      <div class="flip-card-back">
                        <h1>${item.name}</h1>
                      </div>
                    </div>
                  </div>`
            );
          });
        });

        for (let i = rand.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [rand[i], rand[j]] = [rand[j], rand[i]];
        }
        rand.forEach((task) => task());

        let checking = false;
        document.querySelectorAll(".flip-card").forEach((div) => {
          div.addEventListener("click", function hi(event) {
            if (checking) return;

            const card_sele = event.target.closest(".flip-card");
            if (card_sele.classList.contains("right")) return;
            card_sele.classList.add("flip");
            const flipped = document.querySelectorAll(
              ".flip-card.flip:not(.right)"
            );

            if (flipped.length === 2) {
              const firstValue = flipped[0].getAttribute("data-correct");
              const secondValue = flipped[1].getAttribute("data-correct");
              checking = true;
              if (firstValue === secondValue) {
                flipped[0].classList.add("right");
                flipped[1].classList.add("right");
                checking = false;
              } else {
                setTimeout(() => {
                  flipped[0].classList.remove("flip");
                  flipped[1].classList.remove("flip");
                  checking = false;
                }, 1000);
              }
            }
          });
        });
        game.insertAdjacentHTML(
          "beforeend",
          `<h2 id="timer">Time Elapsed: ${seconds} seconds</h2>`
        );
        timerId = setInterval(() => {
          if (
            document.querySelectorAll(".flip-card.right").length === rand.length
          ) {
            clearInterval(timerId);
          }
          seconds += 1;
          document.querySelector(
            "#timer"
          ).textContent = `Time Elapsed: ${seconds} seconds`;
        }, 1000);
    }});
    });
  }
}
