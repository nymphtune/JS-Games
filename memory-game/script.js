const cardArray= [
     {
          name: 'eren',
          img: 'images/10.jpeg',
     },
     {
          name: 'girl',
          img: 'images/2.jpeg'
     },
     {
          name: 'illumi',
          img: 'images/14.jpeg',
     },
     {
          name: 'hisoka',
          img: 'images/11.jpeg',
     },
     {
          name: 'faerie',
          img: 'images/17.png',
     },
     {
          name: 'hisokacard',
          img: 'images/12.jpeg',
     },
     {
          name: 'eren',
          img: 'images/10.jpeg',
     },
     {
          name: 'girl',
          img: 'images/2.jpeg'
     },
     {
          name: 'illumi',
          img: 'images/14.jpeg',
     },
     {
          name: 'hisoka',
          img: 'images/11.jpeg',
     },
     {
          name: 'faerie',
          img: 'images/17.png',
     },
     {
          name: 'hisokacard',
          img: 'images/12.jpeg',
     }
]


cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard(){
     for(let i=0; i<cardArray.length; i++){
          const card = document.createElement('img')
          card.setAttribute('src', 'images/1.jpeg')
          card.setAttribute('data-id', i)
          card.addEventListener('click', flipCard)
          gridDisplay.appendChild(card)
     }
}

createBoard()

function checkMatch(){
     const cards = document.querySelectorAll('#grid img')
    
     const optionOneId = cardsChosenIds[0]
     const optionTwoId = cardsChosenIds[1]
     if(optionOneId == optionTwoId){
          cards[optionOneId].setAttribute('src', 'images/1.jpeg')
          cards[optionTwoId].setAttribute('src', 'images/1.jpeg')
          alert("You have clicked the same image!")
     }
     if (cardsChosen[0] == cardsChosen[1]){
          alert('you made a match!')
          cards[optionOneId].setAttribute('src', 'images/0.jpeg')
          cards[ optionTwoId ].setAttribute('src', 'images/0.jpeg')
          cards[optionOneId].removeEventListener('click', flipCard)
          cards[ optionTwoId ].removeEventListener('click', flipCard)
          cardsWon.push(cardsChosen)
     }
     else{
          cards[optionOneId].setAttribute('src', 'images/1.jpeg')
          cards[optionTwoId].setAttribute('src', 'images/1.jpeg')
          alert('Try Again!')
     }
     resultDisplay.textContent = cardsWon.length
     cardsChosen = []
     cardsChosenIds = []

     if(cardsWon.length ==cardArray.length/2){
          resultDisplay.textContent = 'Congratulations!! you found them ALL!'
     }
}

function flipCard() {
     const cardId = this.getAttribute('data-id')
     cardsChosen.push(cardArray[cardId].name)
     cardsChosenIds.push(cardId)
     this.setAttribute('src', cardArray[cardId].img)
     if (cardsChosen.length === 2){
          setTimeout( checkMatch, 500)
     }
}