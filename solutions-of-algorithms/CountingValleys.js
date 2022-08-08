function countingValleys(steps, path) {

    const uphillAndDownhill = path.split('');
    let level = 0;
    let valleys = 0;

    uphillAndDownhill.forEach((step) => {

        if (step === "U") {
            level++;
            (level == 0) ? valleys++ : true; 
        } else {
            level--;
        }    
    })
    
    return valleys;
}