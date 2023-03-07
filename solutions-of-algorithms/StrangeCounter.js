function strangeCounter(t) {
   
    let value = 3;

    while (value - 2 <= t) {
        value *= 2;
    }
    return value - 2 - t;
}