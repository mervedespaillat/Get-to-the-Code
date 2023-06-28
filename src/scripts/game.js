import Face from "./face";
import Level from "./level";
import Platform from "./platform";
import PowerUps from "./powerups";
import Cloud from "./cloud";
import { InstaEnemy, TwitterEnemy, YoutubeEnemy, Enemy } from "./enemy";
import LevelEnd from "./levelend";
import Birds from "./birds";
import EndFlag from "./endFlag";
import HappyFace from "./happyFace";


class Game {
  
  constructor(canvasEl) {
    this.canvas = canvasEl;
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
    this.winGame = false;

    this.paused = false;
    this.playerMovementEnabled = true;
    const playPauseGameButton = document.getElementById("pause");
    playPauseGameButton.addEventListener("click", () => {
    this.togglePause(); // Call the togglePause() method when the button is clicked
  });

    // this.setupPauseButton()
    // Create bottom platform
    this.levelFloor = [];
    let x = 0;
    for (let i = 0; i < 16; i++) {
      let y = 365;
      this.levelFloor.push(new Level(x, y));
      x += 50;
    }

    this.endFlag = new EndFlag(2730, 155)
    

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
      new Platform(2340, 250),
      new Platform(2440, 230),
      new Platform(2480, 230),
      new Platform(2580, 210),
      new Platform(2620, 210),
      new Platform(2720, 190),
      new Platform(2760, 190),
      new Platform(2860, 170),
      new Platform(2900, 170),

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

    // this.birds = [
    //   new Birds(300, 205),
    //   new Birds(1000, 180),
    //   new Birds(500, 250)
    // ]


    this.enemies = [
      new YoutubeEnemy(300, 335),
      new YoutubeEnemy(1000, 335),
      new YoutubeEnemy(500, 335),


      new TwitterEnemy(130, 200),
      new TwitterEnemy(400, 240),
      new TwitterEnemy(600, 220),
      new TwitterEnemy(1000, 240),
         
      new InstaEnemy(500, 335),
      new InstaEnemy(800, 335),
      new InstaEnemy(750, 335),  
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
    this.gameWin();
    // this.moveBackground();
    this.collapseEnemy();
    this.parallax();
    this.drawFlag();
    this.drinkCoffee();
    // this.restartGame()
    // this.startMusic();
    // this.pauseMusic();
    // this.restart()

    if (this.paused) {
      requestAnimationFrame(this.animate.bind(this));
      return;
    }

    for (let i = 0; i < this.enemies.length; i++) {
      this.enemies[i].move();
      if(this.live < 0 ){
        this.endGame()
        return;
      }
    }

    if(this.winGame){
      return;
    }

  
    requestAnimationFrame(this.animate.bind(this));
  }


  togglePause() {
    this.paused = !this.paused;
    if (this.paused ) {
      this.backgroundMusic.pause(); 
      this.playerMovementEnabled = false; 
    } else {
      this.backgroundMusic.play();
    }
  }


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
    this.live = 3
    this.score = 0
  }

  endGame() {
    this.ctx.font = "bold 60px Arial";
    this.ctx.fillStyle = "green";
    this.ctx.textAlign = "center";
    this.ctx.fillText("Game Over!", this.canvas.width / 2, this.canvas.height / 2);
    this.gameOver = true;
  }

  drawCanvas() {
    this.ctx.fillStyle = "#D8EDF3";
    this.ctx.fillRect(0, 0, 800, 400);
    // debugger
    this.ctx.strokeText(`Score: ${this.score}`, 50, 20);
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

  drawFlag(){
    this.endFlag.draw(this.ctx)
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
    if (this.paused) {
      this.face.velocity.x = 0
      return; 
    }
    if(this.face.rightKey === true && this.face.dimensions.x < 400){
      this.face.velocity.x = 5

    } else if((this.face.leftKey === true && this.face.dimensions.x > 10 ) ||( this.face.leftKey === true && this.scrollOffset === 0)){
      this.face.velocity.x = -5
    }
    else{
      
      this.face.velocity.x = 0
                if (this.face.rightKey === true) {
                    this.scrollOffset += 4
                
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
                    this.enemies.forEach(enemy =>{
                      enemy.x -= 4
                    })
                  }
            
                else if (this.face.leftKey === true && this.scrollOffset>=0) {
        
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
    if (this.paused) {
      return; 
    }
    const platform = this.levelFloor.concat(this.platforms);
  
    for (let i = 0; i < platform.length; i++) {
      if (
        this.face.spaceKey &&
        this.face.dimensions.y + this.face.height === platform[i].y &&
        this.face.dimensions.x + this.face.width / 2 > platform[i].x &&
        this.face.dimensions.x + this.face.width / 2 <
          platform[i].x + platform[i].width
      ) {
        this.face.jump();
        break;
      }
    }
  }

  drinkCoffee() {
    for (let i = 0; i < this.powers.length; i++) {
      const coffee = this.powers[i];
      if (
        this.face.dimensions.y + this.face.height ===
          coffee.y + coffee.height &&
        this.face.dimensions.x + this.face.width / 2 > coffee.x &&
        this.face.dimensions.x + this.face.width / 2 < coffee.x + coffee.width
      ) {
        this.powers = this.powers.slice(0, i).concat(this.powers.slice(i + 1));
        this.score += 50;
      }
    }
  }

  gameWin() {
    const happy = new HappyFace(this.face.dimensions.x, this.face.dimensions.y)
      if (
        this.face.dimensions.x < this.levelEnd.x + this.levelEnd.width &&
          this.face.dimensions.x + this.face.width > this.levelEnd.x &&
        this.face.dimensions.y <  this.levelEnd.y + this.levelEnd.y &&
        this.face.dimensions.y + this.face.height < this.levelEnd.y
      ) {
      this.ctx.font = "bold 60px Arial";
      this.ctx.fillStyle = "green";
      this.ctx.textAlign = "center";
      this.ctx.fillText("You Win!", this.canvas.width / 2, this.canvas.height / 2);
      happy.draw(this.ctx)
      this.winGame = true;
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
        this.face.reset()
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
    const audio = document.getElementById("audio");
    audio.addEventListener("click", () => {
      if (this.backgroundMusic.paused) {
        this.backgroundMusic.play();
        audio.classList.remove("paused"); 
      } else {
        this.backgroundMusic.pause();
        audio.classList.add("paused");
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

    // restartGame(){
    //   const pause = document.getElementById("restart-btn")
    //   pause.addEventListener("click", ()=>{
    //     this.face.dimensions.x = 10;
    //     this.face.velocity.x = 0;
      
    //     // Reset scroll offset
    //     this.scrollOffset = 0;
      
    //     // Reset platform positions
    //     this.platforms.forEach((platform, index) => {
    //       platform.x = platformPositions[index];
    //     });
      
    //     // Reset cloud positions
    //     this.cloud.forEach((cloud, index) => {
    //       cloud.x = cloudPositions[index];
    //     });
      
    //     // Reset level end position
    //     this.levelEnd.x = levelEndPosition;
      
    //     // Reset power positions
    //     this.powers.forEach((power, index) => {
    //       power.x = powerPositions[index];
    //     });
      
    //     // Reset enemy positions
    //     this.enemies.forEach((enemy, index) => {
    //       enemy.x = enemyPositions[index];
    //     });
      
    //     // Restart the game loop
    //     requestAnimationFrame(this.animate.bind(this));
    //   });
    // }
 

  startGame(){
    const myDiv = document.getElementById("mainpage-container")
    const pageDiv = document.getElementById("mainpage")
    const playGame = document.getElementById("play-btn");

    playGame.addEventListener("click", () => {
     myDiv.style.display = "none";
     pageDiv.style.display = "none";
     const game = new Game(this.canvas)
     game.animate()
    });
    if(this.live === 0){
      myDiv.style.display = "block";
      pageDiv.style.display ="block";

    }
  }

  // playAgain(){
  //   const myDiv = document.getElementById("mainpage-container")
  //   const pageDiv = document.getElementById("mainpage")
  //  const myHome= document.getElementById("home")
  //  myHome.addEventListener("click", ()=>{
  //   myDiv.style.display = "block";
  //   pageDiv.style.display ="block";
  //  })
  // }

  // restartGame(){
  //   const that = this
  //   const myRestart = document.getElementById("restart-btn")
  //   myRestart.addEventListener("click", ()=> {
  //     that.restart()
  //   })
  // }
  

}

export default Game;
