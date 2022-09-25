function repeatedString(s, n) {

    let k = s.length;
    let ac = 0;

    for (let i = 0; i < k; i++) {
        if (s[i] === "a") { ac++; }
    }

    ac *= Math.floor(n / k);
    let remainder = n % k;

    for (let i = 0; i < remainder; i++) {
        if (s[i] === "a") {
            ac++;
        }
    }
    return ac;
}