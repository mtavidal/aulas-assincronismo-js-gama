//Fetch

function getCatFact() {
    let endpoint = 'https://catfact.ninja/fact';
    fetch(endpoint)
        .then(response => {
            if (!response.ok){
                return new Error("Requisição falhou!")
            }
            return response.json();
        })
        .then(data => {
            let catFactDiv = document.getElementById('cat-fact');
            catFactDiv.textContent = data.fact;
        })
        .catch(error => {
            console.error("Requisição falhou com o error: " + error);
            let catFactDiv = document.getElementById('cat-fact');
            catFactDiv.textContent = "Requisição falhou com o error: " + error;
        })
}

getCatFact();

function getAge(name) {
    let endpoint = "https://api.agify.io?name=" + name;

    fetch(endpoint)
        .then(response => response.json())
        .then(data => {
            let ageSpam = document.getElementById("age-value");
            ageSpam.textContent = name + " é " + data.age;
        })
}

let ageForm = document.getElementById("age-form");

ageForm.onsubmit = (event) => {
    event.preventDefault();
    let name = document.getElementById("name");
    getAge(name.value);
    name.value = "";
}

