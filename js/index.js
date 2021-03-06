const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);

memoryGame.shuffleCards()

window.addEventListener('load', event => {
  let html = '';
  memoryGame.cards.forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });
  
  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;
  
  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {

      // turn card
      card.classList.toggle('turned');
      
      // Add card name to pickCards array
      memoryGame.pickedCards.push(card);
      
      // Assign card's name to each card.
      let card1 = memoryGame.pickedCards[0].dataset.cardName;
      let card2 = memoryGame.pickedCards[1].dataset.cardName;
      
      // Check if cards are the same
      if (memoryGame.pickedCards.length == 2) {
        let result = memoryGame.checkIfPair(card1, card2)
      // Turn cards if they are not the same
        if (result !== true) {
          setTimeout(() => {
            memoryGame.pickedCards[0].classList.toggle('turned');
            memoryGame.pickedCards[1].classList.toggle('turned');
          }, 1000)
        }
      }

      // Clear pickedCards array  
      if (memoryGame.pickedCards.length > 2) {
        memoryGame.pickedCards.splice(0,2)
      }

      // Score
      const pairsClickedScore = document.getElementById('pairs-clicked');
      pairsClickedScore.innerHTML = memoryGame.pairsClicked;

      const pairsGuessedScore = document.getElementById('pairs-guessed');
      pairsGuessedScore.innerHTML = memoryGame.pairsGuessed;
      
      // Check if game is over
      memoryGame.isFinished();  
      
    });
  });
});
