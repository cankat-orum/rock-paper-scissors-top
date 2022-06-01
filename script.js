let items = ["rock", "paper", "scissors"];
let counterMe = 0;
let counterPc = 0;

let returnItem = () => {
  return items[Math.floor(Math.random() * items.length)];
};

function gameLoop() {
  let playerChoice = prompt("ROCK PAPER SCISSORS");
  if (counterMe || counterPc === 5) {
    if (counterMe === 5) {
      alert("YOU WON");
    } else if (counterPc === 5) {
      alert("PC WON");
    }
  } else if (playerChoice == returnItem) {
    gameLoop();
  } else if (playerChoice == "rock") {
    if (returnItem == "scissors") {
      counterMe++;
      gameLoop;
    } else if (returnItem == "paper") {
      counterPc++;
      gameLoop;
    }
  } else if (playerChoice == "paper") {
    if (returnItem == "rock") {
      counterMe++;
      gameLoop;
    } else if (returnItem == "scissors") {
      counterPc++;
      gameLoop;
    }
  } else if (playerChoice == "scissors") {
    if (returnItem == "paper") {
      counterMe++;
      gameLoop;
    } else if (returnItem == "rock") {
      counterPc++;
      gameLoop;
    }
  }
}

gameLoop();
