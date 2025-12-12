/*
const rafael = {
    firstName: 'Rafael',
    lastName: 'Araujo',
    age: 2025 - 1992,
    job: 'Web Developer',
    hobbies: ['Coding', 'Reading', 'TV shows']
};
console.log(rafael);
console.log(rafael.lastName);
console.log(rafael['lastName']);

const nameKey = 'Name';
console.log(rafael['first' + nameKey])

const interestedIn = prompt('What do you want to know about Rafael? Select one of the following options: firstName, lastName, age, job and hobbies');

if (rafael[interestedIn]) {
    console.log(rafael[interestedIn]);
} else {
    alert('Wrong request! Choose between firstName, lastName, age, job and hobbies');
}

rafael.location = 'Brazil';
rafael['instagram'] = '@_rapharaujo_';
console.log(rafael.firstName);
console.log(rafael.hobbies[0]);

//challenge
const milena = {
    firstName: 'Milena',
    friends: ['Rafael', 'Mary', 'Angela']
}
console.log(milena.firstName + ' has ' + milena.friends.length + ' friends: ' + milena.friends.join(', ') + ' and ' + milena.friends[0] + ' is her best friend!');
*/
/*
const rafael = {
    firstName: 'Rafael',
    lastName: 'Araujo',
    birthYear: 1992,
    job: 'Web Developer',
    hobbies: ['Coding', 'Reading', 'TV shows'],
    hasDriversLicense: false,

    // calcAge: function (birthYear) {
    //     return 2025 - birthYear;
    // }

    // calcAge: function () {
    //     return 2025 - this.birthYear; // this refere-se ao objeto atual (rafael)
    // }

    calcAge: function () {
        this.age = 2025 - this.birthYear;
        return this.age;
    }
};
*/

// console.log(rafael.calcAge(1992));
// // console.log(rafael['calcAge'](1992));
// console.log(rafael.age);

/*
//challenge 
const milena = {
    firstName: 'Milena',
    birthYear: 1997,
    job: 'store clerk',
    hasDriversLicense: false,

    calcTotalAge: function () {
        this.age = 2025 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcTotalAge()}-years old ${this.job}, and she has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
    }
};
console.log(milena.getSummary());
// console.log(`${milena.firstName} is ${this.calcTotalAge()}-years old ${milena['job']}, and has ${milena.hasDriversLicense ? 'a' : 'no'} driver's license`);


*/

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.bmi = Math.floor(this.mass / this.height ** 2).toFixed(1);
        return this.bmi;
    }
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.bmi = Math.floor(this.mass / this.height ** 2).toFixed(1);
        return this.bmi;
    }
}
mark.calcBMI();
john.calcBMI();
console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI which is (${john.bmi})!`);
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI which is (${mark.bmi})!`);
}