function getTotalX(a, b) {

    let lastOfA = a[a.length-1];
    let firstOfB = b[0];
    let result = 0;
    
    for(let i = lastOfA; i <= firstOfB; i++){
        
        if((a.every(value => i % value === 0))){
            
            if((b.every(value => value % i === 0))){
                result++;    
            }            
        }
    }
    return result;
}