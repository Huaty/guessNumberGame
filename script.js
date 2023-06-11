"use strict";

const randomNumber = Math.trunc(Math.random() * 20) + 1;
console.log(randomNumber);

let score = 20;
document.querySelector(".score").textContent = score;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "Please enter a number";
  } else if (guess === randomNumber) {
    document.querySelector(".message").textContent =
      "You have successfully guessed the number";
    score++;
    document.querySelector(".score").textContent = score;
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").style.width = "30rem";
  } else if (guess > randomNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Your guess is too high";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < randomNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Your guess is too low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".message").textContent = "Start Guessing...";
  document.querySelector(".score").textContent = 20;
  document.querySelector("body").style.backgroundColor = "Black";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".guess").value = "";
});
