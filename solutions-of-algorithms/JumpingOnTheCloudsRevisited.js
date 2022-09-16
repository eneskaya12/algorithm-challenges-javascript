function jumpingOnClouds(c, k) {

    let energyLevel = 100;

    for (let i = 0; i < c.length; i += k) {
        if (c[i] == 0) {
            energyLevel--;
        } else if (c[i] == 1) {
            energyLevel -= 3;
        }
    }

    return energyLevel;
}