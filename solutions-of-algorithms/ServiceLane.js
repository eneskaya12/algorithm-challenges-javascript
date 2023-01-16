function serviceLane(n, cases, width) {

    let result = [];
    for (let i = 0; i < cases.length; i++) {
        let minWidth = [];
        let first = cases[i][0];
        let last = cases[i][1];
        for (first; first <= last; first++) {
            minWidth.push(width[first]);
        }
        result.push(Math.min(...minWidth));
    }
    return result;
}