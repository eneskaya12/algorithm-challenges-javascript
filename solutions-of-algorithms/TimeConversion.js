function timeConversion(s) {

    let [hour, minute, second] = s.split(':');
    
    if(s[8]==="A"){
        
        if(hour == 12){
            hour = '00';
            s = (hour+":"+minute+":"+second);
            
            return s.slice(0,8);
        }else{
            s = (hour+":"+minute+":"+second);
            
            return s.slice(0,8);
        }
    }else{
        
        if(hour == 12){
            s = (hour+":"+minute+":"+second);
            
            return s.slice(0,8);
        }else{
            hour = parseInt(hour) + 12;
            s = (hour+":"+minute+":"+second);
            
            return s.slice(0,8);
        }
    }
}