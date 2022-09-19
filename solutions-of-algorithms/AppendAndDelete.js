function appendAndDelete(s, t, k) {
 
    let sameLetters = 0;
    let operations = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] == t[i]) {
            sameLetters++;
        } else {
            break;
        }
    }

    operations = (s.length - sameLetters) + (t.length - sameLetters);

    (s.length < t.length) ? operations = (s.length + t.length) : true;

    (s[0] == t[(t.length - 1)]) ? operations = (t.length - s.length) : true;

    return (operations <= k) ? "Yes" : "No";
}