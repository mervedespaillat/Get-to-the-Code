class Face {
    constructor(width, height){

        this.dimensions = {
            x: width / 3,
            y: height / 2
        }
        this.width = 50
        this.height = 50
    }
    draw(){
        ctx.fillStyle ="blue"
        ctx.fillRect(this.dimensions.x,this.dimensions.y,this.width,this.height)
    }
}

export default Face;

