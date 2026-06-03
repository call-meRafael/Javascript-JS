"use strict";
const btn = document.querySelector(".btn-country");
const countriesCountainer = document.querySelector(".countries");
const existingCountries = document.querySelectorAll(".country");
const apiKey = "6a1db4d78c85f733177498bada4ff47";

// Coding Challenge #1
// In this challenge you will build a function 'whereAmI' which renders a country only based on GPS coordinates. For that, you will use a second API to geocode coordinates. So in this challenge, you’ll use an API on your own for the first time 😁.

// Your tasks: Part 1
// 1. Create a function 'whereAmI' which takes as inputs a latitude value ('lat') and a longitude value ('lng') (these are GPS coordinates, examples are in test data below).

/*
2. Do “reverse geocoding” of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api. The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do not use the 'getJSON' function we created, that is cheating 😉
*/

/*
3. Once you have the data, take a look at it in the console to see all the attributes that you received about the provided location. Then, using this data, log a message like this to the console: “You are in Berlin, Germany”.
*/

/*
4. Chain a .catch method to the end of the promise chain and log errors to the console 5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does not reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.


*/
const capitalizeFirstLetter = (str) =>
  str[0].toUpperCase() + str.slice(1).toLowerCase();

//Render Country
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

/*
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
    .then((data) => renderCountry(data[0]))
    .catch((err) => console.log(err.message));
};

btn.addEventListener("click", function () {});

whereAmI(52.508, 13.381);
whereAmI(-3.7847731489382377, -38.625072487324985);
whereAmI(99999999, 99999999999999);
*/

const lotteryPromise = new Promise(function (resolve, reject) {
  console.log("Lottery draw is happening 🔮");
  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve("You WIN 💰");
    } else {
      reject(new Error("You lost your money 💩"));
    }
  }, 2000);
});

lotteryPromise.then((res) => console.log(res)).catch((err) => console.log(err));

//Promisifying setTimeout
const wait = (seconds) => {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
};

wait(2)
  .then(() => {
    console.log("I've waited for 2 seconds");
    return wait(1);
  })
  .then(() => console.log("I've waited for 1 second"));

Promise.resolve("abc").then((x) => console.log(x));
Promise.reject(new Error("abc")).catch((x) => console.log(x));

navigator.geolocation.getCurrentPosition(
  (position) => console.log(position),
  (err) => console.log(err),
);
const getPosition = () => {
  return new Promise((resolve, reject) => {
    // navigator.geolocation.getCurrentPosition(
    //   (position) => resolve(position),
    //   (err) => reject(err)
    // );

    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// getPosition().then((pos) => console.log(pos));

const whereAmI = () => {
  getPosition()
    .then((pos) => {
      const { latitude: lat, longitude: lng } = pos.coords;

      return fetch(
        `https://geocode.maps.co/reverse?lat=${lat}&lon=${lng}&api_key=${apiKey}&accept-language=en`,
      );
    })
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
    .then((data) => renderCountry(data[0]))
    .catch((err) => console.log(err.message));
};

btn.addEventListener("click", whereAmI);

/*
PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a Promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.


*/
const imagesContainer = document.querySelector(".images");

const createImage = (imgPath) => {
  return new Promise((resolve, reject) => {
    const img = document.createElement("img");
    img.src = imgPath;

    img.addEventListener("load", () => {
      imagesContainer.append(img);
      resolve(img);
    });
    img.addEventListener("error", () => {
      reject(new Error(`Image failed to load: ${imgPath}`));
    });
  });
};

let currentImage;

createImage("./assets/img-1.jpg")
  .then((img) => {
    currentImage = img;
    console.log(`Image 1 loaded: ${img.src}`);

    return wait(2);
  })
  .then(() => {
    currentImage.style.display = "none";

    return createImage("./assets/img-2.jpg");
  })
  .then((img) => {
    currentImage = img;
    console.log(`Image 2 loaded: ${img.src}`);

    return wait(2);
  })
  .then(() => {
    currentImage.style.display = "none";
  })
  .catch((err) => {
    console.log(err.message);
  });
