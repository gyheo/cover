let gameOverCount = 5;
let gameClearCount = 0;

while(true) {
    let num1 = Math.floor(Math.random() * 9 + 1);
    let num2 = Math.floor(Math.random() * 9 + 1);
    let answer = num1 * num2;

    let userAnswer = prompt(`${num1} X ${num2} = ?, count : ${gameOverCount} (0 is quit)`);

    if(parseInt(userAnswer) == answer) {
        alert('PASS!');
        gameClearCount++;

        if(gameClearCount == 5) {
            alert('MISSION CLEAR!');
            break;
        }
    } else if(parseInt(userAnswer) == 0) {
        break;
    } else {
        alert('NOPE!');
        gameOverCount--;

        if(gameOverCount == 0) {
            alert('GAME OVER!');
            break;
        }    
    }
}