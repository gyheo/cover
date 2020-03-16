const body = document.body;

const gameTitle = document.createElement('h1');
gameTitle.textContent = '숫자 야구!'
document.body.append(gameTitle);

let numbers = [];
let lifeCount = 5;

function makeProblem(numbers) {
    let numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = 0; i < 4; i++) {
        // let num = numberArr.pop();
        let num = numberArr.splice(Math.floor(Math.random() * 9 - i), 1)[0];
        // let num = numberArr.splice(Math.floor(Math.random() * numberArr.length), 1)[0];
        numbers.push(num);
    }
    console.log(numbers);
}

makeProblem(numbers);

let form = document.createElement('form');
document.body.append(form);

let answer = document.createElement('input');
answer.maxLength = 4;
form.append(answer);
answer.focus();

let submitButton = document.createElement('button');
submitButton.textContent = '입력';

let result = document.createElement('div');
document.body.append(result);

form.append(submitButton);

form.addEventListener('submit', function (e) {
    e.preventDefault();
    
    if(answer.value == numbers.join('')) {
        result.textContent = '홈런';

        numbers = [];
        makeProblem(numbers);
        lifeCount = 5;
    } else { // 틀렸을 경우
        lifeCount--;

        if(!lifeCount) { // 기회 모두 소진했을 경우
            result.textContent = `정답은 ${numbers.join('')} 이었습니다. 다시 시도해주세요!`;
            
            numbers = [];
            makeProblem(numbers);
            lifeCount = 5;
            return;
        }

        let answerArray = answer.value.split('');
        let strikeCount = 0;
        let ballCount = 0;

        for (let i = 0; i < numbers.length; i++) {
            if(numbers[i] == parseInt(answerArray[i])){
                strikeCount++;
            } else if(numbers.indexOf(Number(answerArray[i])) > -1) {
                ballCount++;
            }
        }
        result.textContent = `${strikeCount} 스트라이크 ${ballCount} 볼`;
    }

    answer.focus();
    answer.value = '';
});