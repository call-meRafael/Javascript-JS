const lampadaInteligente = {
    ligada: false,
    corLuzAtual: 'Branca',

    interruptor: function () {
        this.ligada = !this.ligada;
        return this.ligada ? 'Lâmpada Ligada!' : 'Lâmpada Apagada!';
    },

    alterarCorDaLuz: function (novaCor) {
        if (this.ligada) {
            this.corLuzAtual = novaCor;
        }
        return `A nova cor da luz é ${this.corLuzAtual}!`;
    }
}
console.log(lampadaInteligente.interruptor());
console.log(lampadaInteligente.alterarCorDaLuz('Amarela'));


const btnOnOff = document.querySelector('#btn-interruptor');
const lampada = document.querySelector('#lampada-visual');
const txtStatus = document.querySelector('#texto-status');

btnOnOff.addEventListener('click', function () {
    lampadaInteligente.interruptor();

    if (lampadaInteligente.ligada === true) {
        lampada.style.backgroundColor = 'yellow';
        txtStatus.textContent = 'Lâmpada Acesa!';
    } else {
        lampada.style.backgroundColor = 'gray';
        txtStatus.textContent = 'Lâmpada Apagada!';
    }
});