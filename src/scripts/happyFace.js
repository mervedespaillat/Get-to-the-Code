class HappyFace{
    constructor(x, y) {
    
        this.x = x;
        this.y = y;
        this.image = new Image();
        this.image.src = "src/images/happiness.png";
        this.width = 50;
        this.height = 50;
      }

   
    draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);


    }
}
export default HappyFace