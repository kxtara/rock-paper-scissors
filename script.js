let playerOne = document.querySelector(".player-one");
let playerTwo = document.querySelector(".player-two");
let playerOneImg = document.querySelector(".player-one-img");
let playerTwoImg = document.querySelector(".player-two-img");
let winner = document.querySelector(".winner");
let playBtn = document.querySelector(".play-btn")
let images = ["images/scissors.png", "images/rock.png", "images/paper.png"];

// check to see if players played
let playerOnePlayed = false;
let playerTwoPlayed = false;

// stores players choice index i.e rock at index 1
let playersIndex = {}

// checks if both players played then return winner
function btnState() {
  if (playerOnePlayed && playerTwoPlayed) {
    result();
  }
}

// enables players button and clears playersIndex
function play(){
  winner.textContent = " "
  playerOne.disabled = false;
  playerTwo.disabled = false;
  playersIndex = {}
}

playerOne.addEventListener("click", () => {
  // random image
  let random = Math.floor(Math.random() * images.length);
  // random image index set to playersIndex
  playersIndex.one = random
  // displays random image
  playerOneImg.src = images[random];
  // disables player button
  playerOne.disabled = true;
  // player played
  playerOnePlayed = true;
  // check to see if player played
  btnState();
});

playerTwo.addEventListener("click", () => {
  // random image
  let random = Math.floor(Math.random() * images.length);
  // random image index set to playersIndex
  playersIndex.two = random
  // displays random image
  playerTwoImg.src = images[random];
  // disables player button
  playerTwo.disabled = true;
  // player played
  playerTwoPlayed = true;
  // check to see if player played
  btnState();
});

playBtn.addEventListener("click",() => play())

// checks to see which player won the game
function result() {
  if(playerTwo.disabled && playerOne.disabled)
  return playersIndex.one === playersIndex.two
    ? winner.textContent = "Draw!!"
    : playersIndex.one === 1 && playersIndex.two === 2
    ? winner.textContent = "Player Two!!"
    : playersIndex.one === 2 && playersIndex.two === 1
    ? winner.textContent = "Player One!!"
        : playersIndex.one === 2 && playersIndex.two === 0
          ? winner.textContent = "Player Two!!"
          : playersIndex.one === 0 && playersIndex.two === 2
          ? winner.textContent = "Player One!!"
          : playersIndex.one === 0 && playersIndex.two === 1
          ? winner.textContent = "Player Two!!"
          : winner.textContent = "Player One!!"
}