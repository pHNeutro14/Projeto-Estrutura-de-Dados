export function shellsort(vetor) {

    let comparacoes = 0;
    let trocas = 0;
    let passos = [];

    const n = vetor.length;

    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {

        for (let i = gap; i < n; i++) {

            let j = i;

            while (j >= gap) {

                comparacoes++;

                if (vetor[j - gap] > vetor[j]) {

                    [vetor[j - gap], vetor[j]] = [vetor[j], vetor[j - gap]];

                    passos.push({
                        i: j - gap,
                        j: j
                    });

                    trocas++;

                    j -= gap;

                } else {
                    break;
                }
            }
        }
    }

    return {
        vetor,
        comparacoes,
        trocas,
        passos
    };
}