const canvas = document.getElementById("myCanvas")
const c = canvas.getContext("2d")

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

