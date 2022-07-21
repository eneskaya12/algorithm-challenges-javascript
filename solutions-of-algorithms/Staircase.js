function staircase(n) {

    let output="";
    
    for(let b=1;b<=n;b++){
        
        for(let c=0;c<(n-b);c++){
            output+=" ";
        }
        
        for(let d=0;d<b;d++){
            output+="#";
        }
        output+="\n"       
    }
    console.log(output);    
}