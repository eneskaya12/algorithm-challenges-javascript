function dayOfProgrammer(year) {

    let leapYear = true;

    if (year < 1918) {
        (year % 4 === 0) ? leapYear = true : leapYear = false;
    } else if (year > 1918) {
        (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) ? leapYear = true : leapYear = false;
    } else{
        return ((12 + 14) + ".09." + year); 
    }

    if (leapYear) {
        return ("12.09." + year);
    } else {
        return ("13.09." + year);
    }
}