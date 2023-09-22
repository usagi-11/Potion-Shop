# Potion Shop

[Give the game a try!!](https://usagi-11.github.io/Potion-Shop/)

## Description
You play as the witch's overworked assistant and you have to complete the biggest amount of potion orders in the least amount of time!!
The game ends after a specified amount of time, and the score is calculated based on the amount of ingredients you were able to click correctly to make the potion.
Come start your shift as a witch apprentice and remember.. don't be late!!


## MVP
<ul>
    <li>Recipe potions are randomized.</li>
    <li>The shelf potions value is called on click.</li>
    <li>If the shelf potions clicked match the recipe potions in order 1000 points are added to the score.</li>
    <li>Timer that goes down to zero.</li>
    <li>When timer reaches zero, end screen appears.</li>
</ul>



## Backlog
<ul>
    <li>A high score tracking.</li>
    <li>small dialogues from the witch.</li>
    <li>dynamic instructions/tutorial that appear inside of the game screen.</li>
    <li>volume slider.</li>
    <li>name input for a personalized experience with the witch dialogues</li>
</ul>


## Data structure
<h3>game.js</h3>
<ul>
    <li>Game ()</li>
    <li>this.startScreen</li>
    <li></li>
    <li>this.gameScreen</li>
    <li>this.endScreen</li>
    <li>this.timerElement</li>
    <li>this.timer</li>
    <li>this.sec</li>
    <li>this.timerElement.innerHTML</li>
    <li>this.potion</li>
    <li>this.gameOver</li>
    <li>this.animateId</li>
    <li>this.music</li>
    <li>this.music.volume</li>
    <li>setTimer()</li>
    <li>start()</li>
    <li></li>
    <li>gameLoop()</li>
</ul>


## States y States Transitions
<ul>
    <li>Start Screen</li>
    <li></li>
    <li>Game Screen</li>
    <li>End Screen</li>
</ul>


## Task
<ul>
    <li>Getting the assets prepared.</li>
    <li>Coding the starting state of the game.</li>
    <li>Taking care of positioning the assets.</li>
    <li>Implementing the randomizer.</li>
    <li>Making a functional score system.</li>
    <li>Linking the game end state to the timer.</li>
    <li>Implementing animations and sound.</li>
</ul>


## Links

- [Slides Link](https://docs.google.com/presentation/d/11RE_z0AG9_Reuk6EkG6C0G_VDRICuVwrYULTE9BQy9Y/edit?usp=sharing)
- [Github repository Link](https://github.com/usagi-11/Potion-Shop)
- [Deployment Link](https://usagi-11.github.io/Potion-Shop/)