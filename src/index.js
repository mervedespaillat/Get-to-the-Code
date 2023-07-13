import Game from './scripts/game';

window.addEventListener("load", function(){
      const canvasEl = document.getElementById("main-canvas")
      //     const game =   new Game(canvasEl)
      //     game.animate();
          
      const myDiv = document.getElementById("mainpage-container")
      const pageDiv = document.getElementById("mainpage")
      const playGame = document.getElementById("play-btn");
      
      playGame.addEventListener("click", () => {
        myDiv.style.display = "none";
        pageDiv.style.display = "none";
        const game = new Game(canvasEl)
        game.animate()
        game.playAgain()
          });
        })


      //   function restart(){
      //  const canvasEl = document.getElementById("main-canvas")
      //   const pause = document.getElementById("restart")
      //     pause.addEventListener("click", ()=>{
      //           const game = new Game(canvasEl)
      //           game.animate()
      //           console.log("new game")
      //     })
      //   }

      //   restart()
 


        