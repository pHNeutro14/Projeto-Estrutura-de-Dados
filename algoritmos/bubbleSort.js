export function bubblesort(vetor) {

    let comparacoes = 0;
    let trocas = 0;
    let passos = [];

    for (let i = 0; i < vetor.length - 1; i++) {

        for (let j = 0; j < vetor.length - i - 1; j++) {

            comparacoes++;

            if (vetor[j] > vetor[j + 1]) {

                [vetor[j], vetor[j + 1]] = [vetor[j + 1], vetor[j]];

                trocas++;

                passos.push({
                    i: j,
                    j: j + 1
                });
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