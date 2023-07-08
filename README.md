# Ghost-Hunter-Game

# Ghost-Hunter

![alt text](https://i.imgur.com/0RFTHYm.jpg)

# Ghost Hunter

A Duck Hunt-style first-person shooter built using html, css, & javascript featuring ghost enemies that takes place in a graveyard throughout 3 levels + a Boss Level.

Point-and-click to fire at the ghost's heads and earn +5 points per target. Earn 50 points and you reach the High Score to win the game

### Screenshots

---

![screenshot 1](https://i.ibb.co/JxpZPpm/ghost-hunter-screenshot-1.png)

![screenshot 2](https://i.ibb.co/VQBsdGv/ghost-hunter-screenshot-2.png)

### Instructions

---

<sub>resize window to '888px' for best interactive view</sub>
_<sub>(click the audio player at the top of the screen to begin the game soundtrack)</sub>_

Start by selecting your Player and then clicking the "Level 1" button. The ghosts will populate and begin to scatter. Your job is to aim as best as you can at the head and click to shoot. Each successful hit is an additional five points. The winning goal is 50 points. Once you defeat each ghost, move onto the next round by clicking the next glowing "Level" button.

The boss arrives in level four and is the final battle. Ghosts enemies can also strike back and attack the player. They will swoop in at the screen and inflict damage. ghosts can also evade your attacks by performing swift evasive maneuvers, shrinking, floating into the distance, vanishing, and hiding behind gravestones in the graveyard. Each hit is a lethal attack and results in a Game Over, at which point the player has the option to reset the game. At any point in the game, you can hit the "reset" button manually to clear the exising ghosts and levels and restart at level 1.

This is a Two-player game. To switch players, select the "Player One" or "Player Two" button at the bottom of the screen. Player 1 is green and Player 2 is red. Ghost Hunter is a co-op game, which means that each player's scores are summed to reach a single ultimate goal and win the game after all enemies are destroyed. Your total score is calculated at the right side of the top status bar.

### Motivation

---

Per Scholas Week 7 Project Assignment: **"The DOM Based Game"**

### Approach

---

-Using buttons to initialize different sets of ghosts per level with keyframe animations <br>
-Click events for ghost "hit" actions which perform a secondary animation via getElement functions <br>
-Points are accumulated and reassigned to the Score variable as they are gained<br>
-Math.random is used to provide a random number between 1 & 500 which provides the ghosts with a chance value that they will attack the player after every successful player point<br>
-A ghost attack results in the Game Over function being called, which activates the "game over" & reload sequence where the game is reset automatically<br>
-innerHtml is used to print score to screen according to which player is active <br>
-Each successive move is manually controlled by the human players and the game is 2-player co-op. User can activate each level function in order to continue to the next round of enemies and win the game<br>
-Reset is also possible via manual control<br>
-User will be prompted upon losing the game to restart via a windows prompt <br>
-Ghost movements get increasing more difficult to track and target as the rounds progress via keyframe animation sequences <br>
-Each event brought on by an eventListener (typically a click or onClick action) sets off a new sequence of functions that play out with user interaction until the level is complete, at which point the user has the option to manually progress to the next stage, allow player two to take over, or restart the game<br>
-The game screen currently has a fixed width and is not responsive to window resizing <br>

### Tech/Framework

---

**_Built With:_**

```
-Javascript
-CSS
-HTML5
-Photoshop (background image editing)
-iZotope RX 10 (audio processing)

```

#### Roadmap:

- [ ] Health Bar - depletes with each atack, triggers game over state
- [x] Title Sequence
- [x] Fix window resize shifting ghosts
- [ ] Ammo gauge (per level?)
- [ ] Cleaner Animations
- [x] Lightning gif overlay on round 2
- [x] Better foreground gravestone element sizing/placement
- [ ] More accurate tracking and execution of "ghost hit" animation
- [x] Add new animated background elements/gifs per level
      w/sound fx
- [x] Display current level text on screen-status bar
- [ ] Increase ghost retaliate/attk chance with each level
- [x] Add autoplay sound effect functions
- [x] New ghost images per level
- [ ] Per Player Score/Additional "Vs" multiplayer mode
- [x] Next Round indicator button animations

---

###### Unsolved/To Be Accomplished

separate states per level/player, individual remaining ghost attack function, ghost attack chance increases with time , more detailed ghost shaking once attacked "rotate" keyframe animations, more evasive maneuvers from ghosts once hovered over, separate point value for boss enemy, better responsive screen resize/css flex ghostcontainer
