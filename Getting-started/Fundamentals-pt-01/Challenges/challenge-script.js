const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = Math.round(massMark / heightMark ** 2).toFixed(1);
const BMIJohn = Math.round(massJohn / (heightJohn * heightJohn)).toFixed(1);
if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's BMI (${BMIJohn})! congrats, Mark, you are a healthier man! 
    John needs to get in shape!`);
} else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's BMI (${BMIMark})! Congrats, John, you are in shape!`);
}

const markHigherBMI = BMIMark > BMIJohn; 
console.log(`Mark's BMI ${BMIMark} is higher than John's BMI ${BMIJohn}. ${markHigherBMI ? 'Mark is a healthier man!' : 'John is a healthier man!'}`);