import Game from './scripts/game';

    window.addEventListener("load", function(){
         const canvasEl = document.getElementById("main-canvas")

          const game =   new Game(canvasEl)
            game.animate()
            console.log("hello")
            
        
        })

 


        