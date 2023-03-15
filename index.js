const counterDisplay = document.querySelector("h3");
let counter = 0;

const bubbleMaker = () => {
  const bubble = document.createElement("span");
  bubble.classList.add("bubble");
  // on a ajouté une class à bubble

  document.body.appendChild(bubble);
  // on a crée un enfant au body qui est bubble

  const size = Math.random() * 200 + 100 + "px";
  // on a crée un nombre random entre 100 et 300. Par défault Math.random crée entre 0.01 et 0.99
  bubble.style.height = size;
  bubble.style.width = size;
  bubble.style.top = Math.random() * 100 + 50 + "%";
  bubble.style.left = Math.random() * 100 + "%";

  const plusMinus = Math.random() > 0.5 ? 1 : -1;
  // écrit en turner avec if ou else

  bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");

  bubble.addEventListener("click", () => {
    counter++;
    counterDisplay.textContent = counter;
    bubble.remove();
  });

  setTimeout(() => {
    bubble.remove();
  }, 8000);
};

setInterval(bubbleMaker, 1000);

// ou autre écriture pour jouer la fonction
// setInterval(() => {
//   bubbleMaker();
// }, 250);
