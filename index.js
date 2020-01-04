import { canvas, c, randomColor, colors, lives, score } from './components/canvas'
import Interface from './components/interface/interface'
import Paddle from './components/paddle/paddle'
import Ball from './components/ball/ball'
import Block from './components/blocks/blocks'


let newBall
let newPaddle

let blocks = []

const init = () => {
    // * Clear the state per round
    Interface.start = true //! Remove to Break
    lives.innerHTML = `Lives: ${Interface.lives}`
    let blockX = 0
    let blockY = 0
    blocks = []

    // * Create base objects
    const paddleWidth = 125
    const paddleHeight = 20
    newPaddle = new Paddle(paddleWidth, paddleHeight)
    newBall = new Ball(30, 0, newPaddle.x, canvas.height - (paddleHeight * 2.5), paddleWidth)

    // * Generate Blocks
    for (let i = 0; i < 105; i++) {
        const width = 100
        const height = 30
        const color = randomColor(colors)
        const offsetX = canvas.width * .02
        const offsetY = 20
        const spacing = 15

        const x = blockX + (width / 2) + offsetX
        const y = blockY + (height / 2) + offsetY

        const newBlock = new Block(x, y, width, height, color, offsetX, offsetY, spacing)
        blocks.push(newBlock)

        // * If new block hits edge, go back to start position one line down.
        if (blockX >= canvas.width - (width * 4)) {
            blockX = 0 - width - spacing
            blockY += height + offsetY
        }
        // * Add next block in row.
        blockX += width + spacing
    }
}

const animate = () => {
    requestAnimationFrame(animate)

    // * Elongate tail as speed increases
    if (newBall.dy <= 5) c.fillStyle = `rgba(20, 20, 20, .5)`
    else if (newBall.dy <= 10) c.fillStyle = `rgba(20, 20, 20, .4)`
    else if (newBall.dy <= 15) c.fillStyle = `rgba(20, 20, 20, .3)`
    else if (newBall.dy <= 20) c.fillStyle = `rgba(20, 20, 20, .2)`
    c.fillRect(0, 0, canvas.width, canvas.height)

    // * Render blocks and check their states
    blocks.forEach((block, index) => {
        block.update(newBall)
        if (block.alive == false) blocks.splice(index, 1)
    })

    // * Win and start new game if all block are destroyed
    if (blocks.length === 0) {
        alert("Congratulations, you won!")
        Interface.lives = 3
        Interface.score = 0
        init()
    }

    score.innerHTML = `Score: ${Interface.score}`
    newPaddle.update()
    newBall.update(newPaddle)
}

init()
animate()

export {
    init
}