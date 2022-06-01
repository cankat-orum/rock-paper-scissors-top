let playerChoice = "";
let items = ["rock", "paper", "scissors"];
let counterMe = 0;
let counterPc = 0;

let gameLoop = () => {
  for (let i = 0; i < 5; ) {
    let promptContent = prompt("");
    setPlayerChoice(promptContent);
    if (counterMe || counterPc === 5) {
      if (counterMe === 5) {
        alert("YOU WON");
        gameLoop();
      } else if (counterPc === 5) {
        alert("PC WON");
        gameLoop();
      }
    } else if (roundState == "tie") {
      continue;
    } else if (roundState == "lose") {
      counterPc++;
      i++;
    } else if (roundState == "win") {
      counterMe++;
      i++;
    }
  }
};

let roundState = () => {
  if (playerChoice === returnItem) {
    return "tie";
  } else if (playerChoice == "rock") {
    if (returnItem == "paper") {
      return "lose";
    } else if (returnItem == "scissors") {
      return "win";
    }
  } else if (playerChoice == "paper") {
    if (returnItem == "scissors") {
      return "lose";
    } else if (returnItem == "rock") {
      return "win";
    }
  } else if (playerChoice == "scissors") {
    if (returnItem == "rock") {
      return "lose";
    } else if (returnItem == "paper") {
      return "win";
    }
  }
};

let setPlayerChoice = (promptText) => {
  playerChoice = promptText;
};

let returnItem = () => {
  return items[Math.floor(Math.random() * items.length)];
};

gameLoop();
