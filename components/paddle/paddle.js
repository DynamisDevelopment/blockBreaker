import Interface from '../interface/interface'
import { canvas, c } from '../canvas'

class Paddle {
    constructor(width, height) {
        this.width = width
        this.height = height
        this.x = canvas.width / 2
        this.y = canvas.height - this.height
    }
}

Paddle.prototype.draw = function () {
    c.beginPath()
    c.rect(this.x, this.y, this.width, this.height)
    c.fillStyle = "#0095DD"
    c.fill()
    c.closePath()
}

Paddle.prototype.update = function () {
    Interface.mouseMatch(this)
    this.draw()
}

export default Paddle