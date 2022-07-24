function kangaroo(x1, v1, x2, v2) {

    let a = x2-x1;
    let b = v1-v2;
    
    let result = (a % b == 0 && v1>v2) ? "YES" : "NO";
    return result;
}