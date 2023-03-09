function insertionSort2(n, arr) {
    
    for (let i = 1; i < n; i++) {
        for (let j = i; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                let k = arr[j - 1];
                arr[j - 1] = arr[j];
                arr[j] = k;
            }
        }
        console.log(...arr);
    }
}