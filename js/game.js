class Game {
    constructor(){
        this.startScreen = document.getElementById("start-screen")
        this.gameScreen = document.getElementById("game-screen")
        this.endScreen = document.getElementById("end-screen")
        this.score = 0
        this.timerElement = document.querySelector('.time')
        this.timer = 0
        this.sec = 6
        this.potion = document.querySelectorAll(".potions")
        this.potionRandomizer = 0
        this.recipePotion = document.getElementsByClassName("random-image")
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

randomizeRecipe(){
const potionArray = ['images/recipePotion1.png', 'images/recipePotion2.png', 'images/recipePotion3.png', 'images/recipePotion4.png', 'images/recipePotion5.png', 'images/recipePotion6.png', 'images/recipePotion7.png', 'images/recipePotion8.png', 'images/recipePotion9.png', 'images/recipePotion10.png', 'images/recipePotion11.png', 'images/recipePotion12.png', 'images/recipePotion13.png', 'images/recipePotion14.png', 'images/recipePotion15.png', 'images/recipePotion16.png', 'images/recipePotion17.png', 'images/recipePotion18.png', ];

randomImage()
function randomImage() {
    const randomIndex = Math.floor(Math.random()*potionArray.length);
    this.recipePotion.src = potionArray[randomIndex];
}
}
}