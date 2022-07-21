function diagonalDifference(arr) {

    let primaryDiagonal =0;
    let secondaryDiagonal =0;
    
    for(let a=0;a<arr.length;a++){
        
        let b = (arr.length-1)-a;
        
        primaryDiagonal+=arr[a][a];
        secondaryDiagonal+=arr[a][b];
    }
    
    return Math.abs(primaryDiagonal - secondaryDiagonal);
}