export function mergesort(vetor) {
    let comparacoes = 0;
    let trocas = 0;

    const arr = [...vetor];

    function merge(esq, dir) {
        const resultado = [];
        let i = 0;
        let j = 0;

        while (i < esq.length && j < dir.length) {
            comparacoes++;

            if (esq[i] <= dir[j]) {
                resultado.push(esq[i]);
                i++;
            } else {
                resultado.push(dir[j]);
                j++;
            }

            trocas++;
        }

        while (i < esq.length) {
            resultado.push(esq[i]);
            i++;
            trocas++;
        }

        while (j < dir.length) {
            resultado.push(dir[j]);
            j++;
            trocas++;
        }

        return resultado;
    }

    function mergeSortRec(v) {
        if (v.length <= 1) {
            return v;
        }

        const meio = Math.floor(v.length / 2);

        const esq = mergeSortRec(v.slice(0, meio));
        const dir = mergeSortRec(v.slice(meio));

        return merge(esq, dir);
    }

    const vetorOrdenado = mergeSortRec(arr);

    return {
        vetor: vetorOrdenado,
        comparacoes,
        trocas
    };
}