// Develop a small application in javascript which calculate a weight of an object in a certain planet.
const gravity = {
  mercury: 0.378,
  venus: 0.907,
  earth: 1,
  mars: 0.377,
  jupiter: 2.36,
  saturn: 0.916,
  uranus: 0.889,
  neptune: 1.12,
};

document.addEventListener("DOMContentLoaded", init);

function init() {
  const btn = document.getElementById("calculate");
  const input = document.getElementById("weight");
  const planet = document.getElementById("planet");
  const resultEl = document.getElementById("result");

  btn.addEventListener("click", () => {
    const val = parseFloat(input.value);
    const targetPlanet = planet.value;

    if (isNaN(val)) {
      return alert("Not a number");
    }

    if (!gravity[targetPlanet]) {
      return alert("Planet not found");
    }

    const result = (val * gravity[targetPlanet]).toFixed(2);

    resultEl.innerText = `${result} kg`;
  });
}
