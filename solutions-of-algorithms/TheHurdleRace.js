function hurdleRace(k, height) {

    let maxHurdleHeight = Math.max(...height);

    if (k >= maxHurdleHeight) {
        return 0;
    } else {
        return (maxHurdleHeight - k);
    }
}