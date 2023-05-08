class PowerUps{
    constructor(x, y) {
    
        this.x = x;
        this.y = y;
        this.image = new Image();
        this.image.src = "./src/images/coffee1.png";
        this.width = 30;
        this.height = 30;
      }

   
    draw(ctx) {
        this.image.onload = () => {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
      }
    }
}


export default PowerUps;