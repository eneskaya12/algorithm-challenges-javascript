function findDigits(n) {

    let number = n.toString().split('').map(item => Number(item));
    let divisors = 0;

    for (let i = 0; i < number.length; i++) {
        (n % number[i] == 0) ? divisors++ : true;
    }

    return divisors;
}