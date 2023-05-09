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

export default Level;