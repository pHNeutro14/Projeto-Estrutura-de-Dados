export function shellsort(vetor) {

    let comparacoes = 0;
    let trocas = 0;

    const n = vetor.length;

    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {

        for (let i = gap; i < n; i++) {

            let temp = vetor[i];
            let j = i;

            while (j >= gap) {

                comparacoes++;

                if (vetor[j - gap] > temp) {
                    vetor[j] = vetor[j - gap];
                    trocas++;
                    j -= gap;
                } else {
                    break;
                }
            }

            vetor[j] = temp;
        }
    }

    return {
        vetor,
        comparacoes,
        trocas
    };
}