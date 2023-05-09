import Face from "./face";
import Level from "./level";
import Platform from "./platform";
import PowerUps from "./powerups";
import Cloud from "./cloud";
import { Enemy } from "./enemy";


class Game {
  constructor(canvasEl) {
    this.canvas = canvasEl;
    console.log("ol");
    this.canvas.width = 800;
    this.canvas.height = 400;
    this.face = new Face(this.canvas);
    this.ctx = this.canvas.getContext("2d");

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
    ];

    this.face.setupInputs();

    this.powers = [new PowerUps(200, 335), new PowerUps(160, 205)];
    this.enemies = [new Enemy(130, 200), new Enemy(400, 240)];
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
    this.drawEnemy()
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

}

export default Game;
