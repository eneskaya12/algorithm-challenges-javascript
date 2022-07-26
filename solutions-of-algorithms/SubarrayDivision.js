function birthday(s, d, m) {

    let chocolateLength = s.length;
    let difference = chocolateLength - m;
    let numberOfWays = 0;

    if (chocolateLength < m) {
        return numberOfWays;
    }

    for (let i = 0; i < chocolateLength; i++) {
        let chocolatePart = s.slice(i, i + m);
        let sum = chocolatePart.reduce((acc, cur) => acc + cur, 0);

        if(d == sum){
            numberOfWays++ ;
        }

        if (i == difference) {
            return numberOfWays;
        } else {
            continue;
        }
    }
}