function chocolateFeast(n, c, m) {

    let chocolateBar = Math.floor(n / c);
    let wrappers = chocolateBar;

    while (wrappers / m >= 1) {
        let newChocolates = Math.floor(wrappers / m);
        chocolateBar += newChocolates;
        wrappers -= (m * newChocolates);
        wrappers += newChocolates;
    }
    return chocolateBar;
}