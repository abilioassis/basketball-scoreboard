"use strict";

let score = 0;
const homeScore = document.getElementById("home-score");
const guestScore = document.getElementById("guest-score");

/**
 * (String, Number) -> undefined
 * Increases a team's score by a specified amount
 */
function increment(team, points) {
  if (team === "home") {
    score = parseInt(homeScore.innerText);
    score += points;
    homeScore.textContent = score;
  } else {
    score = parseInt(guestScore.innerText);
    score += points;
    guestScore.textContent = score;
  }
}

/**
 * Resets the game score.
 */
function newGame() {
  homeScore.textContent = 0;
  guestScore.textContent = 0;
}
