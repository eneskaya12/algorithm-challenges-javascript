function breakingRecords(scores) {

    let highestScore = scores[0];
    let lowestScore = scores[0];
    let mostPointsRecords = 0;
    let leastPointsRecords = 0;
    
    for(let i = 1; i < scores.length; i++){
        
        if(highestScore < scores[i]){
            highestScore = scores[i];
            mostPointsRecords++ ;
        }else if(lowestScore > scores[i]){
            lowestScore = scores[i];
            leastPointsRecords++ ;
        }
    }
    return [mostPointsRecords, leastPointsRecords];
}