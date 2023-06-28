//"duck hunt" style - 'GHOST HUNTER'
//LOAD SCREEN on page load -music starts here with splash screen image (photoshop my own)
//add spooky trap music to background with The HTML <audio> Element:
//<audio controls autoplay>
/* [  <source src="horse.ogg" type="audio/ogg">
<source src="horse.mp3" type="audio/mpeg">
Your browser does not support the audio element.
</audio>  ] */  
//cursor TARGET point and click (eventlistener/onclick event)
//enemies can hide behind barrier (gravestones) [z-index tombstones above spooky gray background]**
//when enemy pops up, player is able to click to attack (hover, gif animations, keyframe movement left and right evasive, hover over keyframe pause event to freeze opponent)
//use onclick function for ghosts to kill them:
//ONCLICK for each ghost will add new dissappear ghost gif,add points to score using FUNCTIONN addPoint & ghostHit
//use initGhosts function to initialize each new ghost's position, speed, range, name,  health(?)
//use keyframe functions to move ghosts 
//points for every successful targeted attack
//WIN STATE: 20(?) points max - points calculated by strength of attack // --> (Math.random) [SCORE SCREEN Display on top bar] function: renderScore -5 points per hit ( * 4 ghosts) - consoleToScreen****
//points populate on tip "navBar"(where p1&p2 titles are) OR footer status bar(maybe other messager [innerHTML + removeChild/appendChild])
//takes turns between Win & Lose state (p1 human vs p2 pc)
//p2 turn will play out with red cursor(img), just quicker (setTimeout?) gif death animation, then point assignment via atack strength OR with ghosts attacking p1 back until p1 health diminishes and dies
//RESET button (Refresh the page = location.reload();
//DEATH event: enemy attacks back successfully
//Ammo quantity bar in top status bar
//ALTERNATE LOSE STATE: run out of ammo
//LOSE STATE: 1 death, switch to p2 (pc) turn
//GAME OVER: death count reaches 3 for either player
//way to keep playing if game is not over: new enemies pop up infinitely 
//!!!! REMEMBER TO GIT COMMIT OFTEN WITH -m MESSAGE CHANEGS UPDATES !!!!
//readme file **

//Chance of Ghost Attack Random Generation:
const generateRandomNum = (min, max)=>{
  let rand = Math.floor(Math.random() * (max - min) + min);
  return rand;
};


//create score variable which adds points per every ghostHit/ghostClick:
let score = 0;
const addPoints = (points) => {
  score += points;
};
console.log(addPoints)
const scoreDisplay = ()=>{
    console.log(score);
}

//display score in points to top statusBar via innerHTML
//scoreDisplay = console.log(score):
const consoleToScreen = (content)=>{
    let screen = document.querySelector('.playerScores')
    let printer = document.createElement('div')
    printer.classList.add('scoreDisplay');
    printer.innerHTML = content;
    screen.innerHTML = '';

    screen.appendChild(printer);
}

//make ghost appear from empty img div (from css .ghostContainer display:none either onclick=start button OR setTimeout from page refresh)
function createGhost() {
    const ghostContainer = document.querySelector('.ghostContainer');
    const ghostImage = document.createElement('img');
    ghostImage.src = '';
    ghostImage.classList.add('ghostContainerAppear');
    
    ghostImage.onclick = ghostClick;

    ghostContainer.appendChild(ghostImage);
    
    ghostContainer.style.display = 'flex';
  }
  
  setTimeout(createGhost, 1418);

const startButton = ()=>{
    beginFloat();
    beginFloat2();
    beginFloat3();
    beginFloat4();
}

const Lvl2Button = ()=>{
  initGhosts();
  begin2Float();
  begin2Float2();
  begin2Float3();
  begin2Float4();
}


// let ghostOne;
// let ghostTwo;
// let ghostThree;
// let ghostFour;

// let ghostList = [ghostOne, ghostTwo, ghostThree, ghostFour]



//Next Level/Round sequence:
// const nextLevel=()=>{
//     if (score >= 20){
//         roundTwo();
//     }
// }

let currentPlayer = 1;


const playerTurn = ()=>{
  if (currentPlayer === 1){
    
  }
}
//each successful hit is +5 points added to the Score, consoleToScreen logged in statusBar:
const ghostHit = () => {
  addPoints(5);
  console.log("+5 Points!");
  consoleToScreen(`PLAYER ${currentPlayer} SCORE: ${score}`)
  ghostChanceAttack();
  // if (score >= 20){
  // }
};

// const ghostHit2 = () => {
//   addPoints(5);
//   console.log("+5 Points!");
//   consoleToScreen(`PLAYER ${currentPlayer} SCORE: ${score}`)
//   ghostChanceAttack2();
// };

// const ghostChanceAttack2 = ()=>{
//   let randomChance = (generateRandomNum(0, 10));
//   if (randomChance >= 5){
//     // ghostAttackIndex();
//     ghostAttack();
//     setTimeout(GameOver, 700);
//     setTimeout(reloadGame, 1400);
//   }
// }


// if (currentPlayer === 2){
//   ghostHit2();
//   ghostChanceAttack2();
// }
//CURSOR PER PLAYER:
// .custom-cursor-one {
//   cursor: url('http://www.rw-designer.com/cursor-extern.php?id=509'), auto;
// }

// .custom-cursor-two {
//   cursor: url('cursor-two.png'), auto;
// }


// //apply custom cursor one
// document.classList.add('custom-cursor-one');

// //apply custom cursor two
// const swapCursor = ()=>{
// document.classList.remove('custom-cursor-one');
// document.classList.add('custom-cursor-two');
// }



//OLD FUNCTION: target ghostId and change display to none so each ghost disappears on ghostHit:
// const ghostClick = (event) => {
//   const ghostId = event.target.id;
//   const ghost = document.getElementById(ghostId);
//   ghost.style.display = "none";
//   ghostHit();
//   console.log("Ghost clicked!");
// };

//on click, replace ghost with splat gif, remove old gif,remove splat gif after setTimeout:
const ghostClick = (event) => {
    const clickedGhost = event.target;
    const oldSrc = clickedGhost.src;
    const splashImg = 'https://media.baamboozle.com/uploads/images/848417/1659679771_127028_gif-url.gif'; 
  
    clickedGhost.style.display = 'none';

    const shotGif = document.createElement('img');
    shotGif.src = splashImg;

    clickedGhost.parentNode.insertBefore(shotGif, clickedGhost.nextSibling);
  
    setTimeout(() => {
      shotGif.parentNode.removeChild(shotGif);
      clickedGhost.style.display = 'none';  
      ghostHit();
      console.log('ghost clicked');
    }, 400);

  };

//use setTimeOut to delay each ghost: 
const ghostAppearDelay = 2000;
const initGhosts = () => {
  const ghosts = document.querySelectorAll(".ghosts");
  let delay = 0;
  
  ghosts.forEach((ghost, ghostList) => {
    setTimeout(() => {
      ghost.style.display = "block";
      ghost.addEventListener("click", ghostClick);
    }, delay);
    
    delay += ghostAppearDelay;
  });
};

//Initialize ghosts on page load - location.reload:
window.addEventListener("load", initGhosts);

//reset Button reloads screen:
const resetButton = ()=>{
    location.reload();
}

//Ghost (All 4) animation keyframe functions for startButton function:
//LEVEL 1 ghost animations
const beginFloat = ()=>{
    let ghostOneFloater = document.querySelector('#ghost1')
    ghostOneFloater.classList.toggle('floatingOne')
}

const beginFloat2 = ()=>{
    let ghostTwoFloater = document.querySelector('#ghost2')
    ghostTwoFloater.classList.toggle('floatingTwo')
}

const beginFloat3 = ()=>{
    let ghostThreeFloater = document.querySelector('#ghost3')
    ghostThreeFloater.classList.toggle('floatingThree')
}
const beginFloat4 = ()=>{
    let ghostFourFloater = document.querySelector('#ghost4')
    ghostFourFloater.classList.toggle('floatingFour')
}

//LEVEL 2 ghost animations
const begin2Float = ()=>{
  let ghostOneFloater2 = document.querySelector('#ghost1')
  ghostOneFloater2.classList.toggle('floatingOne2')
}
const begin2Float2 = ()=>{
  let ghostTwoFloater2 = document.querySelector('#ghost2')
    ghostTwoFloater2.classList.toggle('floatingTwo2')
}
const begin2Float3 = ()=>{
  let ghostThreeFloater2 = document.querySelector('#ghost3')
  ghostThreeFloater2.classList.toggle('floatingThree2')
}
const begin2Float4 = ()=>{
  let ghostFourFloater2 = document.querySelector('#ghost4')
    ghostFourFloater2.classList.toggle('floatingFour2')
}


// Ghost ATTACKS Player 
const ghostAttack = ()=>{
  let ghostStrike = document.querySelector('#ghost2')
  ghostStrike.classList.toggle('attackPlayer');
}
//a second ghost (GHOST 1) ATTACKS Player:
const ghostAttack2 = ()=>{
  let ghostStrike2 = document.querySelector('#ghost1')
  ghostStrike2.classList.toggle('attackPlayer2');
}


const GameOver = () => {
  // Create a new image element for the game over screen
  let gameScreen = document.querySelector('.graveyard')
  gameScreen.setAttribute('src', 'https://pa1.aminoapps.com/7076/a912ff623fb056551339d87bec6b728c27d2c179r1-500-375_hq.gif');
}

  //reload? prompt":
const reloadGame = ()=>{
  let startOver = window.prompt("GAME OVER", "Reload?", "Purgatory");
  if (startOver === "Reload?"){
    location.reload();
  }
  //  else if (startOver === "next player"){
  //   setTimeout(player2Turn, 2000);
  // }
  // setTimeout(() => {
  //   location.reload();
  // }, 2000);
};

//change ghost2 OR .ghosts z-index to 3/4(?):
// const ghostAttackIndex = ()=>{
// let ghost2 = document.querySelector('.gravestone')
// ghost2.style.zIndex= '4';
// }

//setup a math.random chance that "ghostAttack" function will initiialize during roundTwo function sequence where if the random outcome is higher than 50%. the ghost reaches full "scale" in its (newly created) keyframe and glassScreenBreak gif image appears, in which case player 1 or 2 dies

const ghostChanceAttack = ()=>{
  let randomChance = (generateRandomNum(0, 20));
  if (randomChance >= 19){
    // ghostAttackIndex();
    ghostAttack();
    setTimeout(GameOver, 700);
    setTimeout(reloadGame, 1400);
  
  }
}

//******IF SCORE >=20, initiate roundTWO*********/



//begin level 2
const roundTwo = ()=>{
    floatTwo1();
    floatTwo2();
    floatTwo3();
    FloatTwo4();
}

// after roundTwo for player one, begin a new function for player2Turn where player 2 as a new cursor type gets to play through both levels (make p2 cursor different if possible or change ghosts or ghost color or something & change "SCORE" innerhtml css element to RED TEXT)

// const player2Turn = ()=>{
//   location.reload();
// currentPlayer = 2;
// }

