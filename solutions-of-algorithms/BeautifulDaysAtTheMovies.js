function beautifulDays(i, j, k) {

    let beautifulDays = 0;

    while (i <= j) {

        let reverse = Math.sign(i) * (i.toString().split('').reverse().join(''));

        let difference = Math.abs(i - reverse);

        (difference % k == 0) ? beautifulDays++ : true;

        i++;
    }

    return beautifulDays;
}