class Platform{
    constructor(x, y) {
    
        this.x = x;
        this.y = y;
        this.image = new Image();
        this.image.src = "src/images/binary-code6.png";
        this.width = 40;
        this.height = 40;
      }

   
    draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}


export default Platform;