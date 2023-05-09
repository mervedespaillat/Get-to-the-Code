class Enemies{
    constructor(x, y) {
    
        this.x = x;
        this.y = y;
        this.image = new Image();
        this.image.src = "src/images/twitter-bird-icon.png";
        this.width = 30;
        this.height = 30;

        this.xspeed = 1.5
        this.yspeed = 1
      }

   
    draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height)

    }
}
export default Enemies