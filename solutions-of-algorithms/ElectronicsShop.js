function getMoneySpent(keyboards, drives, b) {

    let totalPrices = [];
    let affordablePrices = [];

    keyboards.forEach(a => {
        drives.forEach(b => {
            totalPrices.push(a + b);
        });
    });
    
    totalPrices.forEach(c => {
       (c <= b) ? affordablePrices.push(c) : true; 
    });
    
    if(affordablePrices.length !== 0){
        return Math.max(...affordablePrices);
    }else{
        return -1;
    }
}