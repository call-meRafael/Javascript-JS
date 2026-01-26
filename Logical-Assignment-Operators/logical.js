"use strict";

const rest1 = {
  name: "Capri",
  numGuests: 20,
};

const rest2 = {
  name: "La Piazza",
  owner: "Giovanni Rossi",
};


// // OR assignment operator ( ||= )
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

console.log(rest1);
console.log(rest2);

rest1.numGuests ||= 10;
rest2.numGuests ||= 10;

// // AND assignment operator ( &&= )
rest2.owner = rest2.owner && '<ANONYMOUS>';
rest1.owner &&= '<ANONYMOUS>'; // Falsy pois o owner é undefined
rest2.owner &&= '<ANONYMOUS>';
console.log(rest2);
console.log(rest1);

