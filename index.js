"use strict";

let score = 0,
  homeScore = document.getElementById("home-score"),
  guestScore = document.getElementById("guest-score");

/**
 * (String, Number) -> undefined
 * Increases a team's score by a specified amount
 */
function increment(team, by) {
  if (team === "home") {
    score = parseInt(homeScore.innerText);
    score += by;
    homeScore.textContent = score;
  } else {
    score = parseInt(guestScore.innerText);
    score += by;
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
