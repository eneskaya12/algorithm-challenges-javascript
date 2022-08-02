function sockMerchant(n, ar) {

    let numberOfPairs = 0;
    let socks = new Set();

    ar.forEach((sock) => {

        if (socks.has(sock)) {
            numberOfPairs++;
            socks.delete(sock);
        } else {
            socks.add(sock);
        }
    });

    return numberOfPairs;
}