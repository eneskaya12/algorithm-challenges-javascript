function kaprekarNumbers(p, q) {
    
    let result = [];

    for (let i = p; i <= q; i++) {
        
        let sqI = (i * i).toString();
        let half = sqI.length / 2;
        let r_int = sqI.substring(0, half);
        let l_int = sqI.substring(half, sqI.length);
        
        if (Number(r_int) + Number(l_int) === i) {
            result.push(i);
        }
    }

    if (result.length != 0) {
        console.log(...result);
    } else {
        console.log("INVALID RANGE");
    }
}