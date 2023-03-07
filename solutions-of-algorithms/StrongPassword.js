function minimumNumber(n, password) {
    
    let count = 0;

    if (!/\d/.test(password)) count++;
    if (!/[a-z]/.test(password)) count++;
    if (!/[A-Z]/.test(password)) count++;
    if (!/[!@#$%^&*()\-+]/.test(password)) count++;
    
    return Math.max(count, 6 - n);
}