"use strict";

let randomNumber = Math.trunc(Math.random() * 20) + 1;
console.log(randomNumber);

let score = 20;
let highscore = 0;
document.querySelector(".score").textContent = score;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(`Random number:${randomNumber}`);

  if (!guess) {
    displayMessage("Enter a Number Please 😒");
  } else if (guess === randomNumber) {
    displayMessage("You have successfully guessed the number");
    score++;
    document.querySelector(".score").textContent = score;
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = randomNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== randomNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > randomNumber ? "Too High" : "Too Low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start Guessing...");
  document.querySelector(".score").textContent = 20;
  document.querySelector("body").style.backgroundColor = "Black";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
  console.log(randomNumber);
});
