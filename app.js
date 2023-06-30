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

//player turn state:
let isPlayerTwo = false;

//create score variable which adds points per every ghostHit/ghostClick:
let score = 0;
const addPoints = (points) => {
  score += points;
  winScore();
};
console.log(addPoints)
const scoreDisplay = ()=>{
    console.log(score);
}
let score2 = 0;
const addPoints2 = (points2) => {
  score2 += points2;
  winScore();
};
console.log(addPoints2)
const scoreDisplay2 = ()=>{
    console.log(score2);
}



//print 'You Win' to Screen via 'ghostContainer':
const highScore = (winContent)=>{
  let winScreen = document.querySelector('.ghostContainer');
  let printer = document.createElement('div');
  printer.classList.add('winTxtContainer');
  printer.innerHTML = winContent;
  

  winScreen.innerHTML = '';
  winScreen.appendChild(printer);
}

//When score reaches 50, initiate WIN State:
const winScore = () => {
  if (score >= 55) {
    setTimeout(() => {
      highScore("YOU WIN");
    }, 300); 
  }
};



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
const createGhost = ()=>{
    const ghostContainer = document.querySelector('.ghostContainer');
    const ghostImage = document.createElement('img');
    ghostImage.src = '';
    ghostImage.classList.add('ghostContainerAppear');
    
    ghostImage.onclick = ghostClick;

    ghostContainer.appendChild(ghostImage);
    
    ghostContainer.style.display = 'flex';
  }
  
  setTimeout(createGhost, 1418);



  //replace 'ghosts' class w/Boss img to make BOSS ghost appear[for Lvl4Button function] by hiding ghosts class with display:none and changing ghost1 gif to new img/gif via #ghost1 id:
  const createBoss = ()=>{
    const ghosts = document.getElementsByClassName('ghosts');
    const gravestoneElements = document.getElementsByClassName('gravestone');
    for (let i = 0; i < ghosts.length; i++) {
      ghosts[i].style.display = 'none';
    }
    const ghost1 = document.getElementById('ghost1');
    ghost1.src = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cf2a2628-6126-4767-9684-0b5f75a06612/dd546ex-d5116361-3d5c-4aaa-8eb2-162626f7137f.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2NmMmEyNjI4LTYxMjYtNDc2Ny05Njg0LTBiNWY3NWEwNjYxMlwvZGQ1NDZleC1kNTExNjM2MS0zZDVjLTRhYWEtOGViMi0xNjI2MjZmNzEzN2YuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ZYXqmKSpAzXuJUt0afhaAk6hISURCxcFkDTwjHq4CWo';
    ghost1.style.display = 'flex';
  };
    // hides gravestone img elements
    const hideGraves = () => {
      let graveIds = ['#grave1', '#grave2', '#grave4', '#grave5'];
    
      for (let i = 0; i < graveIds.length; i++) {
        const element = document.querySelector(graveIds[i]);
        if (element) {
          element.setAttribute('src', 'https://pngimg.com/d/dot_PNG22.png');
        }
      }
      //fix "firstPerson" class margin-top to adjust the screen positioning after removinng foreground elements:
      let bottomMargin = document.querySelector('.firstPerson')
      if (bottomMargin) {
        bottomMargin.style.marginTop = '-114px';
      }
    };
  
  

const startButton = ()=>{
    // initGhosts();
    // hide2Ghosts();
    lvlToScreen("LEVEL ONE");
    beginFloat();
    beginFloat2();
    beginFloat3();
    beginFloat4();
}

const Lvl2Button = ()=>{
  swapBkg();
  lvlToScreen("LEVEL TWO");
  initGhosts();
  begin2Float();
  begin2Float2();
  begin2Float3();
  begin2Float4();
}

const Lvl3Button = ()=>{
  swapBkg2();
  lvlToScreen("LEVEL THREE");
  initGhosts();
  begin3Float();
  begin3Float2();
  begin3Float3();
  begin3Float4();
}

const Lvl4Button = ()=>{
  swapBkg3();
  createBoss();
  lvlToScreen('BOSS LEVEL');
  hideGraves();
  begin4Float();
  // begin4Float2();
  // begin4Float3();
  // begin4Float4();
}


//switch out background image per levels 2, 3, & 4 via "lvl_button"s:
// level 2:
const swapBkg = ()=>{
  let graveBkg = document.querySelector('.graveyard');
    graveBkg.setAttribute('src', 'https://i.ibb.co/m0GvLqf/Ghost-Hunter-background-Image-TWO.jpg')
};

// level 3:
const swapBkg2 = ()=>{
  let graveBkg = document.querySelector('.graveyard');
    graveBkg.setAttribute('src', 'https://i.ibb.co/S5qspZR/Ghost-Hunter-background-Image-FOUR.jpg')
};

// level 4:
const swapBkg3 = ()=>{
  let graveBkg = document.querySelector('.graveyard');
    graveBkg.setAttribute('src', 'https://media.tenor.com/AXYSMOzS4RUAAAAC/graveyard-grim.gif')
  ;
  
};




const currentPlayerTwo = ()=>{
  isPlayerTwo = !isPlayerTwo;
  console.clear();
  
}

const currentPlayerOne = ()=>{
  isPlayerTwo = false;
  console.clear();
  
}


//each successful hit is +5 points added to the Score, consoleToScreen logged in statusBar:
const ghostHit = () => {
  if (isPlayerTwo) {
    addPoints(5);
    console.log("+5 Points!");
    consoleToScreen(`PLAYER 2 SCORE: ${score}`)
    ghostChanceAttack();  
  } else {
  addPoints(5);
  console.log("+5 Points!");
  consoleToScreen(`PLAYER 1 SCORE: ${score}`)
  ghostChanceAttack();  
  }
};

// _________________________________________________________
//player 2 turn:

document.addEventListener('mousemove', function(event) {
  if (isPlayerTwo) {
    document.body.style.cursor = 'url(http://www.rw-designer.com/cursor-extern.php?id=509), auto';
  } else {
    document.body.style.cursor = 'url(http://www.rw-designer.com/cursor-extern.php?id=517), auto';
  }
});


//_________________________________________________________

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
const ghostAppearDelay = 1500;
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

//LEVEL 3 ghost animations
const begin3Float = ()=>{
  let ghostOneFloater3 = document.querySelector('#ghost1')
  ghostOneFloater3.classList.toggle('floatingOne3')
}
const begin3Float2 = ()=>{
  let ghostTwoFloater3 = document.querySelector('#ghost2')
    ghostTwoFloater3.classList.toggle('floatingTwo3')
}
const begin3Float3 = ()=>{
  let ghostThreeFloater3 = document.querySelector('#ghost3')
  ghostThreeFloater3.classList.toggle('floatingThree3')
}
const begin3Float4 = ()=>{
  let ghostFourFloater3 = document.querySelector('#ghost4')
    ghostFourFloater3.classList.toggle('floatingFour3')
}

//LEVEL 4 ghost animations
const begin4Float = ()=>{
  let ghostOneFloater4 = document.querySelector('#ghost1')
  ghostOneFloater4.classList.toggle('floatingOne4')
}
const begin4Float2 = ()=>{
  let ghostTwoFloater4 = document.querySelector('#ghost2')
    ghostTwoFloater4.classList.toggle('floatingTwo4')
}
const begin4Float3 = ()=>{
  let ghostThreeFloater4 = document.querySelector('#ghost3')
  ghostThreeFloater4.classList.toggle('floatingThree4')
}
const begin4Float4 = ()=>{
  let ghostFourFloater4 = document.querySelector('#ghost4')
    ghostFourFloater4.classList.toggle('floatingFour4')
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

const ghostAttack3 = ()=>{
  let ghostStrike3 = document.querySelector('#ghost3')
  ghostStrike3.classList.toggle('attackPlayer3');
}

const ghostAttack4 = ()=>{
  let ghostStrike4 = document.querySelector('#ghost4')
  ghostStrike4.classList.toggle('attackPlayer4');
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
};


//setup a math.random chance that "ghostAttack" function will initialize during roundTwo function sequence where if the random outcome is higher than 50%. the ghost reaches full "scale" in its newly created keyframe [and glassScreenBreak gif image appears?], in which case player 1 or 2 dies:
const ghostChanceAttack = ()=>{
  let randomChance = (generateRandomNum(0, 100));
  //set to 18/20 or 34/40when finished:
  if (randomChance >= 89){
    // ghostAttackIndex();
    ghostAttack();
    ghostAttack2();
    ghostAttack3();
    ghostAttack4();
    ghstAttkToScreen("GHOST ATTACK!");
    console.log("Ghost Attacked!");
    setTimeout(GameOver, 1300);
    setTimeout(reloadGame, 2100);
  
  }
}

//Print "Ghost Attack!" to 1stperson footer-bar during ghostAttack:
const ghstAttkToScreen = (attackTxt)=>{
  let lowBar = document.querySelector('.attackTxt')
  let showAtk = document.createElement('div')
  showAtk.classList.add('ghostAttackPrinter');
  showAtk.innerHTML = attackTxt;
  lowBar.innerHTML = '';

  lowBar.appendChild(showAtk);
}

const lvlToScreen = (currentLvlDisp)=>{
  let footerDiv = document.querySelector('.attackTxt')
  let showLvl = document.createElement('div')
  showLvl.classList.add('levelPrinter');
  showLvl.innerHTML = currentLvlDisp;
  footerDiv.innerHTML = '';
  footerDiv.appendChild(showLvl);
}


 




