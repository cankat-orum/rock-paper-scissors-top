let items = ["rock", "paper", "scissors"];
let userItem = "";
let counterMe = 0;
let counterPc = 0;

let returnItem = () => {
  return items[Math.floor(Math.random() * items.length)];
};

let checkWin = async () => {
  if (counterMe == 5) {
    await alert("YOU WON!!!");
    counterMe = 0;
    counterPc = 0;
  }
  if (counterPc == 5) {
    await alert("YO LOST PC WON");
    counterMe = 0;
    counterPc = 0;
  }
};

function gameLogic(uI, pI) {
  if (uI == "rock" || uI == "paper" || uI == "scissors") {
    if (uI == pI) {
      console.log("TIE");
    } else if (uI == "rock") {
      if (pI == "paper") {
        counterPc++;
      } else if (pI == "scissors") {
        counterMe++;
      }
    } else if (uI == "paper") {
      if (pI == "scissors") {
        counterPc++;
      } else if (pI == "rock") {
        counterMe++;
      }
    } else if (uI == "scissors") {
      if (pI == "rock") {
        counterPc++;
      } else if (pI == "paper") {
        counterMe++;
      }
    }
  }
}

let myPickDiv = document.querySelector(`.user-pick`);
let pcPickDiv = document.querySelector(`.pc-pick`);
let resultText = document.querySelector(`.result-text`);

let buttonEvent = async (btnClass) => {
  const pressedBtn = document.querySelector(`.${btnClass}`);
  pressedBtn.addEventListener("click", function (e) {
    console.log(pressedBtn.textContent);

    let userItem = pressedBtn.getAttribute("alt");
    let pcItem = returnItem();
    myPickDiv.textContent = userItem;
    pcPickDiv.textContent = pcItem;
    gameLogic(userItem, pcItem);
    resultText.textContent =
      userItem == pcItem
        ? "TIE"
        : "ME  =  " + counterMe + "  ---  " + counterPc + "  =  PC";
    checkWin();
  });
};

buttonEvent("rock-btn");
buttonEvent("paper-btn");
buttonEvent("scissors-btn");

// let items = ["rock", "paper", "scissors"];
// let counterMe = 0;
// let counterPc = 0;

// let returnItem = () => {
//   return items[Math.floor(Math.random() * items.length)];
// };

// let showScore = () => {
//   console.log("ME" + counterMe + "-" + counterPc + "PC");
// };

// let checkWin = () => {
//   if (counterMe == 5) {
//     alert("YOU WON!!!");
//   }
//   if (counterPc == 5) {
//     alert("YOU LOST PC WON");
//   }
// };

// let gameLoop = async () => {
//   while (counterMe < 5 && counterPc < 5) {
//     let userItem = await prompt("ROCK PAPER SCISSORS");
//     let pcItem = returnItem();
//     if (userItem == "rock" || userItem == "paper" || userItem == "scissors") {
//       if (userItem == pcItem) {
//         console.log("ME: " + userItem + "---" + pcItem + " :PC");
//         console.log("ME: " + counterMe + "---" + counterPc + " :PC");
//         console.log("TIE");
//       } else if (userItem == "rock") {
//         if (pcItem == "paper") {
//           counterPc++;
//           console.log("ME: " + userItem + "---" + pcItem + " :PC");
//           console.log("ME: " + counterMe + "---" + counterPc + " :PC");
//           checkWin();
//         } else if (pcItem == "scissors") {
//           counterMe++;
//           console.log("ME: " + userItem + "---" + pcItem + " :PC");
//           console.log("ME: " + counterMe + "---" + counterPc + " :PC");
//           checkWin();
//         }
//       } else if (userItem == "paper") {
//         if (pcItem == "scissors") {
//           counterPc++;
//           console.log("ME: " + userItem + "---" + pcItem + " :PC");
//           console.log("ME: " + counterMe + "---" + counterPc + " :PC");
//           checkWin();
//         } else if (pcItem == "rock") {
//           counterMe++;
//           console.log("ME: " + userItem + "---" + pcItem + " :PC");
//           console.log("ME: " + counterMe + "---" + counterPc + " :PC");
//           checkWin();
//         }
//       } else if (userItem == "scissors") {
//         if (pcItem == "rock") {
//           counterPc++;
//           console.log("ME: " + userItem + "---" + pcItem + " :PC");
//           console.log("ME: " + counterMe + "---" + counterPc + " :PC");
//           checkWin();
//         } else if (pcItem == "paper") {
//           counterMe++;
//           console.log("ME: " + userItem + "---" + pcItem + " :PC");
//           console.log("ME: " + counterMe + "---" + counterPc + " :PC");
//           checkWin();
//         }
//       }
//     } else {
//       alert("TYPE PROPERLY");
//     }
//   }
// };

// gameLoop();
