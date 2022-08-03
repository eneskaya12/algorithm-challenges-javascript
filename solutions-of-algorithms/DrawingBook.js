function pageCount(n, p) {

    let blockOfPages = Math.round(((n-1)/2)+1);
    let fromFront = 0;
    let fromBack = 0;
         
    for(let i = 1; i < p; i += 2){
        fromFront ++;
        if(i == p || i-1 == p){
            break;
        }
    }
    
    fromBack = ((blockOfPages-1) - fromFront);
    
    if(fromFront < fromBack){
        return fromFront;
    }else{
        return fromBack;
    }
}