export function quicksort(vetor) {

    let comparacoes = 0;
    let trocas = 0;

    function particionar(vetor, inicio, fim) {

        const pivo = vetor[fim];
        let i = inicio - 1;

        for (let j = inicio; j < fim; j++) {

            comparacoes++;

            if (vetor[j] < pivo) {

                i++;

                [vetor[i], vetor[j]] = [vetor[j], vetor[i]];
                trocas++;
            }
        }

        [vetor[i + 1], vetor[fim]] = [vetor[fim], vetor[i + 1]];
        trocas++;

        return i + 1;
    }

    function quick(vetor, inicio, fim) {

        if (inicio < fim) {

            const indicePivo = particionar(vetor, inicio, fim);

            quick(vetor, inicio, indicePivo - 1);
            quick(vetor, indicePivo + 1, fim);
        }
    }

    quick(vetor, 0, vetor.length - 1);

    return {
        vetor,
        comparacoes,
        trocas
    };
}