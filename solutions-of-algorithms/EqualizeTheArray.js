function equalizeArray(arr) {

    let count = 0;
    let length = 0;

    for (let i = 0; i < arr.length; i++) {
        length = arr.filter((item) => item == arr[i]).length;
        (length > count) ? count = length : true;
    }

    let minDeletion = (arr.length - count);

    return minDeletion;
}