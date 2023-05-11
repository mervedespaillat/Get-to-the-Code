class LevelEnd{
    constructor(x, y) {
    
        this.x = x;
        this.y = y;
        this.image = new Image();
        this.image.src = "src/images/levelEnd.png";
        this.width = 150;
        this.height = 100;
      }

   
    draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);


    }
}
export default LevelEnd