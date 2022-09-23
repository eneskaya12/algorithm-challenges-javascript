function cutTheSticks(arr) {
    
    let numberOfSticks = [];

    while (arr.length > 0) {
        let lengthOfCut = Math.min(...arr);
        let restOfSticks = [];

        for (let i = 0; i < arr.length; i++) {
            let a = arr[i] - lengthOfCut;
            restOfSticks.push(a);
        }
        numberOfSticks.push(arr.length);
        arr = restOfSticks.filter(stick => stick != 0);
    }

    return numberOfSticks;
}