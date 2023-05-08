import Game from './game'
class Level{
    constructor(x, y) {
    
        this.x = x;
        this.y = y;
        this.image = new Image();
        this.image.src = "src/images/binary-code7.png";
        this.width = 50;
        this.height = 50;
      }

    draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}

    // draw(ctx) {
    //     const img = new Image();
    //     img.src = "./src/images/binary-code7.png";
    //     img.onload = () => {
    //         // When the happyFace is loaded, draw it onto the canvas
    //         ctx.drawImage(img, 0, 350, 50, 50);
    //       };    
    //     }
 



export default Level;