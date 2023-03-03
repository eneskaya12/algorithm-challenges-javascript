function stones(n, a, b) {

    let result = [];
    let low = a;
    let high = b;
    
    if (a > b) {
        low = b;
        high = a;
    }
    
    for (let i = (n - 1); i >= 0; i--) {
        result.push(i * low + (n - i - 1) * high);
        if (low === high){
            break;
        }
    }
    return result;
}