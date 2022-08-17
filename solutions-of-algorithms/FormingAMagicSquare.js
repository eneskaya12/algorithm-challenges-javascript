function formingMagicSquare(s) {

    // Half of possible magic squares which I found from the internet. Then, I'll use their reverse for other possible magic squares.
    let magicSquare = [[8, 1, 6, 3, 5, 7, 4, 9, 2], [6, 1, 8, 7, 5, 3, 2, 9, 4], [8, 3, 4, 1, 5, 9, 6, 7, 2], [4, 3, 8, 9, 5, 1, 2, 7, 6]];
    let numbers = [];
    let cost = Number.MAX_SAFE_INTEGER;

    s.forEach(item => item.forEach(number => numbers.push(number)));

    for (let i = 0; i < magicSquare.length; i++) {

        let difference1 = 0;
        let difference2 = 0;

        for (let j = 0; j < numbers.length; j++) {
            (numbers[j] == magicSquare[i][j]) ? true : difference1 += Math.abs((magicSquare[i][j]) - (numbers[j]));
        }

        let magicSquareReverse = magicSquare[i].reverse();

        for (let k = 0; k < numbers.length; k++) {
            (numbers[k] == magicSquareReverse[k]) ? true : difference2 += Math.abs((magicSquareReverse[k]) - (numbers[k]));
        }

        if (difference1 <= difference2) {
            if (difference1 <= cost) {
                cost = difference1;
            }
        } else if (difference2 <= difference1) {
            if (difference2 <= cost) {
                cost = difference2;
            }
        }
    }
    return cost;
}