let button = document.querySelector("#button");
let name = document.querySelector("#name");
let population = document.querySelector("#population");
let climate = document.querySelector("#climate");
let terrain = document.querySelector("#terrain");
let gravity = document.querySelector("#gravity");

async function getData() {
  updateWithloading();
  try {
    let randomPlanet = Math.floor(Math.random() * 61 + 1);
    let apiUrl = `https://swapi.dev/api/planets/${randomPlanet}/`;
    const res = await fetch(apiUrl);
    const data = await res.json();
    updateInfo(data);
  } catch (error) {
    updateInfoWithError(error);
  }
}

function updateInfo(data) {
  name.innerText = data.name;
  population.innerText = data.population;
  climate.innerText = data.climate;
  terrain.innerText = data.terrain;
  gravity.innerText = data.gravity;
}

function updateInfoWithError(error) {
  name.innerText = `Oh No!!! Something wrong now!`;
  population.innerText = "";
  climate.innerText = "";
  terrain.innerText = "";
  gravity.innerText = "";
}

function updateWithloading() {
  name.innerHTML = `<i class="fas fa-sync fa-spin"></i>`;
  population.innerText = "";
  climate.innerText = "";
  terrain.innerText = "";
  gravity.innerText = "";
}

button.addEventListener("click", getData);
