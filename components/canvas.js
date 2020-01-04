let canvas, c, lives, score

if (process.env.TESTCANVAS) {
    const { createCanvas } = require('canvas')
    canvas = createCanvas(200, 200)
    c = canvas.getContext('2d')
    lives = document.createElement('div')
    score = document.createElement('div')
} else {
    canvas = document.querySelector('#myCanvas')
    c = canvas.getContext('2d')
    score = document.querySelector('.score')
    lives = document.querySelector('.lives')
}

canvas.width = innerWidth
canvas.height = innerHeight

addEventListener('resize', () => {
    canvas.width = innerWidth
    canvas.height = innerHeight
})

const randomColor = colors => colors[Math.floor(Math.random() * colors.length)];
const randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

const colors = [
    '#9C4AFF',
    '#8C43E6',
    '#7638C2',
    '#5E2C99',
    '#492378'
]

export {
    canvas,
    c,
    randomColor,
    randomNum,
    colors,
    lives,
    score
}