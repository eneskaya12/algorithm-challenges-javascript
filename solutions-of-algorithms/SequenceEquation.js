function permutationEquation(p) {

    let arithmeticSequence = [];
    let y = 0;

    for (let i = 1; i <= p.length; i++) {
        y = (p.indexOf(p.indexOf(i) + 1) + 1);
        arithmeticSequence.push(y);
    }

    return arithmeticSequence;
}