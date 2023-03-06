function superReducedString(s) {
    
    let newS = s;

    for (let i = 0; i < s.length; i++) {
        newS = newS.replace('' + s[i] + s[i], '');
    }

    if (newS.length != 0) {
        return newS;
    } else {
        return "Empty String";
    }
}