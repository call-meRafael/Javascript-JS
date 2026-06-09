"use strict";

fetch("https://api.open5e.com/v1/monsters/").then((res) => {
    if (!res.ok) {
        throw new Error(`Failed to get data: (${res.status}) ${res.statusText}`)
    }
    return res.json();
}).then((data) => {
    console.log(data);
});