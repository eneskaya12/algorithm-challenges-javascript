function beautifulTriplets(d, arr) {
    
    let result = 0;

    for (let i = 0; i < arr.length; i++) {
        let secondIndex = arr[i] + d;
        let thirdIndex = secondIndex + d;

        (arr.includes(secondIndex) && arr.includes(thirdIndex)) ? result++ : null;
    }

    return result;
}