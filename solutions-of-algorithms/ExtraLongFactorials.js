function extraLongFactorials(n) {

    let number = BigInt(n);
    let factorial = BigInt(1);

    while (number > 0) {
        factorial *= number;
        number--;
    }

    factorial = factorial.toString();
    console.log(factorial);
}