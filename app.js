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


//make ghost appear from empty img div (from css .ghostContainer display:none either onclick=start button OR setTimeout from page refresh [and loop?])

const consoleToScreen = (content)=>{
    let screen = document.querySelector('.playerScores')
    let printer = document.createElement('div')
    printer.classList.add('scoreDisplay');
    printer.innerHTML = content;
    screen.innerHTML = '';

    screen.appendChild(printer);
}

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




let ghostOne;
let ghostTwo;
let ghostThree;
let ghostFour;

let ghostList = [ghostOne, ghostTwo, ghostThree, ghostFour]

let score = 0;
const addPoints = (points) => {
  score += points;
};
console.log(addPoints)
const scoreDisplay = ()=>{
    console.log(score);
}


const ghostHit = () => {
  addPoints(5);
  console.log("+5 Points!");
  consoleToScreen(`PLAYER 1 SCORE: ${score}`)
};

const ghostClick = (event) => {
  const ghostId = event.target.id;
  const ghost = document.getElementById(ghostId);
  ghost.style.display = "none";
  ghostHit();
  console.log("Ghost clicked!");
};

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