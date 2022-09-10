function angryProfessor(k, a) {

    let notCancelled = 0;

    for (let time of a) {
        (time <= 0) ? notCancelled++ : true;
    }

    if (notCancelled >= k) {
        return "NO";
    } else {
        return "YES";
    }
}