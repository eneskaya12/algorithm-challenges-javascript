function bonAppetit(bill, k, b) {

    let sum = bill.reduce((acc, cur) => acc + cur, 0);
    let bActual = (sum - bill[k]) / 2;
    
    (bActual == b) ? console.log("Bon Appetit") : console.log(bill[k] / 2);
}