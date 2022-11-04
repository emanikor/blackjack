//display sum
// display cards

let firstCard= 10
let secondCard = 4
let cards = [firstCard, secondCard ] // array -orderd list 
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message =""


let messageEl = document.getElementById("message-el")
console.log(messageEl)
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
 

function startGame(){
    renderGame()
}

function renderGame(){
    // render out firstCard and secondCard
    cardsEl.textContent = "cards: " +  cards[0] + "  " +  cards[1]
    // render out ALL thr card we have  
    sumEl.textContent = "sum:" + sum
    if (sum <= 20){
        message ="Do you want to draw a new card?"
     
    }
    else if( sum === 21){
        message ="you have a blackjack!"
        hasBlackJack = true
    }
    else{
        message ="you're out of the game!"
        isAlive = false
    }
    //.to display the message in th messageEl using message.textcontent
    messageEl.textContent = message  
}


function newCard() {
    let card = 8
    sum += card
   
    Card.push(card)
   console.log(cards)
    renderGame()
}
