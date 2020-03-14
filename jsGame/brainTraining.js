let number1 = Math.ceil(Math.random() * 9);
let number2 = Math.ceil(Math.random() * 9);
let answer = number1 * number2;
let gameLife = 5; // 기회 추가

let question = document.createElement('div');
document.body.append(question);

let form = document.createElement('form');
document.body.append(form);

let userInput = document.createElement('input');
userInput.type = 'number';
form.append(userInput);

let button = document.createElement('button');
button.textContent = '입력';
form.append(button);

question.textContent = number1 + ' X ' + number2 + ' = ?';

let result = document.createElement('div');
document.body.append(result);

userInput.focus();

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    if(parseInt(userInput.value) == answer) {
        result.textContent = '정답 ⭕️';
        
        // 정답일 경우 새로운 문제
        let number1 = Math.ceil(Math.random() * 9);
        let number2 = Math.ceil(Math.random() * 9);

        question.textContent = number1 + ' X ' + number2 + ' = ?';
        answer = number1 * number2;
    } else {
        result.textContent = `다시! 남은 기회 : ${gameLife}`; // 오답일 경우에는 계속 그 문제 풀도록
        gameLife--;

        if(gameLife == -1) {
            document.body.innerHTML = 'GAME OVER';
        }
    }   

    userInput.value = ''; // 초기화
    userInput.focus();
})