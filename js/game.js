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
}

/* Audio.volume, audio. */

/* function clearTimer(){
    
        console.log(sec);
    }
}
clearTimer(); */

/*const imageArray = ['potion1.png', 'potion2.png', 'potion3.png', 'potion4.png', 'potion5.png', 'potion6.png', 'potion7.png', 'potion8.png', 'potion9.png', 'potion10.png', 'potion11.png', 'potion12.png', 'potion13.png', 'potion14.png', 'potion15.png', 'potion16.png', 'potion17.png', 'potion18.png']

function getRandomImage(){
    randomIndex = Math.floor(Math.random() * imageArray.length)
    selectedImage = imageArray[randomIndex]
    document.getElementById('imagesRandom').src = `./images/${selectedImage}`
} */

/* const imageArray = ['images/recipePotion1.png', 'recipePotion2.png', 'recipePotion3.png', 'recipePotion4.png', 'recipePotion5.png', 'recipePotion6.png', 'recipePotion7.png', 'recipePotion8.png', 'recipePotion9.png', 'recipePotion10.png', 'recipePotion11.png', 'recipePotion12.png', 'recipePotion13.png', 'recipePotion14.png', 'recipePotion15.png', 'recipePotion16.png', 'recipePotion17.png', 'recipePotion18.png']
let index;
randomImageFunction();
function randomImageFunction() {
    const randomImage = setInterval(()=>{
        const randomIndex = Math.floor(Math.random()*imageArray.length);
        if (randomIndex !== index) {
            imgEl.src = imageArray[randomIndex];
            index = randomIndex;
        }
        else {
            randomImageFunction();
        }
    },1000)
}  */
