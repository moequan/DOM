document.querySelector(".btn-new").addEventListener("click", newGame);
document.querySelector(".btn-roll").addEventListener("click", rollDice);
document.querySelector(".btn-hold").addEventListener("click", holdScore);

let roundScore, activePlayer, scores;

/*
 * Click on the new game button then this event will fire.
 */
function newGame() {
  console.log("newGame...");

  activePlayer = 0;
  roundScore = 0;
  scores = [0, 0];

  //reset the global score
  document.querySelector("#score-0").textContent = 0;
  document.querySelector("#score-1").textContent = 0;

  //reset the round score
  document.querySelector("#current-0").textContent = 0;
  document.querySelector("#current-1").textContent = 0;

  //remove active
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");

  //by default assign active to player 1
  document.querySelector(".player-0-panel").classList.add("active");
}

/*
 * when click on the roll dice button then this function will call/fire.
 */
function rollDice() {
  console.log("rollDice...");

  //Generate random number from 1 to 6.
  let dice1 = Math.ceil(Math.random() * 6);
  let dice2 = Math.ceil(Math.random() * 6);
  console.log(dice1);

  //get the img element
  let diceImg = document.getElementById("dice-1");
  let diceImg2 = document.getElementById(`dice-2`);
  diceImg.style.display = "block";
  diceImg2.style.display = "block";
  diceImg.src = "img/dice-" + dice1 + ".png";
  diceImg2.src = "img/dice-" + dice2 + ".png";

  //store dice number into roundScore
  roundScore += dice1 + dice2;

  if (dice1 !== 1 && dice2 !== 1) {
    roundScore += dice1 + dice2;
    console.log(roundScore)
    document.querySelector("#current-" + activePlayer).textContent = roundScore;
    // var input=document.querySelector('.final-score').value;
  } else {
    nextPlayer();
  }
}

function holdScore() {
  console.log("holdScore...");

  

  scores[activePlayer] += roundScore;

  //#score-0 or #score-1
  document.querySelector("#score-" + activePlayer).textContent =
    scores[activePlayer];
    
   

  if (scores[activePlayer] >= 100) {
    //winner
    document.querySelector("#name-" + activePlayer).textContent = "WINNER";

    document
      .querySelector("player-" + activePlayer + "-panel")
      .classList.remove("active");
    document
      .querySelector("player-" + activePlayer + "-panel")
      .classList.add("winner");

    document.getElementById("#dice-1").style.display = "none";
    document.getElementById("#dice-2").style.display = "none";
    
  } else {
    nextPlayer();
  }
}

function nextPlayer() {
  console.log("nextPlayer...");

  //reset the roundScore
  roundScore = 0;

  //find which player is active
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  //reset the round score
  document.querySelector("#current-0").textContent = 0;
  document.querySelector("#current-1").textContent = 0;

  //change the active class
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
}
