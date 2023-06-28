import Game from './scripts/game';

window.addEventListener("load", function(){
      const canvasEl = document.getElementById("main-canvas")
          const game =   new Game(canvasEl)
          game.animate();
          game.startGame();
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
 


        