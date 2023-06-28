import Platform from "./platform";

const CONSTANT = {
    gravity: 0.5
}

export class Enemy{
    constructor(x, y) {
    
        // this.frameX = 0;
        // this.frameY = 0;
        // this.fps = 20
        // this.frameInterval = 1000/this.fps
        // this.frameTimer = 0
        // this.deltaTime = (new Date().getTime() - lastFrameTimeStamp)/1000;


        this.x = x
        this.y = y
        this.image = new Image();
        this.image.src = "src/images/twitter-bird-icon.png";
        this.width = 30;
        this.height = 30;

        this.velocity = {
            x: 0,
            y: 1,
          };

        this.xspeed = 1.5
        this.yspeed = 1
      }

  //  update(){
  //   this.x += this.speedX
  //   this.y += this.speedY
  //   if(this.frameTimer > this.frameInterval){
  //       this.frameTimer = 0
  //       if(this.frameX < this.maxFrame) this.frameX++
  //       else this.frameX =0
  //   } else {
  //       this.frameTimer += this.deltaTime
  //   }
  //  }

    draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height)

    }
  
    // move() {
    //     this.x += this.velocity.x;
    //     this.y += this.velocity.y;
    
    //     // Check if enemy is on platform
    //     if (this.y + this.height >= platform.y && this.y < platform.y + platform.height) {
    //       // Check if enemy is falling off the platform
    //       if (this.x + this.width < platform.x || this.x > platform.x + platform.width) {
    //         this.velocity.y = 1; // Start falling
    //       } else {
    //         this.velocity.y = 0; // Stop falling
    //       }
    //     } else {
    //       this.velocity.y += 0.1; // Apply gravity
    //     }
    //   }

    move(canvas){
      this.x += this.xspeed

      if (this.x < 0) {
        this.x = 0;
      } else if (this.x + this.width > canvas.width) {
        this.x = this.canvas.width - this.width;
      }
    }


  
}


export class TwitterEnemy extends Enemy{
    constructor(x,y){
      super()
      this.x = x
      this.y = y
      this.image = new Image();
      this.image.src = "src/images/twitter-bird-icon.png";
      this.width = 30;
      this.height = 30;

      this.velocity = {
          x: 0,
          y: 1,
        };

      this.xspeed = 1
      this.yspeed = 1
    }
move(){
  this.x += this.xspeed
}
}

export class InstaEnemy extends Enemy{
  constructor(x,y){
    super()
    this.x = x
    this.y = y
    this.image = new Image();
    this.image.src = "src/images/instagram.png";
    this.width = 30;
    this.height = 30;

    this.velocity = {
        x: 0,
        y: 1,
      };

    this.xspeed = 0.8
    this.yspeed = 1
  }
move(){
this.x -= this.xspeed
}
}

export class YoutubeEnemy extends Enemy{
  constructor(x,y){
    super()
    this.x = x
    this.y = y
    this.image = new Image();
    this.image.src = "src/images/youtube.png";
    this.width = 30;
    this.height = 30;

    this.velocity = {
        x: 0,
        y: 1,
      };

    this.xspeed = 0.5
    this.yspeed = 1
  }
move(){
this.x += this.xspeed
}
}