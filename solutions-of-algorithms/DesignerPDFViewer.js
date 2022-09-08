function designerPdfViewer(h, word) {

    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const chars = word.split("");

    let letterHigh = 0;
    let tallestLetterHigh = 0;

    for (let i = 0; i < chars.length; i++) {
        letterHigh = h[alphabet.indexOf(chars[i])];

        if (letterHigh > tallestLetterHigh) {
            tallestLetterHigh = letterHigh;
        }
    }

    return (tallestLetterHigh * chars.length);
}