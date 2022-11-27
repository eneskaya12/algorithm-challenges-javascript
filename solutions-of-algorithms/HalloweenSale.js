function howManyGames(p, d, m, s) {

    let total = p;
    let games = 0;
    
    while(total <= s){
        p -= d;        
        if(p > m){
            total += p;
        }else{
            p = m;
            total += p;
        }
        games++;
    }
    return games;
}