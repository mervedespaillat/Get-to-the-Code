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

    this.xspeed = 10;
    this.yspeed =  9;
    this.friction = 0.6;
    this.maxSpeed = 10;

    this.active = true;

    this.leftKey = false;
    this.rightKey = false;
    this.spaceKey = false;
    this.img = new Image();
    this.img.src = "src/images/tired.png";
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

  setupInputs() {
    document.addEventListener("keydown", (event) => {
      event.preventDefault();
      if (event.key === "ArrowRight") {
        this.rightKey = true;
      } else if (event.key === "ArrowLeft") {
        this.leftKey = true;
      } else if (event.key === " ") {
        this.spaceKey = true;
      }
    });
    document.addEventListener("keyup", (event) => {
      if (event.key === "ArrowRight") {
        this.rightKey = false;
      } else if (event.key === "ArrowLeft") {
        this.leftKey = false;
      } else if (event.key === " ") {
        this.spaceKey = false;
      }
    });
  }

//   step() {
//     if (this.active) {
//       //Horizantal

//       if (this.rightKey) {

//         //Slow Down
//         this.velocity.x = this.xspeed;
//       } else if (this.leftKey) {
//         this.velocity.x = -this.xspeed;
//       }
//        else if (this.spaceKey) {
//         this.velocity.y = -this.yspeed;
//       } else if(this.dimensions.y + this.height + this.velocity.y < this.canvas.height) {
//         // this.velocity.y = 1
//         this.velocity.y += CONSTANT.gravity
       
//       }
//       else {
//         this.velocity.x = 0;

//         this.velocity.y = 0;
//       }
      

//       //Vertical

//       this.dimensions.x += this.velocity.x;
//       this.dimensions.y += this.velocity.y;
//     }
//   }

// ccccptttt 

step() {
    if (this.active) {
      //Horizantal
      if (this.rightKey) {
        //Slow Down
        this.velocity.x = this.xspeed;
      } else if (this.leftKey) {
        this.velocity.x = -this.xspeed;
      } else {
        this.velocity.x = 0;
      }
      
      //Vertical
      if (this.spaceKey && this.dimensions.y > 0) {
        this.velocity.y = -this.yspeed;
      } else if (this.dimensions.y + this.height + this.velocity.y < this.canvas.height) {
        this.velocity.y += CONSTANT.gravity;
      } else {
        this.velocity.y = 0;
      }
      
      // Update position
      this.dimensions.x += this.velocity.x;
      this.dimensions.y += this.velocity.y;
      
      // Keep face inside canvas
      if (this.dimensions.x < 0) {
        this.dimensions.x = 0;
      } else if (this.dimensions.x + this.width > this.canvas.width) {
        this.dimensions.x = this.canvas.width - this.width;
      }
    }
  }
  


// jump(){
//     if (this.) {
//      this.velocity.y = -this.yspeed;
//     } else if(!this.spaceKey) {
//     this.dimensions.y + this.height + this.velocity.y < this.canvas.height
//     }
// }
}


export default Face;
