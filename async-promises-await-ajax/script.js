"use strict";

const btn = document.querySelector(".btn-country");
const countriesCountainer = document.querySelector(".countries");
const existingCountries = document.querySelectorAll(".country");
const apiKey = "6a1db4d78c85f733177498bada4ff47";

//////////////////////////////////////////
// Old way of use async ajax
/*
const getcountryData = function(country) {
    const request = new XMLHttpRequest();
    request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
    // request.open("GET", "https://www.apicountries.com/countries/brazil");
    request.send();
    console.log(request.responseText);

    request.addEventListener('load', function() {

        const [data] = JSON.parse(this.responseText);
        console.log(data);

        const html = `
        <article class="country">
            <img class="country__img" src="${data.flags.png}" />
            <div class="country__data">
            <h3 class="country__name">${data.name.nativeName.por.official}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(data.population / 1000000).toFixed(1)}M people</p>
            <p class="country__row"><span>🗣️</span>${data.languages.por}</p>
            <p class="country__row"><span>💰</span>${data.currencies.BRL.symbol} ${data.currencies.BRL.name}</p>
            </div>
        </article>
        `

        countriesCountainer.insertAdjacentHTML('beforeend', html);
        countriesCountainer.style.opacity = 1;
    })
}
getcountryData('brazil');
*/

/*
const renderCountry = function(data) {
    const html = `
    <article class="country">
        <img class="country__img" src="${data.flags.png}" />
        <div class="country__data">
            <h3 class="country__name">${data.name.nativeName.por.official}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(data.population / 1000000).toFixed(1)}M people</p>
            <p class="country__row"><span>🗣️</span>${data.languages.por}</p>
            <p class="country__row"><span>💰</span>${data.currencies.BRL.symbol} ${data.currencies.BRL.name}</p>
        </div>
    </article>
    `

    countriesCountainer.insertAdjacentHTML('beforeend', html);
    countriesCountainer.style.opacity = 1;

}

const getCountryAndNeighbour = function(country) {
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
    request.send();

    request.addEventListener('load', function() {
        const [ data ] = JSON.parse(this.responseText);
        console.log(data);

        // render country
        renderCountry(data);

        // get neighbour country
        const neighbour = data.borders?.[0];

        if (!neighbour) return;

        const request2 = new XMLHttpRequest();
        request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
        request2.send();

        request2.addEventListener('load', function() {
            const data2 = JSON.parse(this.responseText);
            console.log(data2);

            renderCountry(data2);
        })
    })
};

getCountryAndNeighbour('brazil');

*/

// Old way of use async ajax
/*
const request = new XMLHttpRequest();
request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
request.send();
*/
const getJSONData = (url, errorMsg = "Something went wrong!") => {
  return fetch(url).then((response) => {
    if (response.ok) {
      throw new Error(`${errorMsg} (${response.status})`);
    }

    return response.json();
  });
};

const capitalizeFirstLetter = (str) =>
  str[0].toUpperCase() + str.slice(1).toLowerCase();

const renderError = (msg) => {
  countriesCountainer.insertAdjacentText("beforeend", msg);
  countriesCountainer.style.opacity = 1;
};

const renderCountry = function (data, className = "") {
  if (Array.isArray(data)) {
    data = data[0];
  }

  const currencies = data.currencies || {};
  const languages = data.languages || "Idioma não disponível";

  // Object.values() transforma o objeto em um array para acessarmos os valores enumerados, no caso, [0].
  const currencyObj = Object.values(data.currencies || {})[0];
  const language = Object.values(data.languages || {})[0];

  // const flag = Object.values(data.flags || {})[0];
  // const countryName = Object.values(data.name || {})[0];

  const currencyName = capitalizeFirstLetter(currencyObj.name);

  const html = `
    <article class="country ${className}">
        <img class="country__img" src="${data.flags?.png}" />
        <div class="country__data">
            <h3 class="country__name">${data.name?.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(data.population / 1000000).toFixed(1)}M people</p>
            <p class="country__row"><span>🗣️</span>${language}</p>
            <p class="country__row"><span>💰</span>${currencyObj.symbol || ""} ${currencyName || ""}</p>
        </div>
    </article>
    `;
  countriesCountainer.insertAdjacentHTML("beforeend", html);
  countriesCountainer.style.opacity = 1;
};

// const request = fetch(`https://restcountries.com/v3.1/name/portugal`);
// console.log(request);

// const getCountryData = (country) => {
//   // Country 1
//   fetch(`https://restcountries.com/v3.1/name/${country}`, { cache: "no-store" })
//     .then((response) => {
//       console.log(response);
//       if (!response.ok) {
//         throw new Error(`Country  not found (${response.status})`);
//       }
//       return response.json();
//     })
//     .then((data) => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders?.[0];

//       if (!neighbour) return;

//       // Country 2
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`, {
//         cache: "no-store",
//       });
//     })
//     .then((response) => response.json())
//     .then((data) => renderCountry(data, "neighbour"))
//     .catch((err) => {
//       console.log(`${err} 💥`);
//       renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesCountainer.style.opacity = 1;
//     });
// };
// getCountryData('portugal');

const getCountryData = (country) => {
  // Country 1

  getJSONData(`https://restcountries.com/v3.1/name/${country}`, "Country not found")
    .then((data) => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];

      if (!neighbour) throw new Error('No neighbour found!');

      // Country 2
      return getJSONData(`https://restcountries.com/v3.1/alpha/${neighbour}`, "Country not found");
    })
    .then((response) => response.json())
    .then((data) => renderCountry(data, "neighbour"))
    .catch((err) => {
      console.log(`${err} 💥`);
      renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesCountainer.style.opacity = 1;
    });

};
const dataSup = fetch(`https://restcountries.com/v3.1/name/argentina`).then(
  (response) => response.json(),
);
console.log(dataSup);

btn.addEventListener("click", function () {
  if (existingCountries.length >= 2)
    return console.log("Limite de 2 Países atingido!");

  getCountryData("dskajkajsd");
});



// Coding Challenge #1

const whereAmI = (lat, lng) => {
  // const error = new Error("Problem with geocoding");

  fetch(
    `https://geocode.maps.co/reverse?lat=${lat}&lon=${lng}&api_key=${apiKey}&accept-language=en`,
  )
    .then((response) => {
      if (!response.ok)
        throw new Error(`${response.status}: ${response.statusText}`);
      return response.json();
    })
    .then((data) => {
      if (data.error) {
        const apiMSG =
          typeof data.error === "object" ? data.error.message : data.error;
        throw new Error(`API error: ${apiMSG}`);
      }
      console.log(data);
      console.log(`You are in ${data.address.city}, ${data.address.country}`);

      return fetch(
        `https://restcountries.com/v3.1/name/${data.address.country}`,
      );
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`${response.status}: ${response.statusText}`);
      }

      return response.json();
    })
    .catch((err) => console.log(err.message));
};


const whereIam = async (country) => {
  await fetch(`https://restcountries.com/v3.1/name/${country}`, { cache: "no-store" })

}


