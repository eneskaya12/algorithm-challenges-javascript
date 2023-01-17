function workbook(n, k, arr) {

    let pageNumber = 1;
    let specialProblems = 0;
    for (let i = 0; i < n; i++) {
        let problems = arr[i];
        let d = k;
        for (let j = 1; j <= problems; j++) {
            if (j > d) {
                pageNumber++;
                d += k;
            }
            if (j === pageNumber) {
                specialProblems++;
            }
        }
        pageNumber++;
    }
    return specialProblems;
}