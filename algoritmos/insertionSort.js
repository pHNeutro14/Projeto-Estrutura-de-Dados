export function insertionsort(vetor) {

    let comparacoes = 0;
    let trocas = 0;
    let passos = [];

    const n = vetor.length;

    for (let i = 1; i < n; i++) {

        let j = i;

        while (j > 0) {

            comparacoes++;

            if (vetor[j - 1] > vetor[j]) {

                [vetor[j - 1], vetor[j]] = [vetor[j], vetor[j - 1]];

                passos.push({
                    i: j - 1,
                    j: j
                });

                trocas++;
                j--;

            } else {
                break;
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