import { bubblesort } from "./algoritmos/bubblesort.js";
import { selectionsort } from "./algoritmos/selectionSort.js";
import { insertionsort } from "./algoritmos/insertionSort.js";
import { quicksort } from "./algoritmos/quickSort.js";
import { shellsort } from "./algoritmos/shellSort.js";
import { heapsort } from "./algoritmos/heapSort.js";
import { mergesort } from "./algoritmos/mergeSort.js";

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
});

function ordenar() {
    const algoritmo = document.getElementById("algoritmo").value;

    switch (algoritmo) {

        case "bubble": {

            const inicio = performance.now();

            const resultado = bubblesort(vetor);

            vetor = resultado.vetor;

            const fim = performance.now();

            renderizarCartas();

            document.getElementById("tempo").innerText =
                `${(fim - inicio).toFixed(3)} ms`;

            document.getElementById("comparacoes").innerText =
                resultado.comparacoes;

            document.getElementById("trocas").innerText =
                resultado.trocas;

            break;
        }

        case "selection": {

            const inicio = performance.now();

            const resultado = selectionsort(vetor);

            vetor = resultado.vetor;

            const fim = performance.now();

            renderizarCartas();

            document.getElementById("tempo").innerText =
                `${(fim - inicio).toFixed(3)} ms`;

            document.getElementById("comparacoes").innerText =
                resultado.comparacoes;

            document.getElementById("trocas").innerText =
                resultado.trocas;

            break;
        }

        case "insertion": {

            const inicio = performance.now();

            const resultado = insertionsort(vetor);

            vetor = resultado.vetor;

            const fim = performance.now();

            renderizarCartas();

            document.getElementById("tempo").innerText =
                `${(fim - inicio).toFixed(3)} ms`;

            document.getElementById("comparacoes").innerText =
                resultado.comparacoes;

            document.getElementById("trocas").innerText =
                resultado.trocas;

            break;
        }

        case "quick": {

            const inicio = performance.now();

            const resultado = quicksort(vetor);

            vetor = resultado.vetor;

            const fim = performance.now();

            renderizarCartas();

            document.getElementById("tempo").innerText =
                `${(fim - inicio).toFixed(3)} ms`;

            document.getElementById("comparacoes").innerText =
                resultado.comparacoes;

            document.getElementById("trocas").innerText =
                resultado.trocas;

            break;
        }

        case "shell": {

            const inicio = performance.now();

            const resultado = shellsort(vetor);

            vetor = resultado.vetor;

            const fim = performance.now();

            renderizarCartas();

            document.getElementById("tempo").innerText =
                `${(fim - inicio).toFixed(3)} ms`;

            document.getElementById("comparacoes").innerText =
                resultado.comparacoes;

            document.getElementById("trocas").innerText =
                resultado.trocas;

            break;
        }

        case "heap": {
            const inicio = performance.now();

            const resultado = heapsort(vetor);

            vetor = resultado.vetor;

            const fim = performance.now();

            renderizarCartas();

            document.getElementById("tempo").innerText =
                `${(fim - inicio).toFixed(3)} ms`;

            document.getElementById("comparacoes").innerText =
                resultado.comparacoes;

            document.getElementById("trocas").innerText =
                resultado.trocas;

            break;
        }

        case "merge": {
            const inicio = performance.now();

            const resultado = mergesort(vetor);

            vetor = resultado.vetor;

            const fim = performance.now();

            renderizarCartas();

            document.getElementById("tempo").innerText =
                `${(fim - inicio).toFixed(3)} ms`;

            document.getElementById("comparacoes").innerText =
                resultado.comparacoes;

            document.getElementById("trocas").innerText =
                resultado.trocas;

            break;
        }
    }
}