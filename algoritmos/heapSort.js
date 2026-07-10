export function heapsort(vetor) {

    let comparacoes = 0;
    let trocas = 0;
    let passos = [];

    function heapify(arr, n, i) {

        let maior = i;

        const esquerda = 2 * i + 1;
        const direita = 2 * i + 2;

        if (esquerda < n) {

            comparacoes++;

            if (arr[esquerda] > arr[maior]) {
                maior = esquerda;
            }
        }

        if (direita < n) {

            comparacoes++;

            if (arr[direita] > arr[maior]) {
                maior = direita;
            }
        }

        if (maior !== i) {

            [arr[i], arr[maior]] = [arr[maior], arr[i]];

            trocas++;

            passos.push({
                i,
                j: maior
            });

            heapify(arr, n, maior);
        }
    }

    const arr = [...vetor];
    const n = arr.length;

    // Monta o heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }

    // Remove o maior elemento repetidamente
    for (let i = n - 1; i > 0; i--) {

        [arr[0], arr[i]] = [arr[i], arr[0]];

        trocas++;

        passos.push({
            i: 0,
            j: i
        });

        heapify(arr, i, 0);
    }

    return {
        vetor: arr,
        comparacoes,
        trocas,
        passos
    };
}