function divisibleSumPairs(n, k, ar) {

    let numberOfPairs = 0;

    for (let a = 0; a < n; a++) {

        for (let b = a + 1; b < n; b++) {
            let sum = ar[a] + ar[b];

            (sum % k == 0) ? numberOfPairs++ : true;
        }
    }
    return numberOfPairs;
}