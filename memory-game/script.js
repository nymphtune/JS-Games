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
          img: 'images/17.jpeg',
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
          img: 'images/17.jpeg',
     },
     {
          name: 'hisokacard',
          img: 'images/12.jpeg',
     }
]


cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')

function createBoard(){
     for(let i=0; i<cardArray.length; i++){
          const card = document.createElement('img')
          card.setAttribute('src', 'images/1.jpeg')
          card.setAttribute('data-id', i)
          gridDisplay.appendChild(card)
     }
}

createBoard()


