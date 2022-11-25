function minimumDistances(a) {
 
    let minDistance = [];
    
    for(let i = 0; i < a.length; i++){
        let secondsIndex = a.lastIndexOf(a[i]);
        
        if(secondsIndex != i){
            let distance = Math.abs(i - secondsIndex); 
            minDistance.push(distance);   
        }       
    }
    
    return (minDistance.length == 0) ? -1 : Math.min(...minDistance);
}