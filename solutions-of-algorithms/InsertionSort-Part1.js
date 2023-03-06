function insertionSort1(n, arr) {
    
    let value = arr[arr.length - 1];
    
    for (let i = (arr.length - 2); i >= -1; i--) {
        if (value < arr[i]) {
            arr[i + 1] = arr[i]
            console.log(...arr);
        } else {
            arr[i + 1] = value;
            console.log(...arr);
            break;
        }
    }
}