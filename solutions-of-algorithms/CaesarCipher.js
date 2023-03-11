function caesarCipher(s, k) {
    
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let ucAlphabet = alphabet.toUpperCase();
    let result = [];
    for (let key of s) {
        if (ucAlphabet.includes(key)) {
            let a = ucAlphabet.indexOf(key);
            if ((a + k) >= ucAlphabet.length) {
                result.push(ucAlphabet[((a + k) % 26)]);
            } else {
                result.push(ucAlphabet[a + k]);
            }
        } else if (alphabet.includes(key)) {
            let a = alphabet.indexOf(key);
            if ((a + k) >= alphabet.length) {
                result.push(alphabet[((a + k) % 26)]);
            } else {
                result.push(alphabet[a + k]);
            }
        } else {
            result.push(key);
        }
    }
    return result.join('');
}