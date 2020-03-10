const body = document.body; // Document Object Model 이해
let word = document.createElement('div');
word.textContent = '한글날';

document.body.append(word);

let answer = document.createElement('input');
document.body.append(answer);

let submitButton = document.createElement('button');
submitButton.textContent = '입력';

let result = document.createElement('div');
document.body.append(result);

document.body.append(submitButton);

// 영상 보기 전
submitButton.onclick = function () {
    if(word.textContent[word.textContent.length - 1] == answer.value[0]) {
        alert('GOOD!');
        word.textContent = answer.value;
        answer.value = '';
    } else if (answer.value[0] == ' ') { // 공백 처리
        alert('No Space!');
        answer.value = '';
    } else { // 오답 처리
        alert('TRY AGAIN!');
        answer.value = '';
    }
}