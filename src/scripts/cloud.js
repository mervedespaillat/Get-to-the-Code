class Cloud{
    constructor(x, y) {
    
        this.x = x;
        this.y = y;
        this.image = new Image();
        this.image.src = "src/images/cloud.png";
        this.width = 200;
        this.height = 150;
      }

   
    draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);


    }
}
export default Cloud