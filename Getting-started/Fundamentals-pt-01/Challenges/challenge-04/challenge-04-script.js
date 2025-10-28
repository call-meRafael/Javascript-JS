
const calcAvarage = (a, b, c) => (a + b + c) / 3;
console.log(calcAvarage(44, 23, 71));

const scoreDolphins = calcAvarage(44, 23, 71);
const scoreKoalas = calcAvarage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
       
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log('No team won the trophy...');
    }
}

checkWinner(scoreDolphins, scoreKoalas);
checkWinner(576, 111)