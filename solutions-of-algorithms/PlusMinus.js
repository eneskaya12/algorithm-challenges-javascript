function plusMinus(arr) {

    let positiveValues =0;
    let negativeValues =0;
    let zeros =0;
    
    for(let i =0;i<arr.length;i++){
        
        if(arr[i]>0){
            positiveValues+=1;
        }else if(arr[i]<0){
            negativeValues+=1;
        }else{
            zeros+=1;
        }
    }
}