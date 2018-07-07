const fa = document.querySelector(".fa");
const star = document.querySelector(".fa-star");
const repeat = document.querySelector(".fa-repeat");
const card = document.querySelector(".card");
const match = document.querySelector(".match");
const diamond = document.querySelector(".fa-diamond");
const plane = document.querySelector(".fa-paper-plane-o");
const anchor = document.querySelector(".fa-anchor");
const bolt = document.querySelector(".fa-bolt");
const cube = document.querySelector(".fa-cube");
const leaf = document.querySelector(".fa-leaf");
const bike = document.querySelector(".fa-bicycle");
const bomb = document.querySelector(".fa-bomb");
let cardArray=[diamond, plane, anchor, bolt, cube, leaf, bike, bomb];

//dom manipulations
const each = document.getElementsByClassName("card");

//click event listener
let openCards = []

function newFlip(each){
  openCards.push(each);
}

function openSymbol(each){
  each.classList.add('open');
  each.classList.add('show');
 }

 function matched() {
   each.classList.add('match');
   each.classList.remove('open', 'show');
 }

const deck = document.querySelector('.deck');
deck.addEventListener('click',function(event){
  const card = event.target;
  if (openCards.length<2){
    if (!card.classList.contains('open')){
      openSymbol(card);
      newFlip(card);
    }}
  })

//comparing 2 open open cards
function compare(openCards){
  if (openCards.length === 2){
    if (openCards[0].classList === openCards[1].classList){
      matched(card);
    }
    else {
      openCards[1].classList.remove('open', 'show');
      openCards[1].pop(each);
      openCards[0].classList.remove('open', 'show');
      openCards[0].pop(each);
      openCards = [];
    }
  }
}


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a list of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
