class EndFlag{
    constructor(x, y) {
    
        this.x = x;
        this.y = y;
        this.image = new Image();
        this.image.src = "src/images/end.png";
        this.width = 100;
        this.height = 75;
      }

   
    draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);


    }
}
export default EndFlag