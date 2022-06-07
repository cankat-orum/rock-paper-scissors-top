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
