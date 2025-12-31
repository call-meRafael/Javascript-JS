
const mensagem = document.querySelector('.message');
let score = 7;
let highscore = 0;



let secretNumber = Math.trunc(Math.random() * 20) + 1;


// ======= Botão de verificação do jogo ====== //
document.querySelector('.btn-check').addEventListener('click', function () {
    let userGuess = Number(document.querySelector('.guess').value);
    console.log(userGuess, typeof userGuess);
    

    // Se não houver número digitado
    if (!userGuess) {
        mensagem.textContent = 'Escolha um número antes de prosseguir!';

        // Se o número digitado for igual ao número secreto
    } else if (userGuess === secretNumber) {
        document.querySelector('.number').textContent = secretNumber;
        mensagem.textContent = `Você acertou! O número secreto é ${secretNumber}. Parabéns!`;

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.guess').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '12rem'

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
            document.querySelector('.hs-message').textContent = `Você precisou de ${7 - score} chance(s) para vencer! 🎉`;
            
        }


        // Se o número digitado for maior que o número secreto
    } else if (userGuess > secretNumber) {

        // Se as chances forem maiores que 1
        if (score > 1 ) {
            mensagem.textContent = 'Friooo! ❄️ Tente um número menor!'
            score--;
            document.querySelector('.score').textContent = score;

            // Se as chances acabarem
        } else {
            mensagem.textContent = 'Você perdeu! 😩 Tente novamente!'
            document.querySelector('.score').textContent = 0;
        }

        // Se o número digitado pelo usuário for menor que o número secreto
    } else if (userGuess < secretNumber) {

        // Se as chances forem maiores que 1
        if (score > 1) {
            mensagem.textContent = 'Está ficando quentee! 🔥 Tente um número maior!'
            score--;
            document.querySelector('.score').textContent = score;

            // Se as chances acabarem
        } else {
            mensagem.textContent = 'Você perdeu! 😩 Tente novamente!'
            document.querySelector('.score').textContent = 0;
        }
    }
});


// ===== Botão de reiniciar o jogo ====== //
const resetBtn = document.querySelector('.btn-again');
resetBtn.addEventListener('click', function () {
    score = 7;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
    // document.querySelector('.highscore').textContent = '0';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.guess').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = 'auto';
    mensagem.textContent = 'Comece a Adivinhar...';
    
    
})


