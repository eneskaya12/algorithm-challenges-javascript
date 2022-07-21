function birthdayCakeCandles(candles) {

    let tallestCandle = 0;
    let numberOfTallestCandle = 0;
    
    for(let a=0;a<candles.length;a++){
        
        if(tallestCandle<candles[a]){
            tallestCandle = candles[a];
        }
    }
    
    for(let a=0;a<candles.length;a++){
        
        if(tallestCandle == candles[a]){
            numberOfTallestCandle++;
        }
    }
    
    return numberOfTallestCandle;    
}