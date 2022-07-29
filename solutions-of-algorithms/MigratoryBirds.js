function migratoryBirds(arr) {

    let type = [0, 0, 0, 0, 0];

    for (let i = 0; i < arr.length; i++) {

        switch (arr[i]) {
            case 1:
                type[0]++;
                break;
            case 2:
                type[1]++;
                break;
            case 3:
                type[2]++;
                break;
            case 4:
                type[3]++;
                break;
            case 5:
                type[4]++;
                break;
        }
    }

    let highest = Math.max(...type);

    for (let i = 0; i < type.length; i++) {

        if (highest === type[i]) {
            return i + 1;
        }
    }
}