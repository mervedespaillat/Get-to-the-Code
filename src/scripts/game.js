import Face from './face';
import Level from './level';
import Platform from './platform';
import PowerUps from './powerups';

class Game {
    constructor(canvasEl){
        this.canvas = canvasEl
        console.log("ol")
        this.canvas.width = 500;
        this.canvas.height = 400;
        this.face = new Face()

        // this.level = new Level(0,350)
        this.ctx = this.canvas.getContext("2d")

      this.levelFloor = [
            new Level (0,366),
            new Level (50,366),
            new Level (100,366),
            new Level (150,366),
            new Level (200,366),
            new Level (250,366),
            new Level (300,366),
            new Level (350,366),
            new Level (400,366),
            new Level (450,366)
        ]

        this.platforms = [
            new Platform (120,230),
            new Platform (160,230),
            new Platform (200,230),
    
    
            new Platform (360,270),
            new Platform (400,270),
        ]
       
       
        this.face.setupInputs()

     

        this.powerUps =[
            new PowerUps (250,335),
            new PowerUps (160,205)
        ]
        for(let i = 0; i < this.powerUps.length; i++){
            this.powerUps[i].draw(this.ctx)
        }
       
    }

  animate(){
    this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height)
    this.drawBackground()
    this.drawLevel()
    this.drawPlatform()
    this.face.draw(this.ctx)
    this.face.step()

    console.log("jsdjksf")
    requestAnimationFrame(this.animate.bind(this))
  }

play(){

}

restart(){

}

gameover(){

}

drawBackground(){
    this.ctx.fillStyle = "beige";
    this.ctx.fillRect(0, 0, 500, 400);
}

drawLevel(){
   
    for(let i = 0; i < this.levelFloor.length; i++){
        this.levelFloor[i].draw(this.ctx)
    }

}

drawPlatform(){
   
    for(let i = 0; i < this.platforms.length; i++){
        this.platforms[i].draw(this.ctx)
    }
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