// o Js é uma linguagme assíncrona

function impremePrimeiro() {
    console.log("primeiro");
}

function impremeSegundo() {
    setTimeout( () => console.log("segundo"), 1000); //espera 1 segundo
}

function impremeTerceiro() {
    console.log("terceiro");
}

impremePrimeiro();
impremeSegundo();
impremeTerceiro();