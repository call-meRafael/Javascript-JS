"use strict";

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

const whereAmI = (lat, lng) => {
  const error = new Error("Problem with geocoding");


  fetch(
    `https://geocode.maps.co/reverse?lat=${lat}&lon=${lng}&api_key=${apiKey}&accept-language=en`,
  )
    .then((response) => response.json())
    .then((data) => {
      if (data.error)
        throw error;
      console.log(data);
      console.log(`You are in ${data.address.city}, ${data.address.country}`);
    })
    .catch((err) => console.log(err.message));
};

whereAmI(52.508, 13.381);
whereAmI(-3.7847731489382377, -38.625072487324985);
whereAmI(99999999, 99999999999999);
