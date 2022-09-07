function climbingLeaderboard(ranked, player) {

    const uniq = [...new Set(ranked)];
    const uLength = uniq.length;

    let playersRank = [];

    let i = uLength - 1;

    player.forEach((score) => {
        while (0 <= i) {
            if (score >= uniq[i]) {
                i--;
            } else {
                playersRank.push(i + 2);
                break;
            }
        }
        (i < 0) ? playersRank.push(1) : true;
    });

    return playersRank;
}