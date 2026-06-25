function gerarCartas() {
    const tamanho = Number(document.getElementById("tamanho").value);

    if (tamanho < 1 || tamanho > 20) {
        alert("Escolha um valor entre 1 e 20");
        return;
    }

    const mesa = document.getElementById("mesa");
    mesa.innerHTML = "";

    for (let i = 0; i < tamanho; i++) {
        const carta = document.createElement("div");
        carta.classList.add("carta");

        // carta em branco (sem valor)
        carta.innerText = "";

        mesa.appendChild(carta);
    }
}