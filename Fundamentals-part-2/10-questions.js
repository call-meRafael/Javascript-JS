
/* 1 - Confira se o array está vazio e adicione um item ao array. */
/*
const freezer = [];
function freezerContent(freezer) {

    if (freezer.length === 0) {

        freezer.unshift('Budweiser');
        return `Seu freezer estava vazio, mas agora uma ${freezer[0]} está gelando!`;
    } 
};
console.log(freezer, freezerContent(freezer));
*/
/* 1.1 - Desenvolva uma função que receba um array de números e adicione um valor fixo (como 0) ao -final- só se o tamanho for impár, retornando o array equilibrado para paridade, e pratique testes lógicos para validar o comportamento condicional. */
/*
const list = [1, 2, 3, 4, 5, 6, 7];
function addFixedNumber(list) {
    
    if (list.length % 2 !== 0) {
        
        list.push(0);
        return `Your list of '${list.join(', ')}' is now balanced in pairs.`;
    } else {
        return `Your list of '${list.join(', ')}' is already arranged in pairs.`;
    }
}

console.log(list, addFixedNumber(list));
*/

/*
// Desafio opcional

const colors = ['red', 'yellow', 'green',];
function addColorWhite(colors) {
    if(colors.length % 2 !== 0) {
        colors.push('white');
    }
    return colors;
}
function ifColorsAreEven(colors) {
    if (colors.length > 6) {
        colors.unshift('black');
    }
    return colors;
}

function addColors(colors) {

    const applyBright = addColorWhite(colors);
    const applyBlack = ifColorsAreEven(colors);

    if (colors.length % 2 !== 0) {
        
        return applyBright;
    } else if (colors.length > 6 ) {

        return applyBlack;
    }
    return colors;

}

console.log(addColors(colors));

*/



/* --------------------------------EXERCÍCIOS PRÁTICOS----------------------------------- */

// 1. CRIE UMA FUNÇÃO QUE RECEBA UM ARRAY VAZIO E ADICIONE UM ITEM FIXO (COMO INÍCIO) AO FINAL DO ARRAY SE O MESMO ESTIVER VAZIO, RETORNE O ARRAY AGORA POPULADO E, VALIDE A CONDICIONAL COM TESTES PARA FIXAR DETECÇÃO DE AUSÊNCIA.

const cestaDeCompras = [];
function adicionarItem(cestaDeCompras) {

    if (cestaDeCompras.length === 0) {

        cestaDeCompras.push('breads');
        return `Your shopping basket was empty, lets add some ${cestaDeCompras[0]}!`;
    } else if (cestaDeCompras.length === 1) {

        cestaDeCompras.unshift('butter');
        return `Your shopping basket already has ${cestaDeCompras.join(', ')}!`;
    } else if (cestaDeCompras.length === 2) {

        cestaDeCompras.unshift('apples');
        cestaDeCompras.join(', and')
        return `Our basket now has the last item: ${cestaDeCompras[0]}`;
    }
    return cestaDeCompras;
}


console.log(cestaDeCompras, adicionarItem(cestaDeCompras));
console.log(cestaDeCompras, adicionarItem(cestaDeCompras));
console.log(cestaDeCompras, adicionarItem(cestaDeCompras));




// 2. DESENVOLVA UMA FUNÇÃO QUE RECEBA DOIS ARRAYS E UNA O SEGUNDO AO PRIMEIRO SOMENTE SE O PRIMEIRO ARRAY POSSUIR MENOS DE 3 ITENS, RETORNANDO O RESULTADO EXPANDIDO (ARRAYS SOMADOS) E TESTE PARA ACONRAR A CONDICIONAL DE LIMITE DE ITENS.

const circuloDeConversa = ['Rafael', 'Milena'];
const convidados = ['Jarbson', 'Mary']
function expandirGrupo(circuloDeConversa, convidados) {


    if (circuloDeConversa.length < 3) {
        return `O grupo de conversação aumentou. Antes formado por ${circuloDeConversa.join(', ')}, agora é formado por ${circuloDeConversa.concat(convidados).join(', ')}.`;
    } else {
        return `O grupo de conversação está fechado!`;
    }
}
console.log(circuloDeConversa, expandirGrupo(circuloDeConversa, convidados));
