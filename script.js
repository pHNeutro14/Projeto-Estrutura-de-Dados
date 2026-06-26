import { bubblesort } from "./algoritmos/bubbleSort.js";

let vetor = [];

document.getElementById("btnGerar").addEventListener("click", gerarCartas);
document.getElementById("btnOrdenar").addEventListener("click", ordenar);

function gerarCartas() {
    const tamanho = Number(document.getElementById("tamanho").value);

    if (tamanho < 1 || tamanho > 20) {
        alert("Escolha um valor entre 1 e 20");
        return;
    }

    vetor = [];

    for (let i = 0; i < tamanho; i++) {
        vetor.push(Math.floor(Math.random() * 100));
    }

    renderizarCartas();
}

function renderizarCartas() {
    const mesa = document.getElementById("mesa");
    mesa.innerHTML = "";

    for (let i = 0; i < vetor.length; i++) {
        const carta = document.createElement("div");
        carta.classList.add("carta");
        carta.innerText = vetor[i];
        mesa.appendChild(carta);
    }
}

document.getElementById("tamanho").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        gerarCartas();
    }
})


function ordenar() {
    const algoritmo = document.getElementById("algoritmo").value;

    switch (algoritmo) {
        case "bubble":

            const resultado = bubblesort(vetor);

            vetor = resultado.vetor;

            renderizarCartas();

            console.log(resultado.comparacoes);
            console.log(resultado.trocas);

            break;
    }
}
