function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  strokeWeight(150)
  if (mouseIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY)
  }
}