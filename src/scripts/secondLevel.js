class SecondLevel {
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
    this.winGame = false;
    this.pause = false;

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
}