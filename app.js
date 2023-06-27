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



//display score in points to top statusBar via innerHTML
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

    // beginFloat();
    // beginFloat2();
    // beginFloat3();
  }
  
  setTimeout(createGhost, 1418);

const startButton = ()=>{
    beginFloat();
    beginFloat2();
    beginFloat3();
    beginFloat4();
}




// let ghostOne;
// let ghostTwo;
// let ghostThree;
// let ghostFour;

// let ghostList = [ghostOne, ghostTwo, ghostThree, ghostFour]

//create score variable which adds points per every ghostHit/ghostClick
let score = 0;
const addPoints = (points) => {
  score += points;
};
console.log(addPoints)
const scoreDisplay = ()=>{
    console.log(score);
}

const nextLevel=()=>{
    if (score >= 20){
        roundTwo();
    }
}

//each successful hit is +5 points added to the Score, consoleToScreen logged in statusBar
const ghostHit = () => {
  addPoints(5);
  console.log("+5 Points!");
  consoleToScreen(`PLAYER 1 SCORE: ${score}`)
};

//target ghostId and change display to none so each ghost disappears on ghostHit
// const ghostClick = (event) => {
//   const ghostId = event.target.id;
//   const ghost = document.getElementById(ghostId);
//   ghost.style.display = "none";
//   ghostHit();
//   console.log("Ghost clicked!");
// };
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
    }, 1000);
    
  };

//use setTimeOut to delay each ghost (array?) 
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

window.addEventListener("load", initGhosts);

const resetButton = ()=>{
    location.reload();
}

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

//setup a math.random chance that "ghostRetaliate" function will initiialize during roundTwo function sequence where if the random outcome is higher than 50%. the ghost reaches full "scale" in its (newly created) keyframe and glassScreenBreak gif image appears, in which case player 1 or 2 dies

//begin level 2
const roundTwo = ()=>{
    floatTwo1();
    floatTwo2();
    floatTwo3();
    FloatTwo4();
}

// after roundTwo for player one, begin a new function for player2Turn where player 2 as a new cursor type gets to play through both levels (make p2 cursor different if possible or change ghosts or ghost color or something & change "SCORE" innerhtml css element to RED TEXT)

const player2Turn = ()=>{

}