//callbacks - chamada de retorno ao final, resolve o problema do assincronismo, torna sincrono, precisa ter cuidado
//em excesso.
//callback hell - desosrganização do programa, pois descentraliza o controle, descentralização das chamadas
// o programa principal só tem o começo.

function passo3(callback){
    setTimeout( () => {
        console.log("Passo 3"), 1000
        callback();
    });
}

function passo4() {
    console.log("Passo 4");
}

//Passo1
console.log("Passo 1");

//Passo2
console.log("Passo 2");

//Passo3
passo3(passo4);

//Passo4
