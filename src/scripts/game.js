import Face from "./face";
import Level from "./level";
import Platform from "./platform";
import PowerUps from "./powerups";
import Cloud from "./cloud";
import { InstaEnemy, TwitterEnemy, YoutubeEnemy, Enemy } from "./enemy";
import LevelEnd from "./levelend";

class Game {
  constructor(canvasEl) {
    this.canvas = canvasEl;
    console.log("ol");
    this.canvas.width = 800;
    this.canvas.height = 400;
    this.face = new Face(this.canvas);
    this.ctx = this.canvas.getContext("2d");
    

    //background music
    this.backgroundMusic = new Audio("src/audio/Space-Jazz.mp3");
    this.backgroundMusic.autoplay = false;
    this.musicPaused = false;
    this.setUpMusic();

    this.scrollOffset = 0
    //Game logic, score, win, lose
    this.live = 3;
    this.score = 0;
    this.gameOver = false;
    // this.gameWin = false;
    this.pause = false;

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

      new Cloud(750, 20),
      new Cloud(930, 10),
      new Cloud(1100, 5),
      new Cloud(1250, 20),

      new Cloud(1450, 20),
      new Cloud(1630, 10),
      new Cloud(1800, 5),
      new Cloud(1950, 20),


      new Cloud(2150, 20),
      new Cloud(2330, 10),
      new Cloud(2500, 5),
      new Cloud(2650, 20),


      // new Cloud(2850, 20),
      // new Cloud(3030, 10),
      new Cloud(3200, 5),
      new Cloud(3350, 20),


    ];

    this.levelEnd = new LevelEnd (3030,65)

    this.platforms = [
      new Platform(120, 230),
      new Platform(160, 230),
      new Platform(200, 230),

      new Platform(360, 270),
      new Platform(400, 270),

      new Platform(700, 250),
      new Platform(660, 250),
      new Platform(620, 250),

      new Platform(860, 270),
      new Platform(900, 270),

      new Platform(1100, 250),
      new Platform(1140, 250),
      new Platform(1180, 250),

      new Platform(1340, 230),
      new Platform(1380, 230),

      new Platform(1500, 210),
      new Platform(1540, 210),
      new Platform(1580, 210),
 
      new Platform(1700, 180),
      new Platform(1740, 180),
      new Platform(1780, 180),

      new Platform(1900, 200),
      new Platform(1940, 200),
      
      new Platform(2100, 250),
      new Platform(2140, 250),

      new Platform(2300, 250),
      new Platform(2440, 230),
      new Platform(2580, 210),
      new Platform(2720, 190),
      new Platform(2860, 170),
      new Platform(3000, 150),
      new Platform(3040, 150),
      new Platform(3080, 150),
      new Platform(3120, 150),
      new Platform(3160, 150),
      

    ];

    this.face.setupInputs();

    this.powers = [
      new PowerUps(200, 335),
      new PowerUps(160, 200),
      new PowerUps(660, 220),


      new PowerUps(1950, 170),
      new PowerUps(1720, 150),
      new PowerUps(870, 240),
      new PowerUps(1540, 180),
      new PowerUps(3000, 335),
      new PowerUps(1400, 335),
      new PowerUps(2000, 335),
    ];
    this.enemies = [
      new YoutubeEnemy(0, 335),
      new YoutubeEnemy(1000, 335),
      new YoutubeEnemy(500, 335),

      new TwitterEnemy(130, 200),
      new TwitterEnemy(400, 240),
      new TwitterEnemy(600, 220),
      new TwitterEnemy(1000, 240),
      new TwitterEnemy(1800, 210),
      new TwitterEnemy(2500, 200),
      
      new InstaEnemy(300, 335),
      new InstaEnemy(800, 335),
      new InstaEnemy(2500, 335),
    ];
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.stand();
    // this.drawBackground()
    this.drawCanvas();
    this.drawLevel();
    this.drawPlatform();
    this.drawPower();
    this.drawLevelEnd();
    this.face.draw(this.ctx);
    this.drawCloud();
    this.face.step();
    // this.face.jump();
    this.jumpOnce();
    this.drawEnemy();
    // this.moveBackground();
    this.collapseEnemy();
    this.parallax();
    this.gameWin();
    // this.startMusic();
    // this.pauseMusic();

    this.drinkCoffee();
    // this.restart()

    for (let i = 0; i < this.enemies.length; i++) {
      this.enemies[i].move();
    }

    requestAnimationFrame(this.animate.bind(this));
  }

  play() {}

  restart() { 
    
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
      new Platform(620, 250),
  
    ];

    this.face.setupInputs();

    this.powers = [
      new PowerUps(200, 335),
      new PowerUps(160, 200),
      new PowerUps(660, 220),
    ];
    this.enemies = [
      new YoutubeEnemy(0, 335),
      new TwitterEnemy(130, 200),
      new TwitterEnemy(400, 240),
      new InstaEnemy(300, 335),
    ];
    this.face.dimensions.x = 100
    this.face.dimensions.y = 300
  }

  gameover() {}

  drawCanvas() {
    this.ctx.fillStyle = "#D8EDF3";
    this.ctx.fillRect(0, 0, 800, 400);
    // debugger
    this.ctx.strokeText(`Score: ${this.score}`, 20, 20);
    this.ctx.strokeText(`Live: ${this.live}`, 700, 20);

    this.ctx.font = "20px Arial";
  }

  drawLevel() {
    for (let i = 0; i < this.levelFloor.length; i++) {
      this.levelFloor[i].draw(this.ctx);
      
    }
  }

  drawLevelEnd(){
    this.levelEnd.draw(this.ctx);
  
  }

  drawCloud() {
    for (let i = 0; i < this.cloud.length; i++) {
      this.cloud[i].draw(this.ctx);
    }
  }

  drawEnemy() {
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

  parallax(){
    if(this.face.rightKey === true && this.face.dimensions.x < 400){
      this.face.velocity.x = 5

    } else if((this.face.leftKey === true && this.face.dimensions.x > 10 ) ||( this.face.leftKey === true && this.scrollOffset === 0)){
      this.face.velocity.x = -5
    }
    else{
      this.face.velocity.x = 0
                if (this.face.rightKey === true) {
                    this.scrollOffset += 4
                    // this.levelFloor.forEach(level => {
                    //     level.x -= 4
                    // })
                    this.platforms.forEach(platform => {
                        platform.x -=4
                    })
                    this.cloud.forEach(cloud => {
                        cloud.x -=4
                    })
                    this.levelEnd.x -=4
                    this.powers.forEach(power =>{
                      power.x -=4
                    })
                  }
            
                else if (this.face.leftKey === true && this.scrollOffset>=0) {
                //   this.levelFloor.forEach(level => {
                //     level.x +=4
                // })
                this.scrollOffset -= 4
                this.platforms.forEach(platform => {
                    platform.x +=4
                })
                this.levelEnd.x +=4
                this.cloud.forEach(cloud => {
                    cloud.x +=4
                })
                this.powers.forEach(power =>{
                  power.x += 4
                })
              }
    }
  }

  stand() {
    this.levelFloor.concat(this.platforms).forEach((ele) => {
      if (
        this.face.dimensions.y + this.face.height + this.face.velocity.y >=
          ele.y &&
        this.face.dimensions.y + this.face.height <= ele.y &&
        this.face.dimensions.x + this.face.width / 2 >= ele.x &&
        this.face.dimensions.x + this.face.width / 2 <= ele.x + ele.width
      ) {
        this.face.velocity.y = 0;
        this.face.dimensions.y = ele.y - this.face.height;
      }
    });
  }

  jumpOnce() {
    const platform = this.levelFloor.concat(this.platforms);

    for (let i = 0; i < platform.length; i++) {
      if (
        this.face.spaceKey &&
        this.face.dimensions.y + this.face.height === platform[i].y &&
        this.face.dimensions.x + this.face.width / 2 > platform[i].x &&
        this.face.dimensions.x + this.face.width / 2 <
          platform[i].x + platform[i].width
      ) {
        console.log("jumped");
        this.face.jump();
        break;
      }
    }
  }

  drinkCoffee() {
    for (let i = 0; i < this.powers.length; i++) {
      const coffee = this.powers[i];
      // console.log(this.face.dimensions.y + this.face.height)
      if (
        this.face.dimensions.y + this.face.height ===
          coffee.y + coffee.height &&
        this.face.dimensions.x + this.face.width / 2 > coffee.x &&
        this.face.dimensions.x + this.face.width / 2 < coffee.x + coffee.width
      ) {
        //    console.log("coffee crush")
        this.powers = this.powers.slice(0, i).concat(this.powers.slice(i + 1));
        this.score += 50;
        // add here score up after coffee got eaten
      }
    }
  }

  gameWin() {
      if (
        this.face.dimensions.y + this.face.height ===
          this.levelEnd.y + this.levelEnd.height &&
        this.face.dimensions.x + this.face.width / 2 > this.levelEnd.x &&
        this.face.dimensions.x + this.face.width / 2 < this.levelEnd.x + this.levelEnd.width
      ) {
        console.log("you win")
      }
    }
  

  //ENEMIES
  collapseEnemy() {
    for (let i = 0; i < this.enemies.length; i++) {
      const enemy = this.enemies[i];
      const face = this.face;
      let xmin = face.dimensions.x;
      let xmax = face.dimensions.x + face.width;
      let ymin = face.dimensions.y;
      let ymax = face.dimensions.y + face.height;

      if (
        !(
          xmin >= enemy.x + 25 ||
          xmax <= enemy.x ||
          ymin >= enemy.y + 25 ||
          ymax <= enemy.y
        )
      ) {
        this.enemies = this.enemies
          .slice(0, i)
          .concat(this.enemies.slice(i + 1));
        this.live -= 1;
      } else if (
        face.dimensions.y + face.height + face.velocity.y >= enemy.y &&
        face.dimensions.y + face.height <= enemy.y &&
        face.dimensions.x + face.width / 2 >= enemy.x &&
        face.dimensions.x + face.width / 2 <= enemy.x + enemy.width
      ) {
        this.enemies = this.enemies
          .slice(0, i)
          .concat(this.enemies.slice(i + 1));
        this.score += 50;
      }
    }
  }

  //audio

  startMusic() {
    this.backgroundMusic.play();
  }

  setUpMusic() {
    const pause = document.getElementById("pause");
    pause.addEventListener("click", () => {
      if (this.musicPaused === false) {
        this.backgroundMusic.pause();
        this.musicPaused = true;
      } else {
        this.backgroundMusic.play();
        this.musicPaused = false;
      }
    });
  }

  //BACKROUND
  moveBackground() {
    (this.x = 0), (this.y = 0), this.width, this.height;
    this.render = function () {
      this.ctx.draw(this.canvas, this.x--, 0);
      if (this.x <= -499) {
        this.x = 0;
      }
    };
  }

  //   restart(){
  //     const pause = document.getElementById("restart")
  //     pause.addEventListener("click", ()=>{
  //             this.animate()
  //     })
  //   }

  startGame(){
    const playGame = document.getElementById("play-btn");
    playGame.addEventListener("click", () => {
      
      if (this.musicPaused === false) {
        this.backgroundMusic.pause();
        this.musicPaused = true;
      } else {
        this.backgroundMusic.play();
        this.musicPaused = false;
      }
    });
  }
}

export default Game;
