const button = document.getElementById('click');
const type = document.getElementById('type');
const image = document.getElementById('image');

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

async function loadDogs() {
  const res = await fetch('https://dog.ceo/api/breeds/image/random')
  const json = await res.json()
  return json
}

button.addEventListener("click", async () => {
  let dogs = []

  try {
    dogs = await loadDogs()
  } catch (e) {
    console.log(e)
  }

  image.src = dogs.message
  console.log(dogs)
})