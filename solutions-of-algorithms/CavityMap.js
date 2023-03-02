function cavityMap(grid) {
    
    for(let i = 0; i < grid.length; i++){
        grid[i] = grid[i].split("");
    }
    
    for (let i = 1; i < (grid.length - 1); i++) {
        for (let j = 1; j < (grid.length - 1); j++) {
            if (grid[i][j] > grid[i - 1][j] && grid[i][j] > grid[i + 1][j] && grid[i][j] > grid[i][j - 1] && grid[i][j] > grid[i][j + 1] ) {
                grid[i][j] = 'X';
            }
        }
    }
    
    for(let i = 0; i < grid.length; i++){
        grid[i] = grid[i].join("");
    }
    
    return grid;
}