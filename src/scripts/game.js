import Face from './face';
import Level from './level';
import Platform from './platform';
import PowerUps from './powerups';

class Game {
    constructor(canvasEl){
        this.canvas = canvasEl
        console.log("ol")
        this.canvas.width = 800;
        this.canvas.height = 400;
        // this.canvas.setAttribute('style', "position: absolute;  left: 50%;margin-left:-400px; top: 50%;margin-top:-300px; border:2px solid blue")
        this.face = new Face(this.canvas)

        // this.level = new Level(0,350)
        this.ctx = this.canvas.getContext("2d")
        // this.background = new Image ()
        // this.background.src = "src/images/5246723.jpg"
        // this.background.width = 1024
        // this.background.height = 1000

      this.levelFloor = []
        // Create bottom platform
        let x = 0
            for(let i = 0; i< 16; i++){
                let y = 366
                this.levelFloor.push(new Level (x, y))
                 x+= 50
            }
        

        this.platforms = [
            new Platform (120,230),
            new Platform (160,230),
            new Platform (200,230),
    
    
            new Platform (360,270),
            new Platform (400,270),
        ]
       
        this.face.setupInputs()

     

        this.powers =[
            new PowerUps (200,335),
            new PowerUps (160,205)
        ]
        
       
    }

  animate(){
    this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height)
    // this.drawBackground()
    this.drawCanvas()
    this.drawLevel()
    this.drawPlatform()
    this.face.draw(this.ctx)
    this.face.step()
    this.drawPower()
    

    requestAnimationFrame(this.animate.bind(this))
  }

play(){

}

restart(){

}

gameover(){

}

// drawBackground(){
//     this.ctx.drawImage(this.background, 0, 0, this.background.width, this.background.height)
// }

drawCanvas(){
    this.ctx.fillStyle = "#B5D5F1"
    this.ctx.fillRect(0, 10, 800, 600);
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

drawPower(){
    for(let i = 0; i < this.powers.length; i++){
        this.powers[i].draw(this.ctx)
    }
}

stand(){
    for(let i = 0; i < this.platforms.length; i++){
   if(this.face.dimensions.y + this.face.height <= this.platforms[i].dimensions.y) {
    this.face.velocity.y = 0

   }
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