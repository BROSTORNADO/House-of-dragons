import {playerdata} from '/utils/data.js'
import player from '/utils/player.js'

const players = document.getElementById('players')
const chico = new player(playerdata.cheikh)
const malickos = new player(playerdata.malick)
const brahimos = new player(playerdata.brahim)
const housseinos = new player(playerdata.houssein)
const dragons = [brahimos , malickos ,chico ,housseinos]
const diceEl = document.getElementById('dice-el')
const rollBtn = document.getElementById('roll-btn')
const attackBtn = document.getElementById('attack')
const startBtn = document.getElementById('start-btn')

const dices = [
    "./Dices/dices-1.png",
    "./Dices/dices-2.png",
    "./Dices/dices-3.png",
    "./Dices/dices-4.png",
    "./Dices/dices-5.png",
    "./Dices/dices-6.png"
]
render()
const playerscards = document.getElementsByClassName('player-card')

const sound = document.getElementById('mySound')
function render(){

rollBtn.style.display = "none"
attackBtn.style.display = "none"   
players.innerHTML = ''
for(let i=0;i<dragons.length;i++ )
{

    players.innerHTML += dragons[i].getplayerhtml()
}

}

let counter = 0 
let dicescore = 0
startBtn.addEventListener('click',function(){
    playerscards[counter].classList.add('currentplayer');
    startBtn.style.display = "none"
    rollBtn.style.display = "block"
   
}) 

rollBtn.addEventListener('click',function(){
    setInterval(sound.play(), 4500);
   let arrayscore = Math.floor(Math.random()*6)
   dicescore = arrayscore+1
   diceEl.style.backgroundImage = `url(${dices[arrayscore]})`
   diceEl.style.transform = "scale(1.3)"
  
   diceEl.style.transition = "transform 1000ms"
   rollBtn.style.display = "none"
   attackBtn.style.display ="block"
   console.log(dicescore)

})
attackBtn.addEventListener('click',function(){
    for(let x=0 ; x<dragons.length;x++)
    {
        if(x != counter && !(dragons[x].isDead))
        {
            dragons[x].takedamage(dicescore) 
           
            render()
        }  
    }
    counter +=1 

    if(counter>0 && counter<playerscards.length){
        playerscards[counter].classList.add('currentplayer')
        playerscards[counter-1].classList.remove('currentplayer')
    }
    if(counter===playerscards.length)
    {   
        counter = 0;
        playerscards[counter].classList.add('currentplayer');
        
    }

 rollBtn.style.display = "block"
 attackBtn.style.display = "none"
 diceEl.style.transform = "scale(1)"

})
