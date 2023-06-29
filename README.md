# Ghost-Hunter-Game

# Ghost-Hunter
![alt text](https://i.imgur.com/0RFTHYm.jpg)

# A Ghost Hunter
A Duck Hunt-style first-person shooter with ghosts that takes place in a graveyard throughout 3 levels + a Boss Level.

Point-and-click to fire at the ghost's heads and earn +5 points per target. .Earn 50 points and you reach the High Score to win the game. 

## A Screenshots

![screenshot 1](https://i.ibb.co/JxpZPpm/ghost-hunter-screenshot-1.png)

![screenshot 2](https://i.ibb.co/VQBsdGv/ghost-hunter-screenshot-2.png)

### A Instructions

_<sub>(click the audio player at the top of the screen to begin the game soundtrack)</sub>_

Start by selecting your Player and then clicking the "Level 1" button. The ghosts will populate and begin to scatter. Your job is to aim as best as you can at the head and click to shoot. Each successful hit is an additional five points. The winning goal is 50 points. Once you defeat each ghost, bove onto the next round by clicking the follow "Level" button.

The boss arrives in level four and is the final battle. Ghosts enemies can also attack back at the player. The will swoop in at the screen and inflict damage. ghosts can also evade your attacks by performing swift evasive maneuvers, shrinking, floating into the distance, vanishing, and hiding behind gravestones in the graveyard. Each hit is a lethal attack and results in a Game Over, at which point the player has the option to reset the game. At any point in the game, you can hit the "reset" button manually to clear the exising ghosts and levels and restart at level 1.

This is a Two-player game. To switch players, select the "Player One" or "Player Two" button at the bottom of the screen. Player 1 is green and Player 2 is red. Ghost Hunter is a co-op game, which means that each player's scores are summed to reach a single ultimate goal and win the game after all enemies are destroyed. Your total score is calculated at the right side of the top status bar.

#### A Motivation
Per Scholas Week 7 Project Assignment: **"The DOM Based Game"**

##### A Approach 
-Using buttons to initialize different sets of gohsts per level with keyframe animations
-Click events for ghost "hit" actions which perform a secondary animation via getElement functions
-Points are accumulated and reassigned to the Score variable as they are gained
-Math.random is used to provide a random number between 1 - 20 which provides the ghosts with a chance value that they will attack the player after every successful player point
-A ghost attack results in the Game Over function being called, which activates the "game over" & reload sequence where the game is reset automatically
-innerHtml is used to print score to screen according to which player is active 
-Each successive move is manually controlled by the human players and the game is 2-player co-op. User can activate each level function in order to continue to the next round of enemies and win the game
-Reset is also possible via manual control
-User will be prompted upon losing the game to restart via a windows prompt 
-Ghost movements get increasing more difficult to track and target as the rounds progress via keyframe animation sequences -Each event brought on by an eventListener (typically a click or onClick action) sets off a new sequence of functions that play out with user interaction until the level is complete, at which point the user has the option to manuyally progres to the next stage, allow player two to take over, or restart the game
-The game screen currently has a fixed width and is not responsive to window resizing 

###### A Tech/Framework
 ***Built With:***
 -Javascript
 -CSS
 -HTML5



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