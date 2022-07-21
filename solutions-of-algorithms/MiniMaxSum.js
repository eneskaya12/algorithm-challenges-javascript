function miniMaxSum(arr) {

    let min = arr[0];
    let max = 0;
    let sum = 0;
    
    for(let a=0;a<arr.length;a++){
        
        if(arr[a]<min){
            min = arr[a];
        }
        
        if(arr[a]>max){
            max = arr[a];
        }
        sum+=arr[a];
    }
    
    let minSum = sum-max;
    let maxSum = sum-min;
    
    console.log(minSum,maxSum);
}