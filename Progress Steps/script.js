const progress = document.getElementById("progress")
const prev = document.getElementById("prev")
const next = document.getElementById("next")
const circles = document.querySelectorAll(".circle")

let currentActive = 1

next.addEventListener("click", () => {
  currentActive++
  console.log(currentActive)

  if (currentActive > circles.length) {
    currentActive = circles.length
  }

  update()
})

prev.addEventListener("click", () => {
  currentActive--

  if (currentActive < 1) {
    currentActive = 1
  }

  update()
})

function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add("active")
    } else {
      circle.classList.remove("active")
    }
  })

  const actives = document.querySelectorAll(".active")

  progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + "%"

  if (currentActive === 1) {
    prev.disabled = true
  } else if (currentActive === circles.length) {
    next.disabled = true
  } else {
    prev.disabled = false
    prev.disabled = false
  }
}

let animateButton = function (e) {
  e.preventDefault;
  //reset animation
  e.target.classList.remove('animate');
  e.target.classList.add('animate');
  setTimeout(function () {
    e.target.classList.remove('animate');
  }, 700);
};

let bubblyButtons = document.getElementsByClassName("bubbly-button");
for (let i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener('click', animateButton, false);
}