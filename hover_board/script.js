const container = document.getElementById('container')
// const colors = ['#e74c3c', '#8e44ad']
const colors = ['#000']
const SQUARES = 1050

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mouseover', () => setColor(square))
  square.addEventListener('mouseout', () => removeColor(square))

  container.appendChild(square)
}

function setColor(e) {
  const color = getRandomColor()
  e.style.background = color
  e.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(e) {

}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)]
}