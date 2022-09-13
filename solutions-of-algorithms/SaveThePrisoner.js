function saveThePrisoner(n, m, s) {

    let awfulSweet = (s + m - 1);

    return (awfulSweet < n) ? awfulSweet : (awfulSweet % n > 0) ? awfulSweet % n : n;
}