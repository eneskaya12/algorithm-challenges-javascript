function flatlandSpaceStations(n, c) {
    
    if (n === c.length) {
        return 0;
    }
    
    let distances = Array(n).fill(n - 1);
    
    for (let station of c) {
        distances[station] = 0;
        
        for (let i = 1; i <= station; i++) {
            let left = station - i;
            if (distances[left] > i) {
                distances[left] = i;
            }
        }
        
        for (let i = 1; i <= n - station - 1; i++) {
            let right = station + i;
            if (distances[right] > i) {
                distances[right] = i;
            }
        }
    }
    
    return Math.max(...distances);
}