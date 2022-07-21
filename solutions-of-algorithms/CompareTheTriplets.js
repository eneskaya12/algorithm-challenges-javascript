function compareTriplets(a, b) {

    let alice =0;
    let bob =0;
    
    if(a[0]>b[0]){
        alice+=1;
    }else if(a[0]<b[0]){
        bob+=1;
    }
    
    if(a[1]>b[1]){
        alice+=1;
    }else if(a[1]<b[1]){
        bob+=1;
    }
    
    if(a[2]>b[2]){
        alice+=1;
    }else if(a[2]<b[2]){
        bob+=1;
    }
    
    return [alice,bob];
}