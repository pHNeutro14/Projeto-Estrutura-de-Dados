export function insertionsort(vetor) {

    let comparacoes = 0;
    let trocas = 0;

    const n = vetor.length;

    for (let i = 1; i < n; i++) {

        let chave = vetor[i];
        let j = i - 1;

        while (j >= 0) {

            comparacoes++;

            if (vetor[j] > chave) {
                vetor[j + 1] = vetor[j];
                trocas++;
                j--;
            } else {
                break;
            }
        }

        vetor[j + 1] = chave;
    }

    return {
        vetor,
        comparacoes,
        trocas
    };
}