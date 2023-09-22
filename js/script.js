window.addEventListener('load', () => {
    const startButton = document.getElementById('start-button')
    /* const instructionsButton = document.getElementById('instructions-button') */
    const restartButton = document.getElementById('restart-button')
  
    let game
  
    function startGame() {
      game = new Game()
      game.start()
    }

    /* function instructionsFunction() {
      game.instructions()
    }
 */

  
  
    startButton.addEventListener('click', function () {
      startGame()
    })

    /* instructionsButton.addEventListener('click', function () {
      instructionsFunction()
    })
   */
    restartButton.addEventListener('click', function () {
      location.reload();
    })





});