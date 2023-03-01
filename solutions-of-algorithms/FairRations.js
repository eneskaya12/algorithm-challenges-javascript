function fairRations(B) {
    
    let count = 0;
    for (let i = 0; i < (B.length - 1); i++) {
        if (B[i] % 2 != 0) {
            count += 2;
            B[i]++;
            B[i + 1]++;
        }
    }
    for (let i = 0; i < B.length; i++) {
        if (B[i] % 2 != 0) {
            return "NO";
        }
    }
    return count;
}