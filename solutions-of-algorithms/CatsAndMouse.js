function catAndMouse(x, y, z) {
    
    let distanceOfCatA = Math.abs(x - z);
    let distanceOfCatB = Math.abs(y - z);

    if (distanceOfCatA < distanceOfCatB) {
        return "Cat A";
    } else if (distanceOfCatA > distanceOfCatB){
        return "Cat B";
    }else{
        return "Mouse C";
    }
}