class Ball {
    constructor(radius, velocity, x, y, paddleWidth) {
        this.radius = radius
        this.x = x
        this.y = y
        this.dx = velocity
        this.dy = -velocity
        this.paddleWidth = paddleWidth
    }
}

Ball.prototype.draw = function () {
    c.beginPath()
    c.fillStyle = this.color
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.fill()
    c.closePath()
}

Ball.prototype.update = function (paddle) {
    // * Reverse if hits the ceiling
    if (this.y - this.radius < 0) this.dy = -this.dy

    // * If hits the ground, loose the game.
    else if (this.y + this.radius > canvas.height) {
        Interface.lives--

        if (Interface.lives === 0) alert('Sorry, you loose!')
        else alert('Better luck next round!')

        init()
    }
    this.y -= this.dy

    //* Reverse if hits a side wall 
    if (this.x + this.radius > canvas.width || this.x - this.radius < 0) this.dx = -this.dx
    this.x += this.dx

    // * If stationary, at start of game, place in center of paddle
    if (Interface.start) Interface.mouseMatch(this, this.paddleWidth / 2)

    // * Launch ball at start of game
    canvas.addEventListener('click', () => {
        if (Interface.start) {
            this.dx = randomNum(-15, 15)
            this.dy = randomNum(-10, -15)
            Interface.start = false
        }
    })

    // * If hits the paddle
    if (Interface.start === false && Interface.insideBox(this, paddle)) {
        this.dy = -this.dy + 1
        this.dx = this.dx + randomNum(-2, 2)
    }

    this.draw()
}
