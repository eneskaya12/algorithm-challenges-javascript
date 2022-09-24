function nonDivisibleSubset(k, s) {

    let count = [];
    let temp = k;
    let answer = 0;

    while (temp > 0) {
        count.push(0);
        temp--;
    }

    s.forEach(i => {
        let remainder = i % k;
        count[remainder]++;
    });

    (count[0] > 0) ? answer++ : true;

    (k % 2 == 0 && count[k / 2] > 0) ? answer++ : true;

    for (let a = 1; a < k / 2; a++) {
        answer += Math.max(count[a], count[k - a]);
    }

    return answer;
}