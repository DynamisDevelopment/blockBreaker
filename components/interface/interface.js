import { canvas, c } from '../canvas'

const Interface = {
    score: 0,
    lives: 3,
    start: true,
    mouseMatch: function (thing, extraSpace) {
        if (extraSpace) canvas.addEventListener('mousemove', (e) => Interface.start ? thing.x = e.clientX + extraSpace : '')
        else canvas.addEventListener('mousemove', (e) => thing.x = e.clientX)
    },
    insideBox: function (ball, box) {
        const insideBoxX = ball.x <= box.x + box.width && ball.x >= box.x - box.width
        const insideBoxY = ball.y <= box.y + box.height && ball.y >= box.y - box.height

        if (insideBoxX && insideBoxY) return true
        else return false
    }
}

export default Interface
