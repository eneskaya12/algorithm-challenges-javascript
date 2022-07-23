function taumBday(b, w, bc, wc, z) {
    
    let blackToWhite = ((b+w)*bc)+(w*z);
    let whiteToBlack = ((b+w)*wc)+(b*z);
    let minCost = (b*bc)+(w*wc);
    
    if(blackToWhite < minCost){
        return blackToWhite;
    }else if(whiteToBlack < minCost){
        return whiteToBlack;
    }else{
        return minCost;
    }
}