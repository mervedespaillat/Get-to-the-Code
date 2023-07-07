import Platform from "./platform";

const CONSTANT = {
    gravity: 0.5
 }

class Face {
  constructor(canvas) {
    this.canvas = canvas
    this.dimensions = {
      x: 100,
      y: 300, 
    };

    this.velocity = {
      x: 0,
      y: 1,
    };

    this.width = 50;
    this.height = 50;

    this.xspeed = 5;
    this.yspeed =  10.5;
    this.friction = 0.6;
    this.maxSpeed = 10;

    this.active = true;

    // this.moveLeft = false
    // this.moveRight = false
    this.leftKey = false;
    this.rightKey = false;
    this.spaceKey = false;
    this.upKey = false;
    
      this.img = new Image();
      this.img.src = "src/images/tired.png";

    // this.img = new Image();
    // this.img.src = "src/images/tired.png";
  }

  draw(ctx) {
    ctx.drawImage(
      this.img,
      this.dimensions.x,
      this.dimensions.y,
      this.width,
      this.height
    );
  }

  reset(){
    this.dimensions = {
      x: 100,
      y:300
    }
  }

  setupInputs() {
    document.addEventListener("keydown", (event) => {
      event.preventDefault();
      if (event.key === "ArrowRight") {
        this.rightKey = true;
      } else if (event.key === "ArrowLeft") {
        this.leftKey = true;
      } else if (event.key === " ") {
        this.spaceKey = true;
      } else if(event.key === "ArrowUp"){
        this.upKey = true;
      }
    });
    document.addEventListener("keyup", (event) => {
      if (event.key === "ArrowRight") {
        this.rightKey = false;
      } else if (event.key === "ArrowLeft") {
        this.leftKey = false;
      } else if (event.key === " ") {
        this.spaceKey = false;
      } else if( event.key === "ArrowUp"){
        this.upKey = false;
      }
    });
  }


step() {
    if (this.active) {
      // Update position
      this.dimensions.x += this.velocity.x;
      this.dimensions.y += this.velocity.y;
      this.velocity.y += CONSTANT.gravity;


      //Horizantal
      if (this.rightKey) {
        this.velocity.x = this.xspeed;
      } else if (this.leftKey) {
        this.velocity.x = -this.xspeed;
      } else {
        this.velocity.x = 0;

      }

    
      // Keep face inside canvas only for horizantal
      if (this.dimensions.x < 0) {
        this.dimensions.x = 0;
      } else if (this.dimensions.x + this.width > this.canvas.width) {
        this.dimensions.x = this.canvas.width - this.width;
      }


    }
  }
  
jump(){
    
      //Vertical
      if ( (this.spaceKey && this.dimensions.y > 0) || (this.upKey && this.dimensions.y > 0)) {
        this.velocity.y = -this.yspeed;
      } else if (this.dimensions.y + this.height + this.velocity.y < this.canvas.height) {
        this.velocity.y += CONSTANT.gravity;
      } else {
        this.velocity.y = 0;
        
      }
}
}

export default Face;
