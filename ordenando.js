
const swap = (vetor, pos1, pos2) => {
    [vetor[pos1], vetor[pos2]] = [vetor[pos2], vetor[pos1]];
};


const shuffle = (vetor, trocas) => {
    for (let i = 0; i < trocas; i++) {
        const pos1 = Math.floor(Math.random() * vetor.length);
        const pos2 = Math.floor(Math.random() * vetor.length);
        swap(vetor, pos1, pos2);
    }
};


const bubble_sort = (vetor) => {
    const n = vetor.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (vetor[j] > vetor[j + 1]) {
                swap(vetor, j, j + 1);
            }
        }
    }
};


const selection_sort = (vetor) => {
    const n = vetor.length;
    for (let i = 0; i < n - 1; i++) {
        let min_index = i;
        for (let j = i + 1; j < n; j++) {
            if (vetor[j] < vetor[min_index]) {
                min_index = j;
            }
        }
        if (min_index !== i) {
            swap(vetor, i, min_index);
        }
    }
};


const quick_sort = (vetor, inicio = 0, fim = vetor.length - 1) => {
    if (inicio < fim) {
        const p = particionamento(vetor, inicio, fim);
        quick_sort(vetor, inicio, p - 1);
        quick_sort(vetor, p + 1, fim);
    }
};


const particionamento = (vetor, inicio, fim) => {
    const pivot = vetor[fim];
    let i = inicio - 1;
    for (let j = inicio; j < fim; j++) {
        if (vetor[j] < pivot) {
            i++;
            swap(vetor, i, j);
        }
    }
    swap(vetor, i + 1, fim);
    return i + 1;
};


module.exports = {
    swap,
    shuffle,
    bubble_sort,
    selection_sort,
    quick_sort,
    particionamento
};
