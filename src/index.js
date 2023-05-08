import Game from './scripts/game';

    window.addEventListener("load", function(){
         const canvasEl = document.getElementById("main-canvas")

          const game =   new Game(canvasEl)
            game.animate()
            console.log("hello")
            
        
        })

        // const canvasEl = document.getElementById("main-canvas")
        // canvasEl.width = 1100
        // canvasEl.height = 600
        
        // const ctx = canvasEl.getContext("2d")
        // ctx.fillStyle = "beige"
        // ctx.fillRect(280,100, 1100, 600)
 


        