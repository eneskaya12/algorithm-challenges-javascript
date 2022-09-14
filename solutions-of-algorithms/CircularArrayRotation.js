function circularArrayRotation(a, k, queries) {

    let indices = [];

    for (let i = k; i > 0; i--) {
        a.unshift(a.pop());
    }

    for (let q of queries) {
        indices.push(a[q]);
    }

    return indices;
}