const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
let scoreP0 = document.getElementById("score--0");
let scoreP1 = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");
const newBtn = document.querySelector(".btn--new");
const rollBtn = document.querySelector(".btn--roll");
const holdBtn = document.querySelector(".btn--hold");
let currentScoreP0 = document.getElementById("current--0");
let currentScoreP1 = document.getElementById("current--1");

scoreP0.textContent = 0;
scoreP1.textContent = 0;
let currentScore = 0;
let scores = [0, 0];
let activePlayer = 0;
let playing = true;

function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0.classList.toggle("player--active");
  player1.classList.toggle("player--active");
}

rollBtn.addEventListener("click", function () {
  if (playing) {
    const dice = Math.floor(Math.random() * 6) + 1;

    document.querySelector(".hidden").style.display = "block";
    diceEl.src = `img/dice-${dice}.png `;

    if (dice !== 1) {
      currentScore = currentScore + dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

holdBtn.addEventListener("click", function () {
  if (playing) {
    //Adding Current Score To Overall Score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
      playing = false;
    } else {
      //Switching Player When Hold Button IS Pressed
      switchPlayer();
    }
  }
});

newBtn.addEventListener('click',function(){

    scoreP0.textContent=0;
    scoreP1.textContent=0;
    currentScoreP0.textContent=0;
    currentScoreP1.textContent=0;
    player0.classList.remove('player--winner');
    player1.classList.remove('player--winner');
    player0.classList.add('player--active');
    player1.classList.remove('player--active');
    document.querySelector(".hidden").style.display = "none";

    currentScore = 0;
    scores = [0, 0];
    activePlayer = 0;
    playing = true;

})
