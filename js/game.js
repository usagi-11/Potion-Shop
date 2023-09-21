class Game {
    constructor(){
        this.startScreen = document.getElementById("start-screen")
        this.gameScreen = document.getElementById("game-screen")
        this.endScreen = document.getElementById("end-screen")
        //this.score = 0
        //this.scoreKeep = document.getElementsByClassName("score-keep")
        this.timerElement = document.querySelector('.time')
        this.timer = 0
        this.sec = 6
        this.potion = document.querySelectorAll(".potions")
        //this.potionRandomizer = 0
        //this.recipePotion = document.querySelectorAll("random-image")
        this.gameOver = false
        
    }
    setTimer(){
        this.timer = setInterval(()=>{
            this.timerElement.innerHTML = 'TIME: 00:0' +this.sec;
            this.sec--;
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
}




/* randomImageMethod() {
function randomImage() {
    const potionArray = ["url('images/recipePotion1.png')", 
    "url('images/recipePotion2.png')", 
    "url('images/recipePotion3.png')", 
    "url('images/recipePotion4.png')", 
    "url('images/recipePotion5.png')", 
    "url('images/recipePotion6.png')", 
    "url('images/recipePotion7.png')", 
    "url('images/recipePotion8.png')", 
    "url('images/recipePotion9.png')", 
    "url('images/recipePotion10.png')", 
    "url('images/recipePotion11.png')", 
    "url('images/recipePotion12.png')", 
    "url('images/recipePotion13.png')", 
    "url('images/recipePotion14.png')", 
    "url('images/recipePotion15.png')", 
    "url('images/recipePotion16.png')", 
    "url('images/recipePotion17.png')", 
    "url('images/recipePotion18.png')", ];
    //this.potionRandomizer = setInterval(()=>{
        const randomIndex = Math.floor(Math.random()*potionArray.length);
        this.recipePotion.src = potionArray[randomIndex];
    //},6000)
    console.log(randomImage);
}
} */






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
    "images/recipePotion18.png", ];

function randomImage() {
    
    const potionRandomizer = setInterval(()=>{
        let randomIndex1 = getRandomIndex();
        let randomIndex2 = getRandomIndex();
        let randomIndex3 = getRandomIndex();

        if (randomIndex1 === randomIndex2) {
            randomIndex2 = getRandomIndex();
        }
        else if (randomIndex3 === randomIndex2) {
            randomIndex3 = getRandomIndex();
        }

        document.querySelector(".random-image-1").src = potionArray[randomIndex1];
        document.querySelector(".random-image-2").src = potionArray[randomIndex2];
        document.querySelector(".random-image-3").src = potionArray[randomIndex3];
    },6000)
    
}
randomImage()

function getRandomIndex() {
    return Math.floor(Math.random()*potionArray.length);
}

 function scoreAdd(){
    const scoreKeep = document.querySelector(".score-keep");
    console.log(scoreKeep.innerText);
    const counter = parseInt(scoreKeep.innerText) +100;
    console.log(counter);
    scoreKeep.innerText = counter;
} 