import Face from "./face";
import Level from "./level";
import Platform from "./platform";
import PowerUps from "./powerups";
import Cloud from "./cloud";
import { InstaEnemy, TwitterEnemy, YoutubeEnemy, Enemy } from "./enemy";


class Game {
  constructor(canvasEl) {
    this.canvas = canvasEl;
    console.log("ol");
    this.canvas.width = 800;
    this.canvas.height = 400;
    this.face = new Face(this.canvas);
    this.ctx = this.canvas.getContext("2d");

    //background music
    this.backgroundMusic = new Audio("src/audio/Space-Jazz.mp3")
    this.musicPaused = false
    
    //Game logic, score, win, lose
    this.score = 0
    this.gameOver = false
    this.gameWin = false
    this.pause = false
    

    // Create bottom platform
    this.levelFloor = [];
    let x = 0;
    for (let i = 0; i < 16; i++) {
      let y = 365;
      this.levelFloor.push(new Level(x, y));
      x += 50;
    }

    this.cloud = [
      new Cloud(50, 20),
      new Cloud(230, 10),
      new Cloud(400, 5),
      new Cloud(550, 20),
    ];

    this.platforms = [
      new Platform(120, 230),
      new Platform(160, 230),
      new Platform(200, 230),

      new Platform(360, 270),
      new Platform(400, 270),

      new Platform(700, 250),
      new Platform(660, 250),
      new Platform(620, 250)
    ];

    this.face.setupInputs();

    this.powers = [new PowerUps(200, 335), new PowerUps(160, 200), new PowerUps(660,220)];
    this.enemies = [new TwitterEnemy(130, 200), new TwitterEnemy(400, 240), new InstaEnemy(300,335), new YoutubeEnemy(0,335)];
  }



  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.stand();
    // this.drawBackground()
    this.drawCanvas();
    this.drawLevel();
    this.drawPlatform();
    this.drawPower();
    this.face.draw(this.ctx);
    this.drawCloud();
    this.face.step();
    this.face.jump();
    this.jumpOnce();
    this.drawEnemy();
    // this.startMusic();
    // this.pauseMusic();

    
    this.drinkCoffee(); 
    // this.restart()

    for(let i= 0; i < this.enemies.length; i++){
        this.enemies[i].move()
    }

    requestAnimationFrame(this.animate.bind(this));
  }


  play() {}

  restart() {}

  gameover() {}

  drawCanvas() {
    this.ctx.fillStyle = "#D8EDF3";
    this.ctx.fillRect(0, 0, 800, 400);
// debugger
    this.ctx.strokeText(`Score: ${this.score}`, 20, 20)
    this.ctx.font = "20px Arial"


  }

  drawLevel() {
    for (let i = 0; i < this.levelFloor.length; i++) {
      this.levelFloor[i].draw(this.ctx);
    }
  }

  drawCloud() {
    for (let i = 0; i < this.cloud.length; i++) {
      this.cloud[i].draw(this.ctx);
    }
  }

    drawEnemy(){
            for (let i = 0; i < this.enemies.length; i++) {
                this.enemies[i].draw(this.ctx);
            }
    }

  drawPlatform() {
    for (let i = 0; i < this.platforms.length; i++) {
      this.platforms[i].draw(this.ctx);
    }
  }

  drawPower() {
    for (let i = 0; i < this.powers.length; i++) {
      this.powers[i].draw(this.ctx);
    }
  }

  stand() {
    this.levelFloor.concat(this.platforms).forEach((ele) => {
      if (
        this.face.dimensions.y + this.face.height + this.face.velocity.y >=
          ele.y &&
        this.face.dimensions.y + this.face.height <= ele.y &&
        this.face.dimensions.x + this.face.width/2 >= ele.x &&
        this.face.dimensions.x + this.face.width/2 <= ele.x + ele.width
      ) {
        this.face.velocity.y = 0;
        this.face.dimensions.y = ele.y - this.face.height;
      }
    });
  }

  jumpOnce(){
    const platform = this.levelFloor.concat(this.platforms)

    for (let i = 0; i < platform.length; i++){
        if(this.face.dimensions.y + this.face.height === platform[i].y &&
            this.face.dimensions.x + this.face.width/2  > platform[i].x && 
            (this.face.dimensions.x + this.face.width/2) < platform[i].x + platform[i].width){
            // debugger
            this.face.jump();
            break;
        }
    }
    
  }

  drinkCoffee(){
    for(let i= 0; i < this.powers.length; i++){
        const coffee = this.powers[i]
        // console.log(this.face.dimensions.y + this.face.height)
        if(this.face.dimensions.y + this.face.height === coffee.y + coffee.height &&
            this.face.dimensions.x + this.face.width/2  > coffee.x &&
            this.face.dimensions.x + this.face.width/2 < coffee.x + coffee.width){
            //    console.log("coffee crush")
            //    debugger
               this.powers = this.powers.slice(0,i).concat(this.powers.slice(i+1))
               this.score += 50
               // add here score up after coffee got eaten
            //    debugger
            }
    }
  }

  //audio

  startMusic(){
    this.backgroundMusic.play()

  }

  pauseMusic(){
    const pause = document.getElementById("pause")
        pause.addEventListener("click", ()=>{

            if(this.musicPaused === false){
                this.backgroundMusic.stop() 
            }
            this.musicPaused = true
  })
}

resumeMusic(){
    const pause = document.getElementById("pause")
    pause.addEventListener("click", ()=>{
        if(musicPaused === true){
            this.backgroundMusic.play() 
        }
        this.musicPaused = false
})
}




//   restart(){
//     const pause = document.getElementById("restart")
//     pause.addEventListener("click", ()=>{
//             this.animate() 
//     })
//   }

}

export default Game;
