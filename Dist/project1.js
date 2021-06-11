const textEl = document.getElementById("text")
const text = 'František Petrův'
let idx = 1

writeText()

function writeText() {
    textEl.innerText = text.slice(0, idx)
    idx++
    setTimeout(writeText, 150)
}