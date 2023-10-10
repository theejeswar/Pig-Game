import "./styles.css";

let score0 = document.getElementById('score--0');
let score1 = document.getElementById('score--1');
let dice = document.querySelector('.dice');
let rollDice = document.querySelector('.btn--roll');
let current1 = document.getElementById('current--0');
let current2 = document.getElementById('current--1');
let player0 = document.querySelector('.player--0');
let player1 = document.querySelector('.player--1');
let holdBtn = document.querySelector('.btn--hold');
let newGame = document.querySelector('.btn--new');
let name1 = document.getElementById('name--0');
let name2 = document.getElementById('name--1');

let scores;
let current;
let activePlayer;

function init(){
  name1.textContent = 'Player 1';
  name2.textContent = 'Player 2';
  score0.textContent = 0;
  score1.textContent = 0;
  current1.textContent = 0;
  current2.textContent = 0;
  
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--active'); 
  rollDice.classList.remove('hidden');
  holdBtn.classList.remove('hidden');
  dice.classList.add('hidden');

  scores = [0,0]
  current = 0;
  activePlayer = 0;
}
init();

let switchPlayer = function(){
  current =0;
  document.getElementById(`current--${activePlayer}`).textContent = current;
  activePlayer = activePlayer ===0 ? 1:0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
}

rollDice.addEventListener('click', function() {
  let diceNumber = Math.trunc(Math.random() * 6) + 1;
  console.log(diceNumber);
  
  dice.classList.remove('hidden');
  dice.src = `/src/images/dice-${diceNumber}.jpg`; 
if (diceNumber !==1){
  current += diceNumber;
  document.getElementById(`current--${activePlayer}`).textContent = current;
  // current1.textContent = current;
} else {
 switchPlayer();
}

});

holdBtn.addEventListener('click', function(){
  scores[activePlayer] += current;
  document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
  
  if (scores[activePlayer] >=20){
    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    document.getElementById(`name--${activePlayer}`).textContent = 'Winner!';
    dice.classList.add('hidden');
    rollDice.classList.add('hidden');
    holdBtn.classList.add('hidden');
  }else {
    switchPlayer();
  }
});

newGame.addEventListener('click', init);