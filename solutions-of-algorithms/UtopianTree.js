function utopianTree(n) {

    let initialHeight = 1;

    for (let i = 1; i <= n; i++) {
        if (i % 2 !== 0) {
            initialHeight *= 2;
        } else {
            initialHeight++;
        }
    }

    return initialHeight;
}