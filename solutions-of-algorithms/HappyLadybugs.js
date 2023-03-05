function happyLadybugs(b) {
    
    let frequency = [];
    let blankSpaces = 0;
    let canMove = false;

    for (let i = 0; i < b.length; i++) {
        if (b[i] === '_') {
            blankSpaces++;
        } else {
            if (i > 0 && b[i - 1] !== b[i] && i < b.length - 1 && b[i + 1] !== b[i]) {
                canMove = true;
            }

            if (!frequency[b[i]]) {
                frequency[b[i]] = 1;
            } else {
                frequency[b[i]]++;
            }
        }
    }

    for (let key in frequency) {
        if (frequency[key] === 1) {
            return "NO";
        }
    }

    if (blankSpaces === 0 && canMove) {
        return "NO";
    }
    
    return "YES";
}