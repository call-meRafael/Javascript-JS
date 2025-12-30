
const mensagem = document.querySelector('.message');
/*
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 22;
*/

const secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = secretNumber;


document.querySelector('.btn-check').addEventListener('click', function () {
    let userGuess = Number(document.querySelector('.guess').value);
    console.log(userGuess, typeof userGuess);

    if (!userGuess) {
        mensagem.textContent = 'Escolha um número antes de prosseguir!';
    } else if (userGuess === secretNumber) {
        mensagem.textContent = `Você acertou! O número secreto é ${secretNumber}. Parabéns!`;
    } else if (userGuess > secretNumber) {
        mensagem.textContent = 'Friooo! ❄️ Tente um número menor!'
    } else if (userGuess < secretNumber) {
        mensagem.textContent = 'Está ficando quentee! 🔥 Tente um número maior!'
    }
});
