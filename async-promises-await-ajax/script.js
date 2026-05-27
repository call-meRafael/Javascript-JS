"use strict";

const btn = document.querySelector(".btn-country");
const countriesCountainer = document.querySelector(".countries");

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
const renderCountry = function (data, className = '') {
    const html = `
    <article class="country ${className}">
        <img class="country__img" src="${data.flags.png}" />
        <div class="country__data">
            <h3 class="country__name">${data.name.nativeName.por.official}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(data.population / 1000000).toFixed(1)}M people</p>
            <p class="country__row"><span>🗣️</span>${data.languages.por}</p>
            <p class="country__row"><span>💰</span>${data.currencies[0].symbol} ${data.currencies[0].name}</p>
        </div>
    </article>
    `;
    countriesCountainer.insertAdjacentHTML('beforeend', html);
    countriesCountainer.style.opacity = 1;
}

// const request = fetch(`https://restcountries.com/v3.1/name/portugal`);
// console.log(request);

const getCountryData = (country) => {
    // Country 1
  fetch(`https://restcountries.com/v3.1/name/${country}`).then(response => response.json())
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];

      if (!neighbour) return;
      
      // Country 2
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(response => response.json())
    .then(data => renderCountry(data, 'neighbour'))
};
getCountryData('portugal');


const dataSup = fetch(`https://restcountries.com/v3.1/name/portugal`).then(response => response.json());
console.log(dataSup);
