export function selectionsort(vetor) {

    let comparacoes = 0;
    let trocas = 0;

    const n = vetor.length;

    for (let i = 0; i < n - 1; i++) {

        let min_index = i;

        for (let j = i + 1; j < n; j++) {

            comparacoes++;

            if (vetor[j] < vetor[min_index]) {
                min_index = j;
            }
        }

        if (min_index !== i) {

            let temp = vetor[i];
            vetor[i] = vetor[min_index];
            vetor[min_index] = temp;

            trocas++;
        }
    }

    return {
        vetor,
        comparacoes,
        trocas
    };
}