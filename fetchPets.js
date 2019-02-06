const randomCatURL = "https://aws.random.cat/meow";
const cntr = document.querySelector(".container");

function setImg(imgURL) {
  cntr.style.backgroundImage = `url(${imgURL})`;
}

async function fetchImg(URLToFetch) {
  let response = await fetch(URLToFetch);
  response = await response.json();
  setImg(response.file);
}

fetchImg(randomCatURL);
