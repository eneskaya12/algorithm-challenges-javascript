function gradingStudents(grades) {

    let finalGrades = [];
    
    for(let a = 0; a < grades.length; a++){
        
        if(grades[a] < 38){
            finalGrades.push(grades[a]);
        }else{
            
            let difference = 0;
            
            while(grades[a] % 5 != 0){
                grades[a]++;
                difference++;
            }
            
            (difference < 3)
            ? finalGrades.push(grades[a])
            : finalGrades.push(grades[a] - difference);
        }
    }
    return finalGrades;
}