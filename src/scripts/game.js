import Face from './face';
import Level from './level';

class Game {
    constructor(canvasEl){
        this.canvas = canvasEl
        console.log("ol")
        this.canvas.width = 500;
        this.canvas.height = 400;
        this.face = new Face(this.canvas.width, this.canvas.height)
        
        this.level = new Level()
        this.ctx = this.canvas.getContext("2d")
        this.ctx.fillStyle = "beige";
        this.ctx.fillRect(0, 0, 500, 400);
    }

play(){

}

restart(){

}

gameover(){

}

animate(){

}

}










// document.addEventListener("DOMContentLoaded", function(){
// const main = document.getElementById('main');
// new Example(main)

// const canvasEl = document.getElementById("main-canvas")
// canvasEl.width = 700
// canvasEl.height = 500

// const ctx = canvasEl.getContext("2d")
// ctx.fillStyle = "beige"
// ctx.fillRect(50,50, 700, 500)




// })

export default Game;