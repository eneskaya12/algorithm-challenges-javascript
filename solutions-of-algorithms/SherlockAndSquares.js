function squares(a, b) {

    let firstNumber = Math.ceil(Math.sqrt(a));
    let lastNumber = Math.floor(Math.sqrt(b));
    let squareIntegers = (lastNumber - firstNumber) + 1;

    return squareIntegers;
}