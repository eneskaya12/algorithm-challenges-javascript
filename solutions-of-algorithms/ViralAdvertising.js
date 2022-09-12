function viralAdvertising(n) {

    let recipinties = 5;
    let cumulative = 0;

    for (let i = 1; i <= n; i++) {
        let liked = Math.floor(recipinties / 2);
        cumulative += liked;
        recipinties = liked * 3;
    }

    return cumulative;
}