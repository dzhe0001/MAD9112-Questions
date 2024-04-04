// Q1: Visualize the ten most populated countries and the ten most spoken languages in the world using DOM

let population = [];
let languages = [];

document.addEventListener("DOMContentLoaded", init);

function init() {
  const contentElement = document.getElementById("stat");
  const populationBtn = document.querySelector(".population");
  const languagesBtn = document.querySelector(".languages");

  populationBtn.addEventListener("click", showPopulationChart);
  languagesBtn.addEventListener("click", showLanguagesChart);

  showAllCountries(); //Showing all countries by default after page is loaded

  function showAllCountries() {
    const df = new DocumentFragment();

    countries_data.forEach((item) => {
      const div = document.createElement("div");
      div.classList.add("country");

      div.innerHTML = `<img src="${item.flag}" alt="${item.name}">
                <h1 class="title">
                ${item.name}
                </h1>
                <ul>
                    <li>Capital: ${item.capital}</li>
                    <li>Languages: ${item.languages.join(", ")}</li>
                    <li>Population: ${item.population}</li>
                </ul>`;

      df.append(div);
    });

    contentElement.append(df);
  }

  function showLanguagesChart() {
    const data = [];

    //preparing array of data before passing it to the universal function showBar() that actually build a bar chart on the page
    countries_data.forEach((item) =>
      data.push({ name: item.name, value: item.population })
    );

    showBar(data);
  }

  function showPopulationChart() {
    const data = [];

    //preparing array of data before passing it to the universal function showBar() that actually build a bar chart on the page
    countries_data.forEach((item) => {
      item.languages.forEach((lang) => {
        //searching for the language in case if it was already added to the data array
        const existingLang = data.findIndex((el) => {
          return lang === el.name;
        });

        //if index == -1 – element doesn't exist in the array, so we check if its >=0 then we just increase the number of countries that speek this language
        if (existingLang >= 0) {
          data[existingLang].value++;
        } else {
        //if it wasn't found (index === -1), then we just create a new object of this lenguage and push it to the array data
          data.push({
            name: lang,
            value: 1,
          });
        }
      });
    });

    showBar(data);
  }

  function showBar(data) {
    data = data.sort((a, b) => {
      return b.value - a.value;
    });

    const maxVal = data[0].value;
    const df = new DocumentFragment();

    for (let i = 0; i < 10; i++) {
        //calculating the width of the bar depending on the current value and the 
        //maximum value. We can assume that element with index 0 has the biggest 
        //value because we sorted it before diving into this loop
      const width = (data[i].value / maxVal) * 100; 

      const div = document.createElement("div");
      div.classList.add("element");
      div.innerHTML = `<p class="name">${data[i].name}</p>
          <div class="bar">
              <div class="bar-value" style="width: ${width}%"></div>
          </div>
          <p class="value">${data[i].value}</p>`;

      df.append(div);
    }

    contentElement.innerHTML = "";
    contentElement.append(df);
  }
}