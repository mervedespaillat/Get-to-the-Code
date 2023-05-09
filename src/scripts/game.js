import Face from "./face";
import Level from "./level";
import Platform from "./platform";
import PowerUps from "./powerups";
import Cloud from "./cloud";
import Enemies from "./enemies";

class Game {
  constructor(canvasEl) {
    this.canvas = canvasEl;
    console.log("ol");
    this.canvas.width = 800;
    this.canvas.height = 400;
    // this.canvas.setAttribute('style', "position: absolute;  left: 50%;margin-left:-400px; top: 50%;margin-top:-300px; border:2px solid blue")
    this.face = new Face(this.canvas);

    // this.level = new Level(0,350)
    this.ctx = this.canvas.getContext("2d");
    // this.background = new Image ()
    // this.background.src = "src/images/5246723.jpg"
    // this.background.width = 1024
    // this.background.height = 1000

    this.levelFloor = [];
    // Create bottom platform
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
    ];

    this.face.setupInputs();

    this.powers = [new PowerUps(200, 335), new PowerUps(160, 205)];
    this.enemies = [new Enemies(130, 200), new Enemies(400, 240)];
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.stand();
    // this.drawBackground()
    this.drawCanvas();
    this.drawLevel();
    this.drawPlatform();
    this.drawPower();
    this.drawCloud();
    this.drawEnemies();
    this.face.draw(this.ctx);
    this.face.step();
    // this.face.jump();
    this.jumpOnce();

   

    requestAnimationFrame(this.animate.bind(this));
  }

  play() {}

  restart() {}

  gameover() {}

  // drawBackground(){
  //     this.ctx.drawImage(this.background, 0, 0, this.background.width, this.background.height)
  // }

  drawCanvas() {
    this.ctx.fillStyle = "#D8EDF3";
    this.ctx.fillRect(0, 0, 800, 400);
    // this.ctx.globalAlpha = 0.0;
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

  drawEnemies() {
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

  // stand(){
  //     for(let i = 0; i < this.platforms.length; i++){
  //    if(this.face.dimensions.y + this.face.height <= this.platforms[i].dimensions.y) {
  //     this.face.velocity.y = 0
  //    }
  // }
  // }

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
// console.log(platform[17].x)
    // console.log(platform[0].y)
    console.log(this.face.dimensions.y + this.face.height)
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

  enemyMove(){
     // for(let i = 0; i < this.enemies.length; i++){
    //     this.enemies[i].enemyMove()
    // }
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

// detectPlayerPlatfromCollison(){
//     //for loop is better, her platfrom u check eger face platfrom un uzerinde mi bunlar face this.pos.y+this.this.height === this.pos.y => bu platfrom
//     //
// }

export default Game;
