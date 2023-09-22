class Game {
    constructor(){
        this.startScreen = document.getElementById("start-screen")
        this.instructionsScreen = document.getElementById("instructions-screen")
        this.gameScreen = document.getElementById("game-screen")
        this.endScreen = document.getElementById("end-screen")
        this.timerElement = document.querySelector('.time')
        this.timer = 0
        this.sec = 40
        this.timerElement.innerHTML = 'TIME: 00:' +this.sec;
        this.potion = document.querySelectorAll(".potions")
        this.gameOver = false
        this.animateId = 0
        this.music = new Audio('music/Halloween_sounding_music.mp3')
        this.music.volume = 0.2;
        
    }
    setTimer(){
        this.timer = setInterval(()=>{
            this.sec-=1;
            this.timerElement.innerHTML = 'TIME: 00:' +this.sec;
            if (this.sec < 0) {
                clearInterval(this.timer);
            }
        }, 1000)
    }


    start() {
        this.startScreen.style.display = 'none'
        this.endScreen.style.display = 'none'
        this.gameScreen.style.display = 'block'
        this.gameScreen.style.height = `${this.height}px`
        this.gameScreen.style.width = `${this.width}px`
        this.setTimer();
        this.gameLoop();
        this.music.play();
        
}

    /* instructions() {
        this.startScreen.style.display = 'none'
        this.endScreen.style.display = 'none'
        this.gameScreen.style.display = 'none'
        this.instructionsScreen.style.display = 'block'
        this.instructionsScreen.style.height = `${this.height}px`
        this.instructionsScreen.style.width = `${this.width}px`
    } */

    gameLoop() {
        if (this.sec <= 0) {
            this.gameOver = true
            this.startScreen.style.display = 'none'
            this.endScreen.style.display = 'block'
            this.gameScreen.style.display = 'none'
            this.endScreen.style.height = `${this.height}px`
            this.endScreen.style.width = `${this.width}px`
            this.music.pause();
        }
        else {
            console.log(this.sec)
            this.animateId = requestAnimationFrame(() => this.gameLoop())
        }
        
  }



} //<------------------------------------------------------------------------>



const potionArray = ["images/recipePotion1.png", 
    "images/recipePotion2.png", 
    "images/recipePotion3.png", 
    "images/recipePotion4.png", 
    "images/recipePotion5.png", 
    "images/recipePotion6.png", 
    "images/recipePotion7.png", 
    "images/recipePotion8.png", 
    "images/recipePotion9.png", 
    "images/recipePotion10.png", 
    "images/recipePotion11.png", 
    "images/recipePotion12.png", 
    "images/recipePotion13.png", 
    "images/recipePotion14.png", 
    "images/recipePotion15.png", 
    "images/recipePotion16.png", 
    "images/recipePotion17.png", 
    "images/recipePotion18.png" ];

    let randomIndex1 = getRandomIndex();
    let randomIndex2 = getRandomIndex();
    let randomIndex3 = getRandomIndex();

function randomImage() {
    
    const potionRandomizer =
        randomIndex1 = getRandomIndex();
        randomIndex2 = getRandomIndex();
        randomIndex3 = getRandomIndex();

        if (randomIndex1 === randomIndex2) {
            randomIndex2 = getRandomIndex();
        }
        else if (randomIndex3 === randomIndex2) {
            randomIndex3 = getRandomIndex();
        }

        document.querySelector(".random-image-1").src = potionArray[randomIndex1-1];
        document.querySelector(".random-image-2").src = potionArray[randomIndex2-1];
        document.querySelector(".random-image-3").src = potionArray[randomIndex3-1];
}
setTimeout(function(){setInterval(randomImage,4500)}, 4500);
randomImage()

function getRandomIndex() {
    return Math.floor(Math.random() * 18) + 1;
}


// <------------------------------------------------------>


    let click1 = 0;
    let click2 = 0;
    let click3 = 0;

 function scoreAdd(potionId){
    
    if (click1 === 0) {
        click1 = potionId;
        return;
    }
    if (click1 !== 0 && click2 === 0) {
        click2 = potionId;
        return;
    }
    if (click1 !== 0 && click2 !== 0) {
        click3 = potionId;
        console.log(click1,click2,click3,randomIndex1,randomIndex2,randomIndex3);
        compare();
        return;
    }
 }




 function compare() {
    const scoreKeep = document.querySelector(".score-keep");
    const counter = parseInt(scoreKeep.innerText) +1000;
    const potions = document.querySelectorAll(".potions");
    if (click1 === randomIndex1 && click2 === randomIndex2 && click3 === randomIndex3) {
        scoreKeep.innerText = counter;
        click1 = 0;
        click2 = 0;
        click3 = 0;
    }
    else {
        click1 = 0;
        click2 = 0;
        click3 = 0;
    }
 }









