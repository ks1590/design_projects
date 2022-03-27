const textBox = document.getElementById("text-box")

const bgImg = new Image()
bgImg.src = "TT_compact_sample.jpeg"

const canvas = document.getElementById("cv")
const context = canvas.getContext("2d")

bgImg.onload = () => {
    context.drawImage(bgImg, 0, 0)
}

textBox.addEventListener("input", () => {
    drawText(textBox.value)
})

function drawText(text) {
    context.clearRect(0, 0, canvas.width, canvas.height)
    context.drawImage(bgImg, 0, 0)
    context.fillStyle = 'black'
    context.font = "60px 'Kosugi Maru'"
    context.textAlign = "center"
    context.textBaseline = "middle"
    context.fillText(text, 550, 250, 900);
}

$('#test_font_0').on('click', function () {
    const current_label = this.closest("label")
    $(current_label).addClass("selected")
    console.log(current_label)
});