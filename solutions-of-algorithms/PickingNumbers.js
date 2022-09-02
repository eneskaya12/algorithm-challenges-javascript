function pickingNumbers(a) {

    let subarray = [];
    let subarrayCounter = 0;

    a.sort(function (a, b) { return a - b; });

    for (let i = 0; i < (a.length); i++) {
        for (let j = i; j < a.length; j++) {
            if (a[j] - a[i] == 1 || a[j] - a[i] == 0) {
                subarrayCounter++;
            }
        }
        subarray.push(subarrayCounter);
        subarrayCounter = 0;
    }

    return Math.max(...subarray);
}