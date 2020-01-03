import Interface from '../interface/interface'
import { c } from '../canvas'

class Block {
    constructor(x, y, width, height, color, offsetX, offsetY, spacing) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.color = color
        this.offsetX = offsetX
        this.offsetY = offsetY
        this.spacing = spacing
        this.alive = true
    }
}

Block.prototype.draw = function () {
    c.beginPath()
    c.rect(this.x, this.y, this.width, this.height)
    c.fillStyle = this.color
    c.fill()
    c.closePath()
}

Block.prototype.update = function (ball) {
    if (Interface.insideBox(ball, this)) {
        this.alive = false
        Interface.score++
        ball.dy = -ball.dy
    }

    this.draw()
}

export default Block





