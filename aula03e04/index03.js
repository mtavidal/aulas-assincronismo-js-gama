//promises e Async/await

//funçoes

function pedirBolo() {
    console.log("Pedindo bolo...");
    return new Promise(
        function(resolve, reject) {
            setTimeout(() => {
                console.log("fazendo bolo...");
                resolve ('Bolo de chocolate');
            }, 1000);
        }
    );
}

function festejar(bolo) {
    console.log("Fazendo festa com " + bolo);
}

async function prepararFesta (){
    //encomendar o bolo
    // let bolo = pedirBolo();
    // return bolo;
    // pedirBolo().then(
    //     function(bolo){
    //         //fazer a festa
    //         festejar(bolo);
    //     }
    // )
    let bolo = await pedirBolo();
    festejar(bolo);
}

function trabalhar() {
    console.log("trabalhando...");
}

function treinar() {
    console.log("treinando...");
}

function viajar() {
    console.log("viajando...");
}

//chamada das funcoes = execuçao do programa


// Preparar a festa
let bolo = prepararFesta();    

// Trabalhar
trabalhar();

// Treinar
treinar();

// Viajar
viajar();

