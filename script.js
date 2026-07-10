import { bubblesort } from "./algoritmos/bubblesort.js";
import { selectionsort } from "./algoritmos/selectionSort.js";
import { insertionsort } from "./algoritmos/insertionSort.js";
import { quicksort } from "./algoritmos/quickSort.js";
import { shellsort } from "./algoritmos/shellSort.js";
import { heapsort } from "./algoritmos/heapSort.js";
import { mergesort } from "./algoritmos/mergeSort.js";

let vetor = [];
let cartas = [];

document.getElementById("btnGerar").addEventListener("click", gerarCartas);
document.getElementById("btnOrdenar").addEventListener("click", ordenar);

function gerarCartas() {
    const tamanho = Number(document.getElementById("tamanho").value);

    if (tamanho < 1 || tamanho > 80) {
        alert("Escolha um valor entre 1 e 20");
        return;
    }

    vetor = [];

    for (let i = 0; i < tamanho; i++) {
        vetor.push(Math.floor(Math.random() * 100));
    }

    cartas = [];

    renderizarCartas();
}

function renderizarCartas() {

    const mesa = document.getElementById("mesa");

    // Primeira renderização
    if (cartas.length === 0) {

        mesa.innerHTML = "";

        for (let i = 0; i < vetor.length; i++) {

            const carta = document.createElement("div");

            carta.className = "carta";

            carta.textContent = vetor[i];

            carta.dataset.index = i;

            cartas.push(carta);

            mesa.appendChild(carta);
        }

        return;
    }

    // Atualiza apenas os números
    for (let i = 0; i < vetor.length; i++) {

        cartas[i].textContent = vetor[i];

    }
}

async function animarTroca(i, j) {


    // Destaca as cartas que serão trocadas
    cartas[i].style.backgroundColor = "#ceec58ff";
    cartas[j].style.backgroundColor = "#ceec58ff";

    const mesa = document.getElementById("mesa");

    // Guarda a posição de cada carta
    const posicoesAntes = new Map();

    cartas.forEach(carta => {
        posicoesAntes.set(carta, carta.getBoundingClientRect());
    });

    // Troca as cartas no array
    [cartas[i], cartas[j]] = [cartas[j], cartas[i]];

    // Reorganiza o DOM
    cartas.forEach(carta => {
        mesa.appendChild(carta);
    });

    // Guarda a nova posição de cada carta
    const posicoesDepois = new Map();

    cartas.forEach(carta => {
        posicoesDepois.set(carta, carta.getBoundingClientRect());
    });

    // Coloca cada carta de volta visualmente na posição antiga
    cartas.forEach(carta => {

        const antes = posicoesAntes.get(carta);
        const depois = posicoesDepois.get(carta);

        const dx = antes.left - depois.left;
        const dy = antes.top - depois.top;

        carta.style.transition = "none";
        carta.style.transform = `translate(${dx}px, ${dy}px)`;

    });

    // Força o navegador a aplicar o transform
    await new Promise(resolve => {
        requestAnimationFrame(() => {
            requestAnimationFrame(resolve);
        });
    });

    // Faz a animação
    cartas.forEach(carta => {

        carta.style.transition = "transform 350ms ease";
        carta.style.transform = "translate(0, 0)";

    });

    // Espera terminar
    await new Promise(resolve => setTimeout(resolve, 350));


    cartas[i].style.backgroundColor = "white";
    cartas[j].style.backgroundColor = "white";
    // Atualiza o vetor
    [vetor[i], vetor[j]] = [vetor[j], vetor[i]];
}



async function animarPassos(passos) {

    for (const passo of passos) {
        await animarTroca(passo.i, passo.j);

    }
}


document.getElementById("tamanho").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        gerarCartas();
    }
});

async function ordenar() {
    const algoritmo = document.getElementById("algoritmo").value;

    switch (algoritmo) {

        case "bubble": {

            const inicio = performance.now();

            const resultado = bubblesort([...vetor]);

            await animarPassos(resultado.passos);

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

            const resultado = selectionsort([...vetor]);

            await animarPassos(resultado.passos);

            vetor = resultado.vetor;

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

            const resultado = insertionsort([...vetor]);

            await animarPassos(resultado.passos);

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

            const resultado = quicksort([...vetor]);

            await animarPassos(resultado.passos);

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

            const resultado = shellsort([...vetor]);

            await animarPassos(resultado.passos);

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

            const resultado = heapsort([...vetor]);

            await animarPassos(resultado.passos);

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

            const resultado = mergesort([...vetor]);

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