function countApplesAndOranges(s, t, a, b, apples, oranges) {

    let appleCount = 0;
    let orangeCount = 0;
    
    apples.map(apple => {
        (apple + a >= s && apple + a <= t) ? appleCount++ : true; 
    });
    
    oranges.map(orange => {
        (orange + b >= s && orange + b <= t) ? orangeCount++ : true; 
    });
    console.log(appleCount);
    console.log(orangeCount);
}